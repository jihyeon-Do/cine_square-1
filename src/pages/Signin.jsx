import React from 'react';

export default function Signin() {
  return (
    <div>
      <h1>로그인</h1>
      <form action="#">
        <input type="text" />
        <input type="password" />
        <button onClick={click}>로그인</button>
      </form>

    </div>
  );

  function click() {
    console.log('login');
  }
}