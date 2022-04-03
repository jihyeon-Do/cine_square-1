import React, { useRef } from 'react';

function AverageRanking() {
  const averageRanking = [
    {
      id: 1,
      title: ' 레옹',
      src: ' ../images/leon.jpg',
      release: 1994,
      nation: '프랑스/미국',
      grade: ' 4.2'
    },
    {
      id: 2,
      title: ' 극장판 짱구는 못말려 10기: 태풍을 부르는 장엄한 전설의 전투',
      src: ' ../images/zzang-gu.jpg',
      release: 2002,
      nation: ' 일본',
      grade: '4.0'
    },
    {
      id: 3,
      title: '미 비포 유',
      src: '../images/before.jpg',
      release: 2016,
      nation: '영국/미국',
      grade: '3.9'
    },
    {
      id: 4,
      title: '화이트 칙스 ',
      src: '../images/white-chicks.jpg ',
      release: 2004,
      nation: '미국',
      grade: '3.7'
    },
    {
      id: 5,
      title: '로맨틱 홀리데이',
      src: '../images/holiday.jpg',
      release: 2006,
      nation: ' 미국',
      grade: ' 3.7'
    },
    {
      id: 6,
      title: ' 신과함께-인과 연',
      src: ' ../images/with-god.jpg',
      release: 2018,
      nation: ' 한국',
      grade: ' 3.7'
    },
    {
      id: 7,
      title: '이퀼리브리엄',
      src: '../images/equili.jpg',
      release: 2002,
      nation: '미국',
      grade: '3.7'
    },
    {
      id: 8,
      title: '하우 투 비 싱글',
      src: '../images/how-to-be-single.jpg',
      release: 2016,
      nation: '미국',
      grade: '3.4'
    },
    {
      id: 9,
      title: '웨이 다운',
      src: '../images/way-down.jpg',
      release: 2021,
      nation: '스페인/프랑스',
      grade: '3.3'
    },
    {
      id: 10,
      title: '구르믈 버서난 달처럼',
      src: '../images/moon.jpg',
      release: 2009,
      nation: '한국',
      grade: '3.0'
    }
  ]

  let slideIndex = 0;

  const slideWrap = useRef();
  const prevRef = useRef();
  const nextRef = useRef();

  return (
    <>
      <div className="slide-container">
        <ul ref={slideWrap}>
          {averageRanking.map((v, i) => (
            <li key={i}>
              <p className="ranking">{v.id}</p>
              <img src={v.src} alt={v.title} />
              <div className="movie-info">
                <p className="movie-title">{v.title}</p>
                <p>{v.release} {v.nation}</p>
                <p>평점 {v.grade}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <button type="button" onClick={slidePrev} ref={prevRef} className={`prev-btn`}><img src="../images/prev.png" alt="prev" /></button>
      <button type="button" onClick={slideNext} ref={nextRef} className={`next-btn`}><img src="../images/next.png" alt="next" /></button>
    </>
  );

  function slidePrev() {
    if (slideIndex === 0) return;
    slideIndex -= 1;
    slideWrap.current.style.transform = `translate(calc(-100%/2 * ${slideIndex}))`;
    prevRef.current.style.display = 'none';
    nextRef.current.style.display = 'block';
  }

  function slideNext() {
    if (slideIndex === 1) return;
    slideIndex += 1;
    slideWrap.current.style.transform = `translate(calc(-100%/2 * ${slideIndex}))`;
    nextRef.current.style.display = 'none';
    prevRef.current.style.display = 'block';
  }
}

export default AverageRanking;