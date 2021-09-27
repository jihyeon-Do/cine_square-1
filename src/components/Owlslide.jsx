import React, { useCallback } from 'react';
import OwlCarousel from 'react-owl-carousel';
import './owlslide.scss';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';



const images = [
  { id: 1, title: '기적', src: '../images/Miracle.jpg' },
  { id: 2, title: '듄', src: '../images/Dune.jpg' },
  { id: 3, title: '용과 주근깨 공주', src: '../images/Yong.jpg' },
  {
    id: 4,
    title: '화이트데이',
    src: '../images/White.jpg',
  },
];

function Owlslide({ show }) {

  const open = useCallback((e) => {
    const id = e.currentTarget.id;
    show(id);
  }, []);

  return (
    <div className="slide" >
      <OwlCarousel
        className="owl-theme"
        items={1}
        loop
        nav
        autoplay
        autoplayTimeout={4000}
        autoplaySpeed={700}
        dots={false}
      >
        {images.map((images) => (
          <button
            className="images"
            onClick={open}
            id={images.id}
            key={images.id}
          >
            <img src={images.src} alt={images.title} />
            <div className="play-btn">
              <img src="../images/play.png" alt="play-button" />
            </div>
          </button>
        ))}
      </OwlCarousel>

    </div>
  )

}

export default React.memo(Owlslide);