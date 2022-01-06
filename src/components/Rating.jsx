import React, { useState } from 'react';
import { ReactComponent as EmptyStar } from '../images/star-empty1.svg';
import { ReactComponent as HalfStar } from '../images/star-half1.svg';
import { ReactComponent as FullStar } from '../images/star-full1.svg';
import { ReactComponent as Reset } from '../images/reset.svg';

const MAX_SCORE = 5;


function Rating() {

  const [score, setScore] = useState(0);

  const [displayScore, setDisplayScore] = useState(score);
  const handleChange = (v) => setScore(v);

  const calculateScore = (e) => {
    const { width, left } = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left;
    const scale = width / MAX_SCORE / 2;
    return (Math.floor(x / scale) + 1) / 2;
  }

  const handleMouseMove = (e) => {
    setDisplayScore(calculateScore(e));
  }
  return (
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
    </div>
  );
}

export default Rating

const Star = ({ score, i }) => {
  if (score > i) {
    if (score - i === 0.5) {
      return <HalfStar />;
    } else {
      return <FullStar />;
    }
  } else {
    return <EmptyStar />;
  }
}