import React, { useEffect } from 'react';
import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

function SocialLoginButton() {

  const { Kakao } = window;
  const { naver } = window;

  const history = useHistory();

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

  // const initializeNaverLogin = () => {
  //   const naverLogin = new naver.LoginWithNaverId({
  //     clientId: "TczK7UIIwTaztom5Lmsv",
  //     callbackUrl: "http://localhost:3000/complete",
  //     isPopup: false, // popup 형식으로 띄울것인지 설정
  //     loginButton: { color: 'white', type: 1, height: '50' }, //버튼의 스타일, 타입, 크기를 지정
  //   });
  //   naverLogin.init();
  // };

  const initializeNaverLogin = useCallback(() => {
    const naverLogin = new naver.LoginWithNaverId({
      clientId: "TczK7UIIwTaztom5Lmsv",
      callbackUrl: "http://localhost:3000/complete",
      isPopup: false, // popup 형식으로 띄울것인지 설정
      loginButton: { color: 'white', type: 1, height: '50' }, //버튼의 스타일, 타입, 크기를 지정
    });
    naverLogin.init();
  }, [naver.LoginWithNaverId])

  useEffect(() => {
    initializeNaverLogin();
  }, [initializeNaverLogin]);

  return (
    <div className="social-btn">
      <p>소셜로그인</p>
      <ul>
        <li><button type="button" className="kakao_btn" onClick={loginWithKakao}>카카오로그인</button></li>
        <li><div className="naver-btn" id='naverIdLogin' /></li>
      </ul>
    </div>
  )
}

export default SocialLoginButton;