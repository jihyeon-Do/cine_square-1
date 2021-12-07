import React, { useState, useRef, useCallback } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import SearchButton from '../SearchButton';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import { startGetSearchValueActionCreator } from '../../redux/modules/search';

import './headerTemplate.scss'

// const token = '';
const token = localStorage.getItem('token');


export default function HeaderTemplate() {
  const [value, setValue] = useState('');
  const searchInput = useRef();
  const searchClickButton = useRef();
  const dispatch = useDispatch();

  const getValue = useCallback(() => {
    dispatch(startGetSearchValueActionCreator(value));
  }, [dispatch, value]);

  return (
    <header className="header-container">
      <div className="header-wrapper">
        <h1 className="header" onClick={() => { dispatch(push('/')) }}>
          <img src="./images/logo_2.png" alt="main_logo" />
        </h1>
        <div className="right-content">
          <div className="input-box" role="search">
            <input ref={searchInput} onKeyUp={(e) => handleSearch(e)} type="text" value={value} onChange={search} placeholder="검색" aria-label="영화검색창" />
            <button ref={searchClickButton} className="search-button" onClick={(e) => handleSearch(e)}>검색버튼</button>
            {/* <div className="search-list" style={{ display: _display ? 'block' : 'none' }}>
              <ul>
                {
                  result.map((v) => (
                    regexp.test(v.movieNm) &&
                    <li>
                      <Link>{v.movieNm}</Link>
                    </li>
                  ))}
              </ul>
            </div> */}
          </div>
          <div className="my-profile-btn">
            {token && (
              <div>
                <Link to="/evaluate">평가하기</Link>
                <Link to="/profile">내정보</Link>
              </div>

            )}
            {!token && (
              <div>
                <Link to="/signin">로그인</Link>
                <Link to="/signup">회원가입</Link>
              </div>
            )
            }
          </div>
        </div>
      </div>
    </header>

  )

  function search(e) {
    setValue(e.target.value);
  }

  async function handleSearch(e) {
    if (value === '') return;
    if (e.key === 'Enter' || e.target === searchClickButton.current) {
      // try {
      //   const response = await axios.get(`http://localhost:8080/movie/search?searchWord=${value}`)
      //   const result = response.data.result
      //   console.log(result)
      // } catch (error) {
      //   console.log(error)
      // }
      getValue();
      dispatch(push('/search'))
    }
  }

}