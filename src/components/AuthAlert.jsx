import React from 'react';

function AuthAlert({ notice }) {
  return (
    <div>
      <img src="../images/complete.png" alt="complete" />
      <p>{notice}</p>
      <button>확인</button>
    </div>
  )
}

export default AuthAlert;