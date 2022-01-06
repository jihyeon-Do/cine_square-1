import React from 'react';
import './signupComplete.scss';

function SignupComplete() {
  return (
    <div className="signup-complete">
      <img src="../images/complete.png" alt="complete" />
      <p>회원가입이 완료되었습니다.</p>
      <button>완료</button>
    </div>
  );
}

export default SignupComplete;