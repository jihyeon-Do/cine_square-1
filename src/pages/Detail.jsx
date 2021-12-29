import React, { useState, useRef, useCallback, useEffect } from 'react';
import FooterTemplate from '../components/atom/FooterTemplate';
import HeaderTemplate from '../components/atom/HeaderTemplate';
import './detail.scss'
import { ReactComponent as EmptyStar } from '../images/star-empty1.svg'
import { ReactComponent as HalfStar } from '../images/star-half1.svg'
import { ReactComponent as FullStar } from '../images/star-full1.svg'
import { ReactComponent as FullStar1 } from '../images/star-full.svg'
import { ReactComponent as Reset } from '../images/reset.svg'
import { ReactComponent as BookmarkEmpty } from '../images/bookmark-empty.svg'
import { ReactComponent as BookmarkFull } from '../images/bookmark-full.svg'

import axios from 'axios';

const MAX_SCORE = 5

export default function Detail({ match }) {

  const movieCd = match.params.movieCd; // string

  const commentDate = () => {
    let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth() + 1;
    let date = today.getDate();

    let todayDate = year + '.' + month + '.' + date;
    return todayDate
  }

  const [score, setScore] = useState(0);
  const [displayScore, setDisplayScore] = useState(score);
  const [bookmark, setBookmark] = useState(false);
  const [value, setvalue] = useState('');
  const [comments, setComments] = useState([])
  const [seeMore, setSeeMore] = useState(false)
  const [movieInfo, setMovieInfo] = useState(null);

  const formtag = useRef();

  // const handleChange = (v) => setScore(v)
  const handleChange = (v) => {
    if (score === 0 && displayScore === 0) return;
    sendScore(v)
    setScore(v)
  }

  useEffect(() => {
    async function getMovieInfo() {
      try {
        const response = await axios.get(`http://cinesquare.yahmedora.com:8080/movie/movieInfo?movieCd=${movieCd}`)
        setMovieInfo(response.data.result)
        console.log(response.data.result)
        // if (score === 0 && displayScore === 0) return;
        setScore(response.data.result.grade);
        setDisplayScore(response.data.result.grade);
        console.log(response.data.result)
      } catch (error) {
        console.log(error)
      }
    }
    getMovieInfo();
  }, [movieCd])

  const sendScore = async function (v) {
    try {
      const response = await axios({
        method: 'POST',
        url: 'http://cinesquare.yahmedora.com:8080/user/selectMovieGrade',
        data: {
          account: "123@kk.co.kr",
          password: "test1",
          grade: v,
          movieCd: movieCd
        }
      })

      console.log(response);
    } catch (error) {
      console.log(error)
    }
  }

  const calculateScore = (e) => {
    const { width, left } = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - left
    const scale = width / MAX_SCORE / 2
    return (Math.floor(x / scale) + 1) / 2
  }

  // const handleMouseMove = (e) => {
  //   setDisplayScore(calculateScore(e))
  // }


  const handleMouseMove = useCallback((e) => {
    setDisplayScore(calculateScore(e))
  }, [])

  const handleBookmark = () => {
    setBookmark(!bookmark)
  }

  const maxId = () => {
    let commentsId = comments.map(v => v.id);
    return Math.max(0, ...commentsId) + 1;
  }

  return (
    <>
      <HeaderTemplate />
      <main className="detail-main">
        <h2 className="readable-hidden">영화상세정보</h2>
        <div className="poster-wrapper">
          <div className="poster-box">
            <div className="poster-box-1"></div>
            <div className="poster-box-2"></div>
            <div className="poster-box-3"></div>
          </div>
        </div>
        {movieInfo && <section>
          <div className="close-box" style={seeMore ? { display: 'block' } : { display: 'none' }}></div>
          <div className="movie-info2-detail" style={seeMore ? { display: 'block' } : { display: 'none' }}>
            <h3 aria-labelledby="기본정보 더 상세히 보기">기본 정보</h3>
            <dl>
              <div>
                <dt>원제</dt>
                <dd>{movieInfo.movieNm}</dd>
              </div>

              <div>
                <dt>제작연도</dt>
                <dd>{movieInfo.openDt}</dd>

              </div>
              <div>
                <dt>국가</dt>
                <dd>{movieInfo.nations}</dd>
              </div>

              <div>
                <dt>장르</dt>
                <dd>{movieInfo.janres}</dd>
              </div>

              <div>
                <dt>상영시간</dt>
                <dd>{movieInfo.showTm}분</dd>
              </div>

              <div>
                <dt>내용</dt>
                {/* <dd>
                  사.상.초.유! 도심 속 초대형 재난 발생!

                  서울 입성과 함께 내 집 마련의 꿈을 이룬 가장 `동원(김성균)`. 이사 첫날부터 프로 참견러 `만수`(차승원)와 사사건건 부딪힌다. `동원`은 자가취득을 기념하며 직장 동료들을 집들이에 초대하지만 행복한 단꿈도 잠시, 순식간에 빌라 전체가 땅 속으로 떨어지고 만다.

                  마주치기만 하면 투닥거리는 빌라 주민 `만수`와 `동원`.`동원`의 집들이에 왔던 `김대리`(이광수)와 인턴사원 `은주`(김혜준)까지! 지하 500m 싱크홀 속으로 떨어진 이들은 과연 무사히 빠져나갈 수 있을까?

                  “한 500m 정도는 떨어진 것 같아”
                  “우리… 나갈 수 있을까요?” 
                  </dd> */}
                <dd>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque amet aliquid praesentium nam unde.
                  Illum sint, dolorum illo quia quod dolor itaque tempore error laboriosam modi repellat qui, cum facere.
                </dd>
              </div>
            </dl>
            <button className="close-btn" onClick={() => setSeeMore(false)}>상세정보닫기</button>
          </div>

          <div className="movie-info">
            <div className="movie-info1">
              <img src={`${movieInfo.mainImg}`} alt={`${movieInfo.movieNm}포스터`} />
              <div className="box2">
                <p className="movie-title">{movieInfo.movieNm}</p>
                <p className="movie-sub-info">{movieInfo.openDt} <span>{movieInfo.janres}</span><span>{movieInfo.nations}</span></p>
                <p className="movie-sub-info2"><span><FullStar1 /></span>평점 {score}</p>
                {/* 만약 평점 {score} 부분을 실시간으로 보고 싶지 않다면, {movieInfo.grade}로 변경하면 된다. */}
                <div className="rating">
                  <section>
                    <div
                      className="stars"
                      onMouseMove={handleMouseMove}
                      onMouseLeave={() => setDisplayScore(score)}
                      onClick={() => handleChange(displayScore)}
                    >
                      {[...Array(MAX_SCORE)].map((_, i) => (
                        <Star key={i} score={displayScore} i={i} />
                      ))}
                    </div>
                    <Reset
                      className="reset"
                      onClick={() => {
                        handleChange(0)
                        setDisplayScore(0)
                      }}
                    ></Reset>
                  </section>
                  <span>{score} 점으로 평가하셨습니다.</span>
                </div>
                <button className="bookmark" onClick={handleBookmark}>
                  <Bookmark bookmark={bookmark} />
                </button>
              </div>
            </div>
            <div className="movie-info2">
              <h3>기본 정보</h3>
              <div className="movie-sub-info3">
                <p>{movieInfo.movieNm}</p>
                <p>{movieInfo.showTm}분 {/*<span>12세</span>*/}</p>
                {/* <p className="overflow">사.상.초.유! 도심 속 초대형 재난 발생! 서울 입성과 함께 내 집 마련의 꿈을 이룬 가장 `동원(김성균)`. 이사 첫날부터 프로 참견러 `만수`(차승원)와 사사건건 부딪힌다. `동원`은 자가취득을 기념하며 직장 동료들을 집들이에 초대하지만 행복한 단꿈도 잠시, 순식간에 빌라 전체가 땅 속으로 떨어지고 만다. 마주치기만 하면 투닥거리는 빌라 주민 `만수`와 `동원`.`동원`의 집들이에 왔던 `김대리`(이광수)와 인턴사원 `은주`(김혜준)까지! 지하 500m 싱크홀 속으로 떨어진 이들은 과연 무사히 빠져나갈 수 있을까? “한 500m 정도는 떨어진 것 같아” “우리… 나갈 수 있을까요?” </p> */}
              </div>
              <button onClick={() => setSeeMore(true)}>더보기</button>
            </div>

            <div className="movie-info3">
              <h3>출연/제작</h3>
              <ul>
                {movieInfo.characterList.map((character) => (
                  <li>
                    <img src={`${character.characterImg}`} alt={`${character.realNm}`} />
                    <p>{character.realNm}</p>
                    <p>{character.movieRoll}</p>
                    <p>{character.characterNm}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="movie-info4">
              <h3>한줄리뷰</h3>
              <form action="/detail" ref={formtag}>
                <fieldset>
                  <legend className="readable-hidden">영화 감상평</legend>
                  <input type="text" value={value} placeholder="관람평을 작성해주세요" onChange={addComment} onKeyPress={enterPressComment} />
                  <button type="button" onClick={handleAddComment}>관람평 작성</button>
                </fieldset>
              </form>
              <ul>
                {comments.map((v) => (
                  <li>
                    <p>{v.comment}<span>{v.nickName}</span></p>
                    <p>{v.dates}</p>
                  </li>
                ))}
              </ul>
              <button className="add-content">더보기</button>
            </div>
          </div>
        </section>}
      </main>
      <FooterTemplate />
    </>
  )

  function addComment(e) {
    setvalue(e.target.value);
  }

  function enterPressComment(e) {
    if (e.key !== 'Enter') return;
    e.preventDefault();
    handleAddComment();
  }

  function handleAddComment(e) {
    setComments([...comments, { id: maxId(), nickName: '고정', comment: value, dates: commentDate() }])
    setvalue('')
  }
}

const Star = ({ score, i }) => {
  if (score > i) {
    if (score - i === 0.5) {
      return <HalfStar />
    } else {
      return <FullStar />
    }
  } else {
    return <EmptyStar />
  }
}

const Bookmark = ({ bookmark }) => {
  if (bookmark) {
    return <BookmarkFull />
  } else {
    return <BookmarkEmpty />
  }
}