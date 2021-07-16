import React from 'react';

export default function Home({ history }) {
  function goLogin() {
    history.push('/signin')
  }
  return (
    <div>
      <h1>홈</h1>
      <button onClick={goLogin}>로그인</button>
    </div>
  );
}