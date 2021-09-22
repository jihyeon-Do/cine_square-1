import React, { useRef, useState } from 'react';
import FooterTemplate from '../components/atom/FooterTemplate';
import HeaderTemplate from '../components/atom/HeaderTemplate'
import '../pages/profile.scss';


export default function Profile() {

  const [imgUrl, setImgUrl] = useState(null)
  const imageRef = useRef('')

  const hanedleImgChange = (e) => {
    const formData = new FormData();
    // formData.append({ [e.target.name]: e.target.value })
    // formData.append('file', e.target.files[0]);
    const fileUrl = e.target.files[0]
    const _fileUrl = URL.createObjectURL(fileUrl);
    setImgUrl(_fileUrl)
  }
  return (
    <>
      <HeaderTemplate />
      <main className="profile-main">
        <section>
          <div className="profile-info">
            <h2 className="a11y-hidden">프로필 기본 정보</h2>
            <div>
              {/* <p>프로필 사진 업로드하기 <span>(jpg, png, jpeg)</span></p> */}
              <div className="user-image-box">
                <label htmlFor="file_upload" className="custom-thumbnail-label">
                  <input id="file_upload" onChange={hanedleImgChange} ref={imageRef} className="custom-thumbnail-input" type="file" alt="profile-image" aria-label="프로필사진" accept="image/jpeg, image/png, image/jpg, image/webp" required />
                  <div className="profile-thumb" style={{ "backgroundImage": `url(${imgUrl})` }} />
                </label>
              </div>
              <div className="user-info-box">
                <label htmlFor="user_name">이름</label>
                <input type="text" id="user_name" />
                <label htmlFor="user_email">이메일</label>
                <input type="text" id="user_email" />
              </div>
              <button>수정하기</button>
            </div>
          </div>
          <div className="profile-full-info">
            <h2 className="a11y-hidden">나의 프로필 상세정보</h2>
            <div className="profile-info-cont1">
              <h3>영화 감상 시간</h3>
              <div>
                <p>56시간</p>
                <p>무려 31편의 영화를 보셨어요!</p>
              </div>
            </div>
            <div className="profile-info-cont2">
              <h3>별점그래프</h3>
            </div>
            <div className="profile-info-cont3">
              <h3>영화 선호 국가</h3>
              <ul>
                <li><p>미국</p><p>20편</p></li>
                <li><p>영국</p><p>15편</p></li>
                <li><p>한국</p><p>10편</p></li>
                <li><p>일본</p><p>5편</p></li>
              </ul>
            </div>
            <div className="profile-info-cont4">
              <h3>영화 선호 장르</h3>
              <ul>
                <li><p>애니메이션</p><p>20편</p></li>
                <li><p>멜로</p><p>15편</p></li>
                <li><p>스릴러</p><p>10편</p></li>
                <li><p>추리</p><p>5편</p></li>
              </ul>
            </div>
            <div className="profile-info-cont5">
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
              <button>더보기</button>
            </div>
          </div>
        </section>
      </main>
      <FooterTemplate />
    </>
  )
}