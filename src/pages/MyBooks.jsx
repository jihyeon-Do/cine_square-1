import React, { useState } from 'react';
import HeaderTemplate from '../components/HeaderTemplate';
import FooterTemplate from '../components/FooterTemplate';
import './mybooks.scss';
import { ReactComponent as FullStar1 } from '../images/star-full.svg';

const evaluated = [
  {
    id: 1,
    poster: '../images/Miracle_poster.jpg',
    title: '기적',
    rating: 5
  },
  {
    id: 2,
    poster: '../images/Miracle_poster.jpg',
    title: '기적',
    rating: 5
  },
  {
    id: 3,
    poster: '../images/Miracle_poster.jpg',
    title: '기적',
    rating: 5
  },
  {
    id: 4,
    poster: '../images/Miracle_poster.jpg',
    title: '기적',
    rating: 5
  },
  {
    id: 5,
    poster: '../images/Miracle_poster.jpg',
    title: '기적',
    rating: 5
  },
  {
    id: 6,
    poster: '../images/Miracle_poster.jpg',
    title: '기적',
    rating: 5
  },
  {
    id: 7,
    poster: '../images/Miracle_poster.jpg',
    title: '기적',
    rating: 5
  }
]

const collection = [
  {
    id: 1,
    poster: '../images/Miracle_poster.jpg',
    title: '기적',
  }
]

function MyBooks() {
  const [tabNumber, setTabNumber] = useState(1)

  return (
    <>
      <HeaderTemplate />
      <main className="MyBooks-main">
        <h2 className="title" aria-labelledby="mybooks 페이지 제목">
          <p>모든 영화</p>
        </h2>
        <section>
          <div className="tab-menu-title">
            <ul>
              <li style={tabNumber === 1 ? { borderBottom: '2px solid #6100ff', color: '#6100ff' }
                : {}}><button onClick={() => setTabNumber(1)}>내가 평가한 영화</button></li>
              <li style={tabNumber === 2 ? { borderBottom: '2px solid #6100ff', color: '#6100ff' }
                : {}}><button onClick={() => setTabNumber(2)}>마이 컬렉션</button></li>
            </ul>
          </div>
          <div className="tab-menu-content1" style={tabNumber === 1 ? { display: 'block' } : { display: 'none' }}>
            <ul>
              {evaluated !== null && evaluated.map((v) => (
                <li>
                  <img src={v.poster} alt="기적" />
                  <p>{v.title}</p>
                  <p><span><FullStar1 /></span>{v.rating + '.0'}점으로 평가함</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="tab-menu-content2" style={tabNumber === 2 ? { display: 'block' } : { display: 'none' }}>
            <ul>
              {collection !== null && collection.map((v) => (
                <li>
                  <img src={v.poster} alt={v.title} />
                  <p>{v.title}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <FooterTemplate />
    </>
  )
}

export default MyBooks