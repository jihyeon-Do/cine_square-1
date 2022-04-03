import React, { useState } from 'react';
import ConfirmModal from '../components/ConfirmModal';
import SignupService from '../service/SignupService';


function ConfirmModalContainer({
  account,
  confirmAccount,
  setConfirmAccount,
  confirmCode,
  setConfirmCode
}) {
  const [code, setCode] = useState('');

  async function duplicate() {
    try {
      const response = await SignupService.certificationNumber(account);
      if (!response.result) return;
      alert('해당 메일로 인증번호가 요청되었습니다.');
      setCode(response.code);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <ConfirmModal
      code={code}
      setCode={setCode}
      duplicate={duplicate}
      confirmAccount={confirmAccount}
      account={account}
      setConfirmAccount={setConfirmAccount}
      setConfirmCode={setConfirmCode}
    />
  )
}

export default ConfirmModalContainer;