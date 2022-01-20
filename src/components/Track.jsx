import React from 'react';

function Track({url, title}) {
  return <div>
      <audio src={url}>{title}</audio>
  </div>;
}

export default Track;
