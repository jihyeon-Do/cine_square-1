import React from 'react';
import axios from 'axios';
import { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import './signup.scss';
import SignupComplete from '../components/SignupComplete';
import ConfirmModal from '../components/ConfirmModal';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';


import APIService from '../service/APIService';

const AWSAPI = APIService.AWSAPI;
const LOCALAPI = APIService.LOCALAPI;

const { Kakao } = window;
const { naver } = window;


export default function Signup() {

  const [account, setAccount] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmAccount, setConfirmAccount] = useState(false);
  const [confirmCode, setConfirmCode] = useState(false);
  const [confirmRegExp, setConfirmRegExp] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);
  const [checked, setChecked] = useState(false);
  const [samePassword, setSamePassword] = useState(false);
  const samePasswordRef = useRef('');
  const passwordRef = useRef("");

  const history = useHistory();
  const dispatch = useDispatch();

  function loginWithKakao() {
    Kakao.Auth.login({
      success: function (authObj) {
        const kakaoToken = Kakao.Auth.getAccessToken();
        console.log(kakaoToken);
        localStorage.removeItem('kakao_7b617f923188c842b0efaaecb0e0c1ad');
        Kakao.API.request({
          url: '/v2/user/me',
          success: res => {
            console.log(res);
            history.push('/complete')
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
      loginButton: { color: 'white', type: 1, height: '50' }, //버튼의 스타일, 타입, 크기를 지정
    });
    naverLogin.init();
  };

  useEffect(() => {
    initializeNaverLogin();

  }, []);


  function isChecked() {
    setChecked(!checked);
  }

  async function signUp() {
    if (account === null ||
      userName === null ||
      password === null ||
      account === '' ||
      userName === '' ||
      password === '' ||
      confirmCode === false ||
      confirmRegExp === true ||
      confirmPassword === true ||
      samePassword === true ||
      checked === false) return;
    try {
      const response = await axios({
        method: 'POST',
        url: `${AWSAPI}/user/signup`,
        // url: `${LOCALAPI}/user/signup`,
        data: {
          account: account,
          password: password,
          userName: userName,
        }
      })
      if (response.data.result) {
        alert('회원가입이 완료되었습니다');
        dispatch(push('/'));
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <main role="main" className="signup-main">
      <h1 className="a11y-hidden">회원가입 페이지</h1>

      <section className="signup-wrapper">
        <form action="#" className="signup-form">
          <fieldset>
            <legend>Sign up</legend>
            <div className="account-form">
              <div>
                <input value={account} onChange={handleAccountChange} type="text" aria-label="이메일" placeholder="이메일주소" />
                <button type="button" onClick={isEmail}>중복확인</button>
              </div>
              <p className={confirmRegExp ? 'comfirm-active' : ''}>* 이메일 형식에 맞지 않습니다</p>
            </div>

            <div className="name-form">
              <input type="text" aria-label="이름" placeholder="이름" value={userName} onChange={handleNameChange} />
              {/* <p className={confirmName ? 'comfirm-active' : ''}>이름을 입력하세요</p> */}
            </div>
            <div className="password-form">
              {/* <input ref={passwordRef} type="password" aria-label="비밀번호" placeholder="비밀번호" onChange={isPassword} /> */}
              <input ref={passwordRef} type="password" aria-label="비밀번호" placeholder="비밀번호" value={password} onChange={handlePasswordChange} />
              <p className={confirmPassword ? 'comfirm-active' : ''}>* 8 ~ 15자 사이로 영문, 숫자, 특수문자 모두 사용해주세요</p>
            </div>
            <div className="password-comfirm-form">
              <input ref={samePasswordRef} type="password" aria-label="비밀번호확인" placeholder="비밀번호 확인" onChange={issamePassword} />
              <p className={samePassword ? 'comfirm-active' : ''}>* 비밀번호가 일치하지 않습니다</p>
            </div>
            <div className="terms">
              <label>
                {/* <input type="checkbox" name="terms-of-service" onClick={onClick} checked={checked} /> */}
                <input type="checkbox" name="terms-of-service" value="terms-of-service" onChange={isChecked} checked={checked ? 'checked' : ''} />
                이용약관 및 개인정보 수집 및 이용에 동의합니다.
              </label>
            </div>
            <div className="signup-btns">
              <button type="button" className="cancle" onClick={singupCancel}>취소</button>
              <button type="button" className="signup-ok" onClick={signUp}>가입하기</button>
              {/* <button type="button" className="signup-ok" onClick={signupClick}>가입하기</button> */}
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
      </section>
      <SignupComplete />
      <ConfirmModal
        account={account}
        confirmAccount={confirmAccount}
        setConfirmAccount={setConfirmAccount}
        confirmCode={confirmCode}
        setConfirmCode={setConfirmCode} />
      <div className='confirm-popup-background' style={{ display: confirmAccount ? 'block' : 'none' }}></div>
    </main>

  );

  function handleAccountChange(e) {
    var regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    if (regExp.test(account)) {
      setConfirmRegExp(false);
    } else {
      setConfirmRegExp(true);
    }

    setAccount(e.target.value);

  }


  function handleNameChange(e) {
    setUserName(e.target.value);
  }

  function handlePasswordChange() {
    const password = passwordRef.current.value;
    var regExp = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
    if (regExp.test(password)) {
      setConfirmPassword(false);
    } else {
      setConfirmPassword(true);
    }
    setPassword(password);

  }


  function issamePassword() {
    const password = passwordRef.current.value;
    const samePasswordValue = samePasswordRef.current.value;
    if (password === samePasswordValue) {
      setSamePassword(false);
    } else {
      setSamePassword(true);
    }
  }


  function singupCancel() {
    dispatch(push('/'));
  }


  async function isEmail() {
    try {
      // const response = await axios.post(`${LOCALAPI}/user/signup/valid`, { account });
      if (!account) {
        alert('이메일을 입력하세요');
        return;
      };
      const response = await axios.post(`${AWSAPI}/user/signup/valid`, { account })
      if (response.data.result) {
        alert('사용가능한 이메일 입니다.')
        setAccount(account)
        setConfirmAccount(true);
      } else {
        alert('이미 등록된 이메일 입니다.')
        setConfirmAccount(false);
      }
    } catch (error) {
      console.log(error)
    }
  }
}

