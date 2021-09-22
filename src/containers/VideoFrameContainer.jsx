import React from 'react';
import ReactDOM from 'react-dom';
import VideoFrame from '../components/VideoFrame';
function VideoFrameContainer({ hide, id }) {
  return ReactDOM.createPortal(
    <VideoFrame hide={hide} id={id} />,
    document.querySelector('#mainVideoPortal'),
  );
}

export default React.memo(VideoFrameContainer);
