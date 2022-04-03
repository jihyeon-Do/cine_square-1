import React from 'react';
import { useState } from 'react';
import './signup.scss';
import SignupComplete from '../components/SignupComplete';
import SignupForm from '../components/SignupForm';
import SocialLoginButton from '../components/SocialLoginButton';
import ConfirmModalContainer from '../containers/ConfirmModalContainer';

export default function Signup() {

  const [account, setAccount] = useState('');
  const [confirmAccount, setConfirmAccount] = useState(false);
  const [confirmCode, setConfirmCode] = useState(false);
  const [confirmEmailRegExp, setConfirmEmailRegExp] = useState(false);

  return (
    <main role="main" className="signup-main">
      <h1 className="a11y-hidden">회원가입 페이지</h1>
      <section className="signup-wrapper">
        <form action="#" className="signup-form">
          <fieldset>
            <legend>Sign up</legend>
            <SignupForm account={account}
              setAccount={setAccount}
              setConfirmAccount={setConfirmAccount}
              confirmCode={confirmCode}
              confirmEmailRegExp={confirmEmailRegExp}
              setConfirmEmailRegExp={setConfirmEmailRegExp}
            />
            <SocialLoginButton />
          </fieldset>
        </form>
      </section>
      <SignupComplete />
      <ConfirmModalContainer
        account={account}
        confirmAccount={confirmAccount}
        setConfirmAccount={setConfirmAccount}
        confirmCode={confirmCode}
        setConfirmCode={setConfirmCode} />
      <div className='confirm-popup-background' style={{ display: confirmAccount ? 'block' : 'none' }}></div>
    </main>
  );
}

