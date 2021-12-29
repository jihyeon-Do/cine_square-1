import React, { useState, useRef, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import SearchButton from '../SearchButton';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router';
import { startGetSearchValueActionCreator } from '../../redux/modules/search';
import { startGetSearchListActionCreator } from '../../redux/modules/search'

import './headerTemplate.scss'
import TokenService from '../../service/TokenService';


export default function HeaderTemplate() {
  const [value, setValue] = useState('');
  const searchInput = useRef();
  const searchClickButton = useRef();
  const dispatch = useDispatch();
  const keyword = useSelector(state => state.search.value)
  const urlParameter = useSelector(state => state.router.location.pathname)
  const token = TokenService.get('token');

  const getValue = useCallback(() => {
    dispatch(startGetSearchValueActionCreator(value));
    dispatch(startGetSearchListActionCreator(value))
  }, [dispatch, value]);

  useEffect(() => {
    if (urlParameter === `/search/${keyword}`) {
      setValue(keyword)
    }
  }, [urlParameter, keyword])

  return (
    <header className="header-container">
      <div className="header-wrapper">
        <h1 className="header" onClick={() => { dispatch(push('/')) }}>
          <img src="../images/logo_2.png" alt="main_logo" />
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
      dispatch(push(`/search/${value}`))
    }
  }

}