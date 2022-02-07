import React, { useState, useEffect } from 'react';
import AuthAlert from './AuthAlert';
import axios from 'axios';
import APIService from '../service/APIService';
import './confirmModal.scss';

const AWSAPI = APIService.AWSAPI;
const LOCALAPI = APIService.LOCALAPI;

function ConfirmModal({ account, confirmAccount, setConfirmAccount, setConfirmCode }) {
  const [code, setCode] = useState('');
  const [value, setValue] = useState('')

  return (
    <div className="confirm-popup" style={{ display: confirmAccount ? 'block' : 'none' }}>
      <form>
        <fieldset>
          <legend>인증하기</legend>
          <div>
            <input type="text" aria-label="이메일" placeholder="이메일주소" value={account} />
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
    setValue(e.target.value)
  }

  function duplicateCancel() {
    setConfirmAccount(false);
  }

  async function duplicate(num) {
    try {
      const response = await axios({
        method: 'POST',
        url: `${AWSAPI}/user/signup/sendAuthMail`,
        // url: `${LOCALAPI}/user/signup/sendAuthMail`,
        data: {
          account: account,
        }
      })
      if (!response.data.result) return;
      alert('해당 메일로 인증번호가 요청되었습니다.');
      setCode(response.data.code);
    } catch (error) {
      console.log(error);
    }

  }

  function duplicateConfirm() {
    if (!value && value !== code) {
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
