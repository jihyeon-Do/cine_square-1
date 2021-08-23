import axios from 'axios';
import React, { useRef, useEffect, useState } from 'react';
import './home.scss'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import HeaderTemplate from '../components/atom/HeaderTemplate';
import FooterTemplate from '../components/atom/FooterTemplate';


export default function Home({ history }) {

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


  useEffect(async () => {
    try {
      const response = await axios.get('http://localhost:8080/movie/boxoffice')
      setBoxoffice(response.data.result)
    } catch (error) {
      console.log(error)
    }
  }, [setBoxoffice])

  // console.log(boxoffice)

  return (
    <>
      <HeaderTemplate />
      <main className="home-main">
        <section>
          <div className="slide" onClick={startVideo}>
            <OwlCarousel
              className='owl-theme'
              loop margin={10}
              nav={true}
              items="1"
              center={true}
              dots={false}
              slideBy="7"
            >
              <div className='item'>
                <img src="../images/freeGuy.jpg" alt="free-guy" data-video="https://www.youtube.com/embed/LeWwoGjGklc" />
              </div>
              <div className='item' >
                <img src="../images/Inzil.jpg" alt="inzil" data-video="https://www.youtube.com/embed/LeWwoGjGklc" />
              </div>
              <div className='item'>
                <img src="../images/Puppy.jpg" alt="puppy" data-video="https://www.youtube.com/embed/LeWwoGjGklc" />
              </div>
              <div className='item'>
                <img src="../images/Sence.jpg" alt="sence" data-video="https://www.youtube.com/embed/LeWwoGjGklc" />
              </div>
            </OwlCarousel>
            <div className="play-btn">
              <img src="../images/play.png" alt="play-btn" />
            </div>
            {/* <div>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/LeWwoGjGklc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div> */}
          </div>
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
                <li>
                  <p className="ranking">11</p>
                  <img src="../images/cruella.jpg" alt="cruella" />
                  <div className="movie-info">
                    <p className="movie-title">크루엘라</p>
                    <span>2021미국</span>
                    <p>평균 3.7</p>
                    <span>누적관객 1,681명</span>
                  </div>
                </li>
                <li>
                  <p className="ranking">12</p>
                  <img src="../images/voyagers.jpg" alt="voyagers" />
                  <div className="movie-info">
                    <p className="movie-title">크루엘라</p>
                    <span>2021미국</span>
                    <p>평균 3.7</p>
                    <span>누적관객 1,681명</span>
                  </div>
                </li>
                <li>
                  <p className="ranking">13</p>
                  <img src="../images/Fast_and_the_Furious.jpg" alt="Fast_and_the_Furious" />
                  <div className="movie-info">
                    <p className="movie-title">크루엘라</p>
                    <span>2021미국</span>
                    <p>평균 3.7</p>
                    <span>누적관객 1,681명</span>
                  </div>
                </li>
                <li>
                  <p className="ranking">14</p>
                  <img src="../images/pipe_line.jpg" alt="pipe_line" />
                  <div className="movie-info">
                    <p className="movie-title">크루엘라</p>
                    <span>2021미국</span>
                    <p>평균 3.7</p>
                    <span>누적관객 1,681명</span>
                  </div>
                </li>
                <li>
                  <p className="ranking">15</p>
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
            <div className="pagination">
              <button type="button" onClick={slidePrev} ref={prevRef} className={`prev-btn`}><img src="../images/prev.png" alt="prev" /></button>
              <button type="button" onClick={slideNext} ref={nextRef} className={`next-btn`}><img src="../images/next.png" alt="next" /></button>
            </div>
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
            <h2>마이컬렉션</h2>
            <div className="my-collection">
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
    slideWrap.current.style.transform = `translate(calc(-100%/3 * ${slideIndex}))`
  }

  function slideNext() {
    if (slideIndex === 2) return;
    slideIndex += 1;
    slideWrap.current.style.transform = `translate(calc(-100%/3 * ${slideIndex}))`
  }

  function startVideo(e) {
    console.log(e.currentTarget)
  }
}