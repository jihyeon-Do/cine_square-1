import React, { useEffect } from 'react';
import './search.scss';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import HeaderTemplate from '../components/atom/HeaderTemplate';
import FooterTemplate from '../components/atom/FooterTemplate';
import axios from 'axios';

export default function Search() {
  // const dispatch = useDispatch();
  const value = useSelector(state => state.search.value);
  console.log(value);

  useEffect(() => {
    async function searchList() {
      try {
        // const response = await axios.post(`http://cinesquare.yahmedora.com:8080/movie/search?searchWord=${value}`, value)
        // console.log(response)
      } catch (error) {
        console.log(error)
      }
    }
    searchList();
  })
  return (
    <>
      <HeaderTemplate />
      <main className="search-main">
        <section>
          <div className="search-results">
            <p><span>{`'${value}'`}</span>(으)로 검색한 결과입니다.</p>
          </div>
          <div className="search-results-list">
            <h2>검색결과</h2>
            {/* <ul>
              <li><img src="../images/cruella.jpg" alt="cruella" /><p>크루엘라</p></li>
            </ul> */}
            <ul>
              <li>
                {/* <Link>
                  <figure> */}
                <img src="../images/cruella.jpg" alt="cruella" />
                <p>크루엘라</p>
                {/* <figcaption>크루엘라</figcaption> */}
                {/* </figure> */}
                <p>2021.05.26 <span>미국</span></p>
                {/* </Link> */}
              </li>
              <li>
                {/* <Link>
                  <figure> */}
                <img src="../images/cruella.jpg" alt="cruella" />
                <p>크루엘라</p>
                {/* <figcaption>크루엘라</figcaption> */}
                {/* </figure> */}
                <p>2021.05.26 <span>미국</span></p>
                {/* </Link> */}
              </li>
              <li>
                {/* <Link>
                  <figure> */}
                <img src="../images/cruella.jpg" alt="cruella" />
                <p>크루엘라</p>
                {/* <figcaption>크루엘라</figcaption> */}
                {/* </figure> */}
                <p>2021.05.26 <span>미국</span></p>
                {/* </Link> */}
              </li>
              <li>
                {/* <Link>
                  <figure> */}
                <img src="../images/cruella.jpg" alt="cruella" />
                <p>크루엘라</p>
                {/* <figcaption>크루엘라</figcaption> */}
                {/* </figure> */}
                <p>2021.05.26 <span>미국</span></p>
                {/* </Link> */}
              </li>
              <li>
                {/* <Link>
                  <figure> */}
                <img src="../images/cruella.jpg" alt="cruella" />
                <p>크루엘라</p>
                {/* <figcaption>크루엘라</figcaption> */}
                {/* </figure> */}
                <p>2021.05.26 <span>미국</span></p>
                {/* </Link> */}
              </li>
              <li>
                {/* <Link>
                  <figure> */}
                <img src="../images/cruella.jpg" alt="cruella" />
                <p>크루엘라</p>
                {/* <figcaption>크루엘라</figcaption> */}
                {/* </figure> */}
                <p>2021.05.26 <span>미국</span></p>
                {/* </Link> */}
              </li>
            </ul>
          </div>
        </section>
      </main>
      <FooterTemplate />
    </>
  );
}