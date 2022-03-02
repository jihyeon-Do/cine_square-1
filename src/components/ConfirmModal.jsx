import React, { useState } from 'react';
import AuthAlert from './AuthAlert';
import './confirmModal.scss';

function ConfirmModal({
  code,
  setCode,
  duplicate,
  confirmAccount,
  account,
  setConfirmAccount,
  setConfirmCode,
}) {
  const [value, setValue] = useState('');

  return (
    <div className="confirm-popup" style={{ display: confirmAccount ? 'block' : 'none' }}>
      <form>
        <fieldset>
          <legend>인증하기</legend>
          <div>
            <input type="text" aria-label="이메일" placeholder="이메일주소" value={account} readOnly />
            <button type="button" onClick={() => duplicate()}>인증번호요청</button>
          </div>
          <div>
            <input onChange={duplicateNumber} type="text" aria-label="인증번호입력" placeholder="인증번호입력" value={value} />
            <button type="button" onClick={duplicateConfirm}>인증번호확인</button>
          </div>
          <button type="button" className='cancel' onClick={duplicateCancel}>취소</button>
        </fieldset>
      </form>
    </div>
  );

  function duplicateNumber(e) {
    setValue(e.target.value.trim());
  }

  function duplicateCancel() {
    setConfirmAccount(false);
  }

  function duplicateConfirm() {
    if (value === null || value !== code) {
      alert('인증번호가 일치하지 않습니다');
      setConfirmCode(false);
    } else if (value === code) {
      alert('인증번호가 일치합니다');
      setConfirmAccount(false);
      setCode('');
      setConfirmCode(true);
    }
  }
}

export default ConfirmModal;
