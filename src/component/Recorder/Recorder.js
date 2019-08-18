import React from 'react';

const Recorder = () => {
  return (
    <audio
      controls
      src={"http://xahlee.info/js/i/s/test.oga"}>
      Your browser does not support the
              <code>audio</code> element.
    </audio>

  )
}

export default Recorder;
