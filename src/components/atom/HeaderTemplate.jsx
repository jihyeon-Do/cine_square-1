import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import SearchButton from '../SearchButton';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router';
import { startGetSearchValueActionCreator } from '../../redux/modules/search';

import './headerTemplate.scss'

const result = [
  {
    movieCd: "187322",
    movieNm: "극한",
    janres: "1,16,11",
    directors: null,
    actors: null,
    nations: "US",
    openDt: "2021.05.26",
    showTm: 133
  },
  {
    movieCd: "187322",
    movieNm: "극한직업",
    janres: "1,16,11",
    directors: null,
    actors: null,
    nations: "US",
    openDt: "2021.05.26",
    showTm: 133
  },
  {
    movieCd: "187322",
    movieNm: "극한의",
    janres: "1,16,11",
    directors: null,
    actors: null,
    nations: "US",
    openDt: "2021.05.26",
    showTm: 133
  },
  {
    movieCd: "187322",
    movieNm: "크루엘라",
    janres: "1,16,11",
    directors: null,
    actors: null,
    nations: "US",
    openDt: "2021.05.26",
    showTm: 133
  }
]

export default function HeaderTemplate() {
  const [value, setValue] = useState('');
  const [_display, _setDisplay] = useState(false);
  const searchInput = useRef();
  const dispatch = useDispatch();

  const getValue = React.useCallback(() => {
    dispatch(startGetSearchValueActionCreator(value));
  }, [dispatch, value]);

  const regexp = new RegExp(value, 'i');

  const correctValue = result.filter((v) => {
    return regexp.test(v.movieNm)
  })



  useEffect(() => {
    if (value !== '' && correctValue.length !== 0) {
      _setDisplay(true)
    } else {
      _setDisplay(false)
    }
  }, [value, correctValue])


  return (
    <header className="header-container">
      <div className="header-wrapper">
        <h1 className="header">
          <img src="./images/login_logo.png" alt="main_logo" />
        </h1>
        <div className="right-content">
          <div className="input-box" role="search">
            <input ref={searchInput} onKeyUp={handleKeyPress} type="text" value={value} onChange={search} placeholder="검색" aria-label="영화검색창" />
            <Link to="/search" style={{ display: 'inline-block', marginLeft: '10px' }}>
              <SearchButton />
            </Link>
            <div className="search-list" style={{ display: _display ? 'block' : 'none' }}>
              <ul>
                {
                  result.map((v) => (
                    regexp.test(v.movieNm) &&
                    <li>
                      <Link>{v.movieNm}</Link>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
          <div className="my-profile-btn">
            <Link>평가하기</Link>
            <Link>내정보</Link>
          </div>
        </div>
      </div>
    </header>

  )

  function search(e) {
    setValue(e.target.value);
  }

  function handleKeyPress(e) {
    if (value === '') return;
    if (e.key === 'Enter') {
      console.log('enter');
      getValue();
      dispatch(push('/search'))
    }
  }

}