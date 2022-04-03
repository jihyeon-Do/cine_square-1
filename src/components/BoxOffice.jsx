import React, { useRef } from 'react';

let slideIndex = 0;


function BoxOffice({ boxOfficeList }) {

  const slideWrap = useRef();
  const prevRef = useRef();
  const nextRef = useRef();

  return (
    <>
      <div className="slide-container">
        <ul ref={slideWrap}>
          {boxOfficeList.map((v, i) => (
            <li key={i}>
              <p className="ranking">{i + 1}</p>
              <img src={v.mainImg} alt={v.movieNm} />
              <div className="movie-info">
                <p className="movie-title">{v.movieNm}</p>
                <span>{v.reportDt}</span>
                <p>평균 3.7</p>
                <span>일일 관객수 {v.audience}</span>
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

export default BoxOffice;