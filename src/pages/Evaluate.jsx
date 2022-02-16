import React from 'react';
import HeaderTemplate from '../components/HeaderTemplate';
import FooterTemplate from '../components/FooterTemplate';
import './evaluate.scss';
import Rating from '../components/Rating';

function Evaluate() {

  return (
    <>
      <HeaderTemplate />
      <main className="evaluate-main">
        <h2 className="a11y-hidden">영화 평가하기</h2>

        <section>
          <div className="evaluate-list">
            <div className="evaluate-header">
              <div className="evaluate-count">
                <p>총 <span>12</span>편 평가하셨습니다.</p>
              </div>
              {/* <div className="evaluate-item" aria-hidden="true">
                <p>영화</p>
              </div> */}
            </div>
            <div className="evaluate-movie-list">
              <h3 className="a11y-hidden">영화 목록</h3>
              <ul>
                <li>
                  <div className="movie-info-poster">
                    <img src="../images/cruella.jpg" alt="크루엘라" />
                  </div>
                  <div className="movie-info-detail">
                    <h4>독전: 익스텐디드 컷</h4>
                    <p>2018<span>한국</span></p>
                    <Rating />
                  </div>
                </li>
                <li>
                  <div className="movie-info-poster">
                    <img src="../images/cruella.jpg" alt="크루엘라" />
                  </div>
                  <div className="movie-info-detail">
                    <h4>독전: 익스텐디드 컷</h4>
                    <p>2018<span>한국</span></p>
                    <Rating />
                  </div>
                </li>
                <li>
                  <div className="movie-info-poster">
                    <img src="../images/cruella.jpg" alt="크루엘라" />
                  </div>
                  <div className="movie-info-detail">
                    <h4>독전: 익스텐디드 컷</h4>
                    <p>2018<span>한국</span></p>
                    <Rating />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <FooterTemplate />
    </>
  )
}



export default Evaluate;