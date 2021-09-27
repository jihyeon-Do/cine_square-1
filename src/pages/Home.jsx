import React, { useRef, useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import './home.scss'

import HeaderTemplate from '../components/atom/HeaderTemplate';
import FooterTemplate from '../components/atom/FooterTemplate';
import VideoFrame from '../components/VideoFrame';
import Owlslide from '../components/Owlslide';
import VideoFrameContainer from '../containers/VideoFrameContainer';


function Home({ history }) {


  const [frameVideo, setFrameVideo] = useState(false)

  const [modalId, setModalId] = useState(0);

  const show = useCallback((id) => {
    setModalId(id);
  }, []);
  const hide = useCallback(() => {
    setModalId(0);
  }, []);

  // const youtubeFullscreen = useCallback((url) => {
  //   setFrameVideo(true);
  //   window.open(url, "theFrame", "");
  //   return url;
  // }, [])

  // const close = useCallback(() => {
  //   setFrameVideo(false)
  // })

  let slideIndex = 0

  const [boxoffice, setBoxoffice] = useState([])

  //  if (!localStorage.getItem('token')) {
  //   history.push('/signin')
  // }

  const slideWrap = useRef();
  const prevRef = useRef();
  const nextRef = useRef();

  function goLogin() {
    history.push('/signin')
  }


  // useEffect(async () => {
  //   try {
  //     const response = await axios.get('http://localhost:8080/movie/boxoffice')
  //     setBoxoffice(response.data.result)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }, [setBoxoffice])


  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const response = await axios.get('http://localhost:8080/movie/boxoffice')
  //       setBoxoffice(response.data.result)
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }
  //   fetchData();
  // }, [setBoxoffice])


  // console.log(boxoffice)

  return (
    <>
      <HeaderTemplate />
      <main className="home-main">
        <Owlslide show={show} />
        {modalId > 0 && <VideoFrameContainer hide={hide} id={modalId} />}
        <section>
          <article className="rank box-office-rank">
            <h2>박스오피스 순위</h2>
            <div className="slide-container">
              <ul ref={slideWrap}>
                <li>
                  <p className="ranking">1</p>
                  <img src="../images/cruella.jpg" alt="cruella" />
                  <div className="movie-info">
                    <p className="movie-title">크루엘라</p>
                    <span>2021미국</span>
                    <p>평균 3.7</p>
                    <span>누적관객 1,681명</span>
                  </div>
                </li>
                <li>
                  <p className="ranking">2</p>
                  <img src="../images/voyagers.jpg" alt="voyagers" />
                  <div className="movie-info">
                    <p className="movie-title">크루엘라</p>
                    <span>2021미국</span>
                    <p>평균 3.7</p>
                    <span>누적관객 1,681명</span>
                  </div>
                </li>
                <li>
                  <p className="ranking">3</p>
                  <img src="../images/Fast_and_the_Furious.jpg" alt="Fast_and_the_Furious" />
                  <div className="movie-info">
                    <p className="movie-title">크루엘라</p>
                    <span>2021미국</span>
                    <p>평균 3.7</p>
                    <span>누적관객 1,681명</span>
                  </div>
                </li>
                <li>
                  <p className="ranking">4</p>
                  <img src="../images/pipe_line.jpg" alt="pipe_line" />
                  <div className="movie-info">
                    <p className="movie-title">크루엘라</p>
                    <span>2021미국</span>
                    <p>평균 3.7</p>
                    <span>누적관객 1,681명</span>
                  </div></li>
                <li>
                  <p className="ranking">5</p>
                  <img src="../images/poupelle.jpg" alt="poupelle" />
                  <div className="movie-info">
                    <p className="movie-title">크루엘라</p>
                    <span>2021미국</span>
                    <p>평균 3.7</p>
                    <span>누적관객 1,681명</span>
                  </div>
                </li>
                <li>
                  <p className="ranking">6</p>
                  <img src="../images/cruella.jpg" alt="cruella" />
                  <div className="movie-info">
                    <p className="movie-title">크루엘라</p>
                    <span>2021미국</span>
                    <p>평균 3.7</p>
                    <span>누적관객 1,681명</span>
                  </div>
                </li>
                <li>
                  <p className="ranking">7</p>
                  <img src="../images/voyagers.jpg" alt="voyagers" />
                  <div className="movie-info">
                    <p className="movie-title">크루엘라</p>
                    <span>2021미국</span>
                    <p>평균 3.7</p>
                    <span>누적관객 1,681명</span>
                  </div>
                </li>
                <li>
                  <p className="ranking">8</p>
                  <img src="../images/Fast_and_the_Furious.jpg" alt="Fast_and_the_Furious" />
                  <div className="movie-info">
                    <p className="movie-title">크루엘라</p>
                    <span>2021미국</span>
                    <p>평균 3.7</p>
                    <span>누적관객 1,681명</span>
                  </div>
                </li>
                <li>
                  <p className="ranking">9</p>
                  <img src="../images/pipe_line.jpg" alt="pipe_line" />
                  <div className="movie-info">
                    <p className="movie-title">크루엘라</p>
                    <span>2021미국</span>
                    <p>평균 3.7</p>
                    <span>누적관객 1,681명</span>
                  </div></li>
                <li>
                  <p className="ranking">10</p>
                  <img src="../images/poupelle.jpg" alt="poupelle" />
                  <div className="movie-info">
                    <p className="movie-title">크루엘라</p>
                    <span>2021미국</span>
                    <p>평균 3.7</p>
                    <span>누적관객 1,681명</span>
                  </div>
                </li>
              </ul>
            </div>
            <button type="button" onClick={slidePrev} ref={prevRef} className={`prev-btn`}><img src="../images/prev.png" alt="prev" /></button>
            <button type="button" onClick={slideNext} ref={nextRef} className={`next-btn`}><img src="../images/next.png" alt="next" /></button>
          </article>

          <article className="rank cine-square-rank">
            <h2>씨네스퀘어 영화 순위</h2>
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

          <article className="rank highly-rated-rank">
            <h2>평균 별점 높은 순위</h2>
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
              <h2>마이컬렉션</h2>
              <ul>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </article>
        </section>
      </main>
      <FooterTemplate />

    </>
  );
  // return (
  //   <main className="home-main">
  //     <section>
  //       <div className="slide">
  //         <a href="#none">
  //           <img src="../images/main_slide.jpg" alt="main_slide" />
  //         </a>
  //       </div>
  //       <article className="rank box-office-rank">
  //         <h2>박스오피스 순위</h2>
  //         <div className="slide-container">
  //           <ul>
  //             {boxoffice.map((v, i) => (
  //               <li>
  //                 <p className="ranking">{i + 1}</p>
  //                 <img src={`${v.mainImg}`} alt={v.movieNm} />
  //                 <div className="movie-info">
  //                   <p className="movie-title">{v.movieNm}</p>
  //                   <span>{v.openDt}</span>
  //                   <p>평균 3.7</p>
  //                   <span>예매율 30% 누적관객 1,681명</span>
  //                 </div>
  //               </li>
  //             ))}
  //           </ul>
  //         </div>
  //       </article>
  //       <article className="my-collection">
  //         <h2>마이컬렉션</h2>
  //         <ul>
  //           <li></li>
  //           <li></li>
  //           <li></li>
  //         </ul>
  //       </article>
  //     </section>
  //     <button onClick={goLogin}>로그인</button>
  //   </main>
  // );


  function slidePrev() {
    if (slideIndex === 0) return;
    slideIndex -= 1;
    slideWrap.current.style.transform = `translate(calc(-100%/2 * ${slideIndex}))`
    prevRef.current.style.display = 'none'
    nextRef.current.style.display = 'block'
  }

  function slideNext() {
    if (slideIndex === 1) return;
    slideIndex += 1;
    slideWrap.current.style.transform = `translate(calc(-100%/2 * ${slideIndex}))`
    nextRef.current.style.display = 'none'
    prevRef.current.style.display = 'block'
  }


}

export default React.memo(Home)