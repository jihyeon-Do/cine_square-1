import React from 'react';
import './search.scss';
import { useDispatch, useSelector } from 'react-redux';
import HeaderTemplate from '../components/atom/HeaderTemplate';
import FooterTemplate from '../components/atom/FooterTemplate';

export default function Search() {
  // const dispatch = useDispatch();
  const value = useSelector(state => state.search.value);
  return (
    <>
      <HeaderTemplate />
      <main>
        <section>
          <div className="search-results">
            <p><span>{`'${value}'`}</span>(으)로 검색한 결과입니다.</p>
          </div>
          <div className="search-results-list">
            <h2>검색결과</h2>
            <ul>
              <li><img src="../images/cruella.jpg" alt="cruella" /><p>크루엘라</p></li>
            </ul>
          </div>
        </section>
      </main>
      <FooterTemplate />
    </>
  );
}