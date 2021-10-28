import React from 'react';
import { message } from 'antd';
import axios from 'axios';
import './signin.scss'
import { useRef, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const { Kakao } = window;
const { naver } = window;


export default function Signin() {

  const history = useHistory();

  const [account, setAccount] = useState('')
  const passwordRef = useRef('');

  // if (localStorage.getItem('token')) {
  //   history.push('/')
  // }


  function loginWithKakao() {
    Kakao.Auth.login({
      success: function (authObj) {
        const kakaoToken = Kakao.Auth.getAccessToken();
        console.log(kakaoToken)
        console.log(authObj)
        localStorage.removeItem('kakao_7b617f923188c842b0efaaecb0e0c1ad');
        Kakao.API.request({
          url: '/v2/user/me',
          success: res => {
            console.log(res)
            history.push('/complete')
          }
        })
      },
      fail: function (err) {
        alert(JSON.stringify(err))
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
            <button type="button" className="signup-btn" onClick={goSignup}>회원가입</button>
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


  async function click() {

    const password = passwordRef.current.value;

    if (account === '' || password === '' || account == null || password == null) return;
    try {
      const response = await axios.post('http://localhost:8080/user/signin', { account, password })
      const token = response.data.result.cineToken;
      if (token) {
        localStorage.setItem('token', token)
        history.push('/')
      }

      // const token = response.data.token;
      // 어디 저장할까?
      // localstorage
      // 언제까지 살아있어야 하는지
      // localStorage.setItem('token', token);
      // 홈으로 이동 시킨다.

    } catch (error) {
      console.log(error.response.data.error);
      const errorCode = error.response.data.error
      if (errorCode === 'PASSWORD_NOT_MATCH') {
        message.error('비밀번호가 맞지 않습니다.');
      } else if (errorCode === 'USER_NOT_EXIST') {
        message.error('이메일이 맞지 않습니다.')
      } else {
        message.error(`알 수 없는 에러 ${errorCode}`)
      }
    }
  }

  function change(e) {
    setAccount(e.target.value);
  }


  function goSignup() {
    history.push('/signup')
  }
}
