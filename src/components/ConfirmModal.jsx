import React, { useState, useEffect } from 'react';
import AuthAlert from './AuthAlert';

function ConfirmModal() {
  const [result, setResult] = useState(true);

  // useEffect(() => {

  // }, [result])

  return (
    <div className="confirm-popup">
      <form>
        <fieldset>
          <legend>인증하기</legend>
          <div>
            <input type="text" aria-label="이메일" placeholder="이메일주소" />
            <button type="button" onClick={() => duplicate(result)}>중복확인</button>
          </div>
          <div>
            <input type="text" aria-label="인증번호입력" placeholder="인증번호입력" />
            <button type="button">인증번호요청</button>
          </div>
          <button type="button">인증번호확인</button>
        </fieldset>
      </form>
      {/* <AuthAlert notice={noi}/> */}
    </div>
  );

  function duplicate(result) {
    console.log('1')
    var notice = '';
    if (result) {
      console.log('2')
      notice = '사용할 수 있는 이메일입니다.'
    } else {
      console.log('3')
      notice = '이미 사용중인 이메일입니다.'
    }
    return <AuthAlert notice={notice} />
  }
}

export default ConfirmModal;