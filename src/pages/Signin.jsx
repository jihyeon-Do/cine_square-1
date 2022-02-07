import React, { useCallback, useRef, useState, useEffect } from 'react';
import { message } from 'antd';
import './signin.scss';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { startGetUserInfoActionCreator } from '../redux/modules/auth';
import { push } from 'connected-react-router';

const { Kakao } = window;
const { naver } = window;


export default function Signin() {

  const history = useHistory();
  const dispatch = useDispatch();
  const [account, setAccount] = useState('');
  const passwordRef = useRef('');

  function click() {
    const password = passwordRef.current.value;
    if (account === '' || password === '' || account == null || password == null) {
      message.error('이메일 또는 비밀번호가 입력되지 않았습니다.')
    } else {
      getUser(account, password);
    }
  }

  const getUser = useCallback((account, password) => {
    dispatch(startGetUserInfoActionCreator(account, password));
  }, [dispatch])

  function loginWithKakao() {
    Kakao.Auth.login({
      success: function (authObj) {
        const kakaoToken = Kakao.Auth.getAccessToken();
        console.log(kakaoToken);
        console.log(authObj);
        localStorage.removeItem('kakao_7b617f923188c842b0efaaecb0e0c1ad');
        Kakao.API.request({
          url: '/v2/user/me',
          success: res => {
            console.log(res);
            history.push('/complete');
          }
        })
      },
      fail: function (err) {
        alert(JSON.stringify(err));
      },
    })

  }

  const initializeNaverLogin = () => {
    const naverLogin = new naver.LoginWithNaverId({
      clientId: "TczK7UIIwTaztom5Lmsv",
      callbackUrl: "http://localhost:3000/complete",
      isPopup: false, // popup 형식으로 띄울것인지 설정
      loginButton: { color: 'white', type: 1, height: '45' }, //버튼의 스타일, 타입, 크기를 지정
    });
    naverLogin.init();
  };

  useEffect(() => {
    initializeNaverLogin();
  }, []);

  return (
    <div className="signin-wrapper">
      <h1 className="a11y-hidden">로그인 페이지</h1>
      <img className="background-img" src="./images/luca.jpg" alt="background" />
      <div className="background"></div>
      {/* <h1><img src="./images/login_logo.png" alt="login_logo" /></h1> */}
      <div className="login-form">
        <form>
          <fieldset>
            <legend>Sign in</legend>
            <input type="text" value={account} onChange={change} placeholder="이메일주소" aria-label="이메일" />
            <input type="password" ref={passwordRef} placeholder="비밀번호" aria-label="비밀번호" />
            <button className="login-btn" onClick={click} type="button">로그인</button>
            <div className='btn-box'>
              <button type="button" className="signup-btn" onClick={goSignup}>회원가입</button>
              <button type="button" className="cancel-btn" onClick={() => dispatch(push('/'))}>취소</button>
            </div>

            <div className="social-btn">
              <p>소셜로그인</p>
              <ul>
                <li><button type="button" className="kakao_btn" onClick={loginWithKakao}>카카오로그인</button></li>
                <li><div className="naver-btn" id='naverIdLogin' /></li>
              </ul>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );

  function change(e) {
    setAccount(e.target.value);
  }


  function goSignup() {
    dispatch(push('/signup'));
  }
}
