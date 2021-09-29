import React, { useRef, useState, useEffect } from 'react';
import FooterTemplate from '../components/atom/FooterTemplate';
import HeaderTemplate from '../components/atom/HeaderTemplate'
import '../pages/profile.scss';
import { Chart, registerables } from 'chart.js';
import { Link, NavLink } from 'react-router-dom';

export default function Profile() {

  const [imgUrl, setImgUrl] = useState(null)
  const imageRef = useRef('')
  const canvasDom = useRef(null);

  useEffect(() => {
    const ctx = canvasDom.current.getContext('2d');
    var myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["1점", "2점", "3점", "4점", "5점"],
        datasets: [
          {
            barPercentage: 1,
            barThickness: 50,
            minBarLength: 2,
            backgroundColor: '#6100ff',
            label: "내가 준 별점",
            data: [550, 30, 240, 100, 100],
          },
        ],
      },
    });
    return () => {
      myChart.destroy()
    }
  }, []);

  Chart.register(...registerables);

  const hanedleImgChange = (e) => {
    // const formData = new FormData();
    // formData.append({ [e.target.name]: e.target.value })
    // formData.append('file', e.target.files[0]);
    const fileUrl = e.target.files[0]
    const objectURL = URL.createObjectURL(fileUrl);
    setImgUrl(objectURL)
  }
  return (
    <>
      <HeaderTemplate />
      <main className="profile-main">
        <h2 className="a11y-hidden">프로필 기본 정보</h2>
        <div className="profile-info">
          <div>
            {/* <p>프로필 사진 업로드하기 <span>(jpg, png, jpeg)</span></p> */}
            <div className="user-image-wrapper">
              <div className="user-image-box">
                <label htmlFor="file_upload" className="custom-thumbnail-label">
                  <input id="file_upload" onChange={hanedleImgChange} ref={imageRef} className="custom-thumbnail-input" type="file" alt="profile-image" aria-label="프로필사진" accept="image/jpeg, image/png, image/jpg, image/webp" required />
                  <div className="profile-thumb" style={{ "backgroundImage": `url(${imgUrl})` }} />
                </label>
              </div>
            </div>
            <div className="user-info-box">
              <form>
                <div className="profile-name user-profile">
                  <label htmlFor="user_name">이름</label>
                  <input type="text" id="user_name" />
                </div>
                <div className="profile-email user-profile">
                  <label htmlFor="user_email">이메일</label>
                  <input type="text" id="user_email" />
                </div>
                <button className="modify">수정하기</button>
              </form>
            </div>
          </div>
        </div>
        <section>

          <div className="profile-full-info">
            <h2 className="a11y-hidden">나의 프로필 상세정보</h2>
            <div className="profile-info-cont1 cont">
              <h3>영화 감상 시간</h3>
              <div>
                <p>56시간</p>
                <p>무려 31편의 영화를 보셨어요!</p>
              </div>
            </div>
            <div className="profile-info-cont2 cont">
              <h3>별점그래프</h3>
              <div>
                <canvas ref={canvasDom}></canvas>
              </div>
            </div>
            <div className="profile-info-cont3 cont">
              <h3>영화 선호 국가</h3>
              <ul>
                <li><p>미국</p><p>20편</p></li>
                <li><p>영국</p><p>15편</p></li>
                <li><p>한국</p><p>10편</p></li>
                <li><p>일본</p><p>5편</p></li>
              </ul>
            </div>
            <div className="profile-info-cont4 cont">
              <h3>영화 선호 장르</h3>
              <ul>
                <li><p>애니메이션</p><p>20편</p></li>
                <li><p>멜로</p><p>15편</p></li>
                <li><p>스릴러</p><p>10편</p></li>
                <li><p>추리</p><p>5편</p></li>
              </ul>
            </div>
            <div className="profile-info-cont5 cont">
              <h3>내가 평가한 영화</h3>
              <ul>
                <li>
                  <img src="../images/cruella.jpg" alt="cruella" />
                </li>
                <li>
                  <img src="../images/voyagers.jpg" alt="voyagers" />
                </li>
                <li>
                  <img src="../images/Fast_and_the_Furious.jpg" alt="Fast_and_the_Furious" />
                </li>
                <li>
                  <img src="../images/pipe_line.jpg" alt="pipe_line" />
                </li>
                <li>
                  <img src="../images/poupelle.jpg" alt="poupelle" />
                </li>
              </ul>
              <Link to="/mybooks">더보기</Link>
            </div>
            <div className="profile-info-cont6 cont">
              <h3>마이 컬렉션</h3>
              <ul>
                <li>
                  <img src="../images/cruella.jpg" alt="cruella" />
                </li>
                <li>
                  <img src="../images/voyagers.jpg" alt="voyagers" />
                </li>
                <li>
                  <img src="../images/Fast_and_the_Furious.jpg" alt="Fast_and_the_Furious" />
                </li>
                <li>
                  <img src="../images/pipe_line.jpg" alt="pipe_line" />
                </li>
                <li>
                  <img src="../images/poupelle.jpg" alt="poupelle" />
                </li>
              </ul>
              <Link to="/mybooks">더보기</Link>
            </div>
          </div>
        </section>
      </main>
      <FooterTemplate />
    </>
  )
}