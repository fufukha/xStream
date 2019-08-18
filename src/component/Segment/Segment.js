import React from 'react';
import TextInput from '../TextInput/TextInput';
import Recorder from '../Recorder/Recorder';
import styles from './segment.css';

const Segment = () => {
  const isRecorder = false;
  return (
    <div className={styles.segment}>
      { isRecorder ? <Recorder /> : <TextInput />}
    </div>
  )
}

export default Segment;
