import React, { useState, useEffect } from 'react';
import AuthAlert from './AuthAlert';
import axios from 'axios';
import APIService from '../service/APIService';

const AWSAPI = APIService.AWSAPI;
const LOCALAPI = APIService.LOCALAPI;

function ConfirmModal({ account, confirmAccount, setConfirmAccount, confirmCode, setConfirmCode }) {
  // const [result, setResult] = useState(true);
  const [result, setResult] = useState(0);
  // const [notice, setNotice] = useState('이미 사용중인 이메일입니다');
  const [code, setCode] = useState('');
  const [value, setValue] = useState('')
  // useEffect(() => {

  // }, [result])

  return (
    <div className="confirm-popup" style={{ display: confirmAccount ? 'block' : 'none' }}>
      <form>
        <fieldset>
          <legend>인증하기</legend>
          <div>
            <input type="text" aria-label="이메일" placeholder="이메일주소" value={account} />
            {/* <button type="button" onClick={() => duplicate(result)}>중복확인</button> */}
            {/* <button type="button" onClick={() => duplicate(1)}>중복확인</button> */}
            <button type="button" onClick={() => duplicate()}>인증번호요청</button>
          </div>
          <div>
            <input onChange={duplicateNumber} type="text" aria-label="인증번호입력" placeholder="인증번호입력" value={value} />
          </div>
          <button type="button" onClick={duplicateConfirm}>인증번호확인</button>
        </fieldset>
      </form>
      {/* {result === 1 && <AuthAlert notice={notice} setResult={setResult} />} */}
      {/* {result === 2 && <AuthAlert notice={notice} setResult={setResult} />} */}
      {/* <AuthAlert notice={noi}/> */}
    </div>
  );

  // function duplicate(result) {
  //   console.log('1')
  //   var notice = '';
  //   if (result) {
  //     console.log('2')
  //     notice = '사용할 수 있는 이메일입니다.'
  //   } else {
  //     console.log('3')
  //     notice = '이미 사용중인 이메일입니다.'
  //   }
  //   return <AuthAlert notice={notice} />
  // }
  function duplicateNumber(e) {
    setValue(e.target.value)
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
    // setResult(num)
    // if (result === 1) {
    //   // setResult
    //   // notice = '사용할 수 있는 이메일입니다.' setNotice
    // } else if (result === 2) {
    //   // setResult
    //   // notice = '이미 사용중인 이메일입니다.'setNotice
    // }
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

// 컨펌되면 코드 없애게 했는데 컨펌을 없애면 됐는지 안됐는지 모른다.
// 그러고 회원가입을 그냥 누를수 없게 만들어야 한다. setComfirmCode.