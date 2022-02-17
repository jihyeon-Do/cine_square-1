import React, { useCallback } from 'react';
import styles from './videoFrame.module.scss';


const autoPalyUrl = '?rel=0;amp;autoplay=1';
const videos = [
  {
    id: 1,
    title: '기적',
    src: `https://www.youtube.com/embed/zGNxA4IDSyQ${autoPalyUrl}`,
  },
  {
    id: 2,
    title: '듄',
    src: `https://www.youtube.com/embed/NzB4XWAroj8${autoPalyUrl}`,
  },
  {
    id: 3,
    title: '용과 주근깨 공주',
    src: `https://www.youtube.com/embed/67k-nvJrrIc${autoPalyUrl}`,
  },
  {
    id: 4,
    title: '화이트데이',
    src: `https://www.youtube.com/embed/1kgCVqxtR_w${autoPalyUrl}`,
  },
];

function MainVideoPotal({ hide, id }) {
  const index = id;

  const [matchMovie] = videos.filter((video) => video.id === +index);

  const close = useCallback(() => {
    hide();
  }, []);

  return (
    <div className={styles['video-background']} onClick={close}>
      {
        <iframe
          title={matchMovie.title}
          width="920"
          height="515"
          src={matchMovie.src}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        >
          <button className={styles['close-btn']}>
            <div className={styles['btn-1']}></div>
            <div className={styles['btn']}></div>
          </button>
        </iframe>
      }
    </div>
  );
}

export default React.memo(MainVideoPotal);