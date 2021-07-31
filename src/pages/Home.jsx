import React from 'react';
import './home.scss'

export default function Home({ history }) {
  function goLogin() {
    history.push('/signin')
  }
  return (
    <main className="home-main">
      <section>
        <div className="slide">
          <a href="#none">
            <img src="../images/main_slide.jpg" alt="main_slide" />
          </a>
        </div>
        <article className="rank box-office-rank">
          <h2>박스오피스 순위</h2>
          <ul>
            <li>
              <p className="ranking">1</p>
              <img src="../images/cruella.jpg" alt="cruella" />
              <div className="movie-info">
                <p className="movie-title">크루엘라</p>
                <span>2021미국</span>
                <p>평균 3.7</p>
                <span>예매율 30% 누적관객 1,681명</span>
              </div>
            </li>
            <li>
              <p className="ranking">2</p>
              <img src="../images/voyagers.jpg" alt="voyagers" />
              <div className="movie-info">
                <p className="movie-title">크루엘라</p>
                <span>2021미국</span>
                <p>평균 3.7</p>
                <span>예매율 30% 누적관객 1,681명</span>
              </div>
            </li>
            <li>
              <p className="ranking">3</p>
              <img src="../images/Fast_and_the_Furious.jpg" alt="Fast_and_the_Furious" />
              <div className="movie-info">
                <p className="movie-title">크루엘라</p>
                <span>2021미국</span>
                <p>평균 3.7</p>
                <span>예매율 30% 누적관객 1,681명</span>
              </div>
            </li>
            <li>
              <p className="ranking">4</p>
              <img src="../images/pipe_line.jpg" alt="pipe_line" />
              <div className="movie-info">
                <p className="movie-title">크루엘라</p>
                <span>2021미국</span>
                <p>평균 3.7</p>
                <span>예매율 30% 누적관객 1,681명</span>
              </div></li>
            <li>
              <p className="ranking">5</p>
              <img src="../images/poupelle.jpg" alt="poupelle" />
              <div className="movie-info">
                <p className="movie-title">크루엘라</p>
                <span>2021미국</span>
                <p>평균 3.7</p>
                <span>예매율 30% 누적관객 1,681명</span>
              </div>
            </li>
          </ul>
        </article>

        <article className="rank cine-square-rank">
          <h2>씨네스퀘어 영화 순위</h2>
          <ul>
            <li>
              <p className="ranking">1</p>
              <img src="../images/cruella.jpg" alt="cruella" />
              <div className="movie-info">
                <p className="movie-title">크루엘라</p>
                <span>2021미국</span>
                <p>평균 3.7</p>
                <span>예매율 30% 누적관객 1,681명</span>
              </div>
            </li>
            <li>
              <p className="ranking">2</p>
              <img src="../images/voyagers.jpg" alt="voyagers" />
              <div className="movie-info">
                <p className="movie-title">크루엘라</p>
                <span>2021미국</span>
                <p>평균 3.7</p>
                <span>예매율 30% 누적관객 1,681명</span>
              </div>
            </li>
            <li>
              <p className="ranking">3</p>
              <img src="../images/Fast_and_the_Furious.jpg" alt="Fast_and_the_Furious" />
              <div className="movie-info">
                <p className="movie-title">크루엘라</p>
                <span>2021미국</span>
                <p>평균 3.7</p>
                <span>예매율 30% 누적관객 1,681명</span>
              </div>
            </li>
            <li>
              <p className="ranking">4</p>
              <img src="../images/pipe_line.jpg" alt="pipe_line" />
              <div className="movie-info">
                <p className="movie-title">크루엘라</p>
                <span>2021미국</span>
                <p>평균 3.7</p>
                <span>예매율 30% 누적관객 1,681명</span>
              </div></li>
            <li>
              <p className="ranking">5</p>
              <img src="../images/poupelle.jpg" alt="poupelle" />
              <div className="movie-info">
                <p className="movie-title">크루엘라</p>
                <span>2021미국</span>
                <p>평균 3.7</p>
                <span>예매율 30% 누적관객 1,681명</span>
              </div>
            </li>
          </ul>
        </article>

        <article className="rank highly-rated-rank">
          <h2>평균 별점 높은 순위</h2>
          <ul>
            <li>
              <p className="ranking">1</p>
              <img src="../images/cruella.jpg" alt="cruella" />
              <div className="movie-info">
                <p className="movie-title">크루엘라</p>
                <span>2021미국</span>
                <p>평균 3.7</p>
                <span>예매율 30% 누적관객 1,681명</span>
              </div>
            </li>
            <li>
              <p className="ranking">2</p>
              <img src="../images/voyagers.jpg" alt="voyagers" />
              <div className="movie-info">
                <p className="movie-title">크루엘라</p>
                <span>2021미국</span>
                <p>평균 3.7</p>
                <span>예매율 30% 누적관객 1,681명</span>
              </div>
            </li>
            <li>
              <p className="ranking">3</p>
              <img src="../images/Fast_and_the_Furious.jpg" alt="Fast_and_the_Furious" />
              <div className="movie-info">
                <p className="movie-title">크루엘라</p>
                <span>2021미국</span>
                <p>평균 3.7</p>
                <span>예매율 30% 누적관객 1,681명</span>
              </div>
            </li>
            <li>
              <p className="ranking">4</p>
              <img src="../images/pipe_line.jpg" alt="pipe_line" />
              <div className="movie-info">
                <p className="movie-title">크루엘라</p>
                <span>2021미국</span>
                <p>평균 3.7</p>
                <span>예매율 30% 누적관객 1,681명</span>
              </div></li>
            <li>
              <p className="ranking">5</p>
              <img src="../images/poupelle.jpg" alt="poupelle" />
              <div className="movie-info">
                <p className="movie-title">크루엘라</p>
                <span>2021미국</span>
                <p>평균 3.7</p>
                <span>예매율 30% 누적관객 1,681명</span>
              </div>
            </li>
          </ul>
        </article>
        <article className="my-collection">
          <h2>마이컬렉션</h2>
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </article>
      </section>
      <button onClick={goLogin}>로그인</button>
    </main>
  );
}