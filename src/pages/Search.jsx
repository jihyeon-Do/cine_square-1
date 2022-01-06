import React, { useEffect } from 'react';
import './search.scss';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import HeaderTemplate from '../components/HeaderTemplate';
import FooterTemplate from '../components/FooterTemplate';
import { startGetSearchValueActionCreator } from '../redux/modules/search';
import { startGetSearchListActionCreator } from '../redux/modules/search'

export default function Search({ match }) {
  const dispatch = useDispatch();
  const searchWord = useSelector(state => state.search.value);
  const searchLists = useSelector(state => state.search.list);
  const { keyword } = match.params;

  // 새로고침시 재검색
  useEffect(() => {
    dispatch(startGetSearchValueActionCreator(keyword));
    dispatch(startGetSearchListActionCreator(keyword));
  }, [dispatch, keyword]);

  // useEffect(() => {
  //   async function searchList() {
  //     if (searchWord === '' || searchWord === null) return;
  //     try {
  //       // const response = await axios.get(`http://localhost:8080/movie/search?searchWord=${searchWord}`)
  //       // console.log(response)
  //       // return response.data.result
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }
  //   searchList();
  // }, [searchWord])

  return (
    <>
      <HeaderTemplate />
      <main className="search-main">
        <section>
          <div className="search-results">
            <p><span>{`'${searchWord}'`}</span>(으)로 검색한 결과입니다.</p>
          </div>
          <div className="search-results-list">
            <h2>검색결과</h2>
            {/* <ul>
              <li><img src="../images/cruella.jpg" alt="cruella" /><p>크루엘라</p></li>
            </ul> */}
            <ul>
              {searchLists.map((list) => (
                <li>
                  <Link to={`/detail/${list.movieCd}`}>
                    <img src={`${list.mainImg}`} alt={`${list.movieNm}`} />
                    <p>{list.movieNm}</p>
                    <p>{list.openDt} <span>{list.nations}</span></p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <FooterTemplate />
    </>
  );
}