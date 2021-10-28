import React, { useRef, useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import './home.scss'

import HeaderTemplate from '../components/atom/HeaderTemplate';
import FooterTemplate from '../components/atom/FooterTemplate';
import VideoFrame from '../components/VideoFrame';
import Owlslide from '../components/Owlslide';
import VideoFrameContainer from '../containers/VideoFrameContainer';
import { startGetBoxOfficeListActionCreator } from '../redux/modules/boxoffice';
import BoxOffice from '../components/BoxOffice';


function Home({ history }) {

  const dispatch = useDispatch();
  const boxOfficeList = useSelector((state) => state.boxoffice.boxOfficeList);
  const [modalId, setModalId] = useState(0);

  const show = useCallback((id) => {
    setModalId(id);
  }, []);
  const hide = useCallback(() => {
    setModalId(0);
  }, []);

  //  if (!localStorage.getItem('token')) {
  //   history.push('/signin')
  // }

  function goLogin() {
    history.push('/signin')
  }

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const response = await axios.get('http://cinesquare.yahmedora.com:8080/movie/boxoffice')
  //       setBoxoffice(response.data.result)
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }
  //   fetchData();
  // }, [setBoxoffice])

  const getBoxOfficeList = React.useCallback(() => {
    dispatch(startGetBoxOfficeListActionCreator());
  }, [dispatch]);

  useEffect(() => {
    getBoxOfficeList();
  }, [getBoxOfficeList]);


  return (
    <>
      <HeaderTemplate />
      <main className="home-main">
        <h2 className="a11y-hidden">메인페이지</h2>
        <Owlslide show={show} />
        {modalId > 0 && <VideoFrameContainer hide={hide} id={modalId} />}
        <section>
          <article className="rank cine-square-rank">
            <h3>랜덤 추천 영화 순위</h3>
            <div className="slide-container">
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
            </div>
          </article>

          <article className="rank box-office-rank">
            <h3>박스오피스 순위</h3>
            <BoxOffice boxOfficeList={boxOfficeList} />
          </article>

          <article className="rank highly-rated-rank">
            <h3>평균 별점 높은 순위</h3>
            <div className="slide-container">
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
            </div>
          </article>
          <article className="my-collection-wrapper">
            <div className="my-collection">
              <h3>마이컬렉션</h3>
              {/* <ul>
                <li></li>
                <li></li>
                <li></li>
              </ul> */}
              <div></div>
            </div>
          </article>
        </section>
      </main>
      <FooterTemplate />

    </>
  );
}

export default React.memo(Home)