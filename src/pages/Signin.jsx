// import React from 'react';

// export default function Signin() {
//   return (
//     <div>
//       <h1>로그인</h1>
//       <form action="#">
//         <input type="text" placeholder="이메일주소" aria-label="email" />
//         <input type="password" placeholder="비밀번호" aria-label="password" />
//         <button onClick={click}>로그인</button>
//       </form>

//     </div>
//   );

//   function click() {
//     console.log('login');
//   }
// }

import React from 'react';
import { message } from 'antd';
import axios from 'axios';
import './Signin.scss'

const { Kakao } = window;


export default class Signin extends React.Component {

  state = {
    email: ''
  }
  passwordRef = React.createRef(null); // 한번만들어지면 그대로 



  render() {
    return (
      <>
        <div className="wrapper">
          <img className="backgroundImg" src="./images/luca.jpg" alt="background" />
          <div className="background"></div>
          <h1><img src="./images/login_logo.png" alt="login_logo" /></h1>
          <div className="login_form">
            <h2>로그인</h2>
            <form action="#">
              <fieldset>
                <input type="text" value={this.state.email} onChange={this.change} placeholder="이메일주소" aria-label="email" />
                <input type="password" ref={this.passwordRef} placeholder="비밀번호" aria-label="password" />
                <button className="login_btn" onClick={this.click}>로그인</button>
                <button className="signup_btn" onClick={this.click}>회원가입</button>
                <div className="social_btn">
                  <p>소셜로그인</p>
                  <ul>
                    <li><button className="kakao_btn" onClick={this.kakaoLoginClickHandler}>카카오로그인</button></li>
                    <li><button className="google_btn" >카카오로그인</button></li>
                    <li><button className="naver_btn" >카카오로그인</button></li>
                  </ul>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </>
    );


  }

  kakaoLoginClickHandler = () => {
    const history = this.props.history;
    Kakao.Auth.login({
      success: function (authObj) {
        if (localStorage.getItem('Kakao_token')) {
          const cineToken = localStorage.getItem('Kakao_token');
          fetch(`http://192.168.175.90:8080/user/signin`, {
            method: "POST",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              "cineToken": cineToken
            })
          })
        }
        fetch(`http://192.168.175.90:8080/user/apiSignup`, {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            "account": "wlgus_57@naver.com",
            "password": "wl159357",
            "name": "도지현",
            "apiToken": authObj.access_token,
          }),
        })
          .then(res => res.json())
          .then(res => {
            localStorage.setItem("Kakao_token", res.result);
            if (res.result) {
              console.log(res.result)
              alert('로그인되었습니다.');
              console.log(authObj)
              history.push('/complete');
            }
          })
      },
      fail: function (err) {
        alert(JSON.stringify(err));
      },
    });
  };

  click = async () => {

    // 이메일과 패스워드를 뽑아서 서버에 보낸다. POST
    // WEB API
    // 무언가를 생성할 때, POST
    // 무언가를 조회할 때, GET
    // 무언가를 수정할 때, PATCH
    // 무언가(resource)를 삭제할 때, DELETE
    // ex__ book, auth, user

    // 로그인이란 -> 허락된 사용자인지를 체크
    // 서버에 내가 허가된 유저인지를 체크하고, 인증 토큰을 받아오는 행위

    // 유저 테이블
    // 유저아이디, 유저이메일, 유저패스워드, 유저생성일...
    // 유저 정보를 생성할 때 유저의 비밀번호를 단방향 암호화해서 넣어놓는다(보안) 

    // 세션 테이블
    // 세션아이디, 세션토큰, 세션생성일...

    // 인증 토큰을 브라우저 어딘가에 저장해두고,
    // 다른 정보를 얻어올 때, 나 인증된 유저야 라고 토큰을 함께 보낸다.

    // url POST {email, password}
    // {token: ''}

    const email = this.state.email;
    const password = this.passwordRef.current.value;


    if (email === '' || password === '') return;

    try {
      const response = await axios.post('https://api.marktube.tv/v1/me', { email, password })
      console.log(response);
      const token = response.data.token;
      // 어디 저장할까?
      // localstorage
      // 언제까지 살아있어야 하는지
      localStorage.setItem('token', token);
      // 홈으로 이동 시킨다.

      console.log(token)
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



  change = (e) => {
    this.setState({ email: e.target.value });
  }



}


