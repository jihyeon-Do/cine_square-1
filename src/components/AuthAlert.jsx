import React from 'react';

function AuthAlert({ notice, setResult }) {
  return (
    <div>
      <img src="../images/complete.png" alt="complete" />
      <p>{notice}</p>
      <button onClick={() => setResult(0)}>확인</button>
    </div>
  )
}

export default AuthAlert;