import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './signup.scss';

const { Kakao } = window;
const { naver } = window;


export default function Signup() {

  const [email, setEmail] = useState('')
  const [confirmEmail, setConfirmEamil] = useState(false);
  const history = useHistory();

  function loginWithKakao() {
    Kakao.Auth.login({
      success: function (authObj) {
        const kakaoToken = Kakao.Auth.getAccessToken();
        console.log(kakaoToken)
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
      loginButton: { color: 'white', type: 1, height: '50' }, //버튼의 스타일, 타입, 크기를 지정
    });
    naverLogin.init();
  };

  useEffect(() => {
    initializeNaverLogin();

  }, []);

  return (
    <main role="main" className="signup-main">
      <section className="signup-wrapper">
        <form action="#" className="signup-form">
          <fieldset>
            <legend>Sign up</legend>
            <div className="email-form">
              <div>
                <input value={email} onChange={change} type="text" aria-label="이메일" placeholder="이메일주소" />
                <button type="submit" onClick={isEmail}>중복확인</button>
              </div>
              <p className={confirmEmail ? 'comfirm-active' : ''}>* 이메일 형식에 맞지 않습니다</p>
            </div>
            <div className="certification-number-form">
              <div>
                <input type="text" aria-label="인증번호" placeholder="인증번호입력" />
                <button type="submit">인증하기</button>
              </div>
              <p>* 인증번호가 맞지 않습니다.</p>
            </div>
            <div className="name-form">
              <input type="text" aria-label="이름" placeholder="이름" />
            </div>
            <div className="phone-number-form">
              <label>핸드폰 번호</label>
              <div>
                <input type="text" aria-label="핸드폰 번호 앞 세자리" />
                <input type="text" aria-label="핸드폰 번호 앞 네자리" />
                <input type="text" aria-label="핸드폰 번호 뒤 네자리" />
              </div>

            </div>
            <div className="password-form">
              <input type="password" aria-label="비밀번호" placeholder="비밀번호" />
              <p>* 8 ~ 16자 사이로 영문, 숫자, 특수문자 모두 사용해주세요</p>
            </div>
            <div className="password-comfirm-form">
              <input type="password" aria-label="비밀번호확인" placeholder="비밀번호 확인" />
              <p>* 비밀번호가 일치하지 않습니다</p>
            </div>
            <div className="terms">

              <label>
                <input type="checkbox" name="terms-of-service" value="terms-of-service" />
                이용약관 및 개인정보 수집 및 이용에 동의합니다.
              </label>
            </div>
            <div className="signup-btns">
              <button type="button" className="cancle">취소</button>
              <button type="submit" className="signup-ok">가입하기</button>
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
    </main>
  )

  function change(e) {
    setEmail(e.target.value)
  }

  function isEmail() {
    var regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    if (regExp.test(email)) {
      setConfirmEamil(false)
    } else {
      setConfirmEamil(true)
    }
  }
}

// var regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
// if (regExp.test(value)) {
//   setEmail(value)
//   return true
// } else {
//   return false
// }