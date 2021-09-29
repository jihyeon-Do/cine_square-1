import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Link, NavLink } from 'react-router-dom';
import SearchButton from '../SearchButton';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router';
import { startGetSearchValueActionCreator } from '../../redux/modules/search';

import './headerTemplate.scss'

const token = '1234'

export default function HeaderTemplate() {
  const [value, setValue] = useState('');
  const [_display, _setDisplay] = useState(false);
  const searchInput = useRef();
  const dispatch = useDispatch();

  const getValue = React.useCallback(() => {
    dispatch(startGetSearchValueActionCreator(value));
  }, [dispatch, value]);

  const regexp = new RegExp(value, 'i');

  // const correctValue = result.filter((v) => {
  //   return regexp.test(v.movieNm)
  // })

  // useEffect(() => {
  //   if (value !== '') {
  //     _setDisplay(true)
  //   } else {
  //     _setDisplay(false)
  //   }
  // }, [value])

  // useEffect(() => {
  //   if (value !== '' && correctValue.length !== 0) {
  //     _setDisplay(true)
  //   } else {
  //     _setDisplay(false)
  //   }
  // }, [value, correctValue])


  return (
    <header className="header-container">
      <div className="header-wrapper">
        <h1 className="header" onClick={() => { dispatch(push('/')) }}>
          <img src="./images/logo_2.png" alt="main_logo" />
        </h1>
        <div className="right-content">
          <div className="input-box" role="search">
            <input ref={searchInput} onKeyUp={handleKeyPress} type="text" value={value} onChange={search} placeholder="검색" aria-label="영화검색창" />
            <Link to="/search" style={{ display: 'inline-block', marginLeft: '10px', verticalAlign: 'middle' }}>
              <SearchButton />
            </Link>
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

  async function handleKeyPress(e) {
    if (value === '') return;
    if (e.key === 'Enter') {
      console.log('enter');
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