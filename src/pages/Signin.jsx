import React from 'react';

export default function Signin() {
  return (
    <div>
      <h1>로그인</h1>
      <form action="#">
        <input type="text" placeholder="이메일주소" aria-label="email" />
        <input type="password" placeholder="비밀번호" aria-label="password" />
        <button onClick={click}>로그인</button>
      </form>

    </div>
  );

  function click() {
    console.log('login');
  }
}