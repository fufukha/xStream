import React from 'react';
import Segment from '../Segment/Segment.js';
import CircleMeter from '../CircleMeter/CircleMeter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStepForward,
  faStepBackward,
  faSquare,
} from '@fortawesome/free-solid-svg-icons'
import styles from './stream.css';
import classnames from 'classnames';

const Stream = () => {
  return (
    <div className={styles.stream}>
      <Segment />
      <div className={styles.footer}>
        <div className={styles.player}>
          <button>
            <FontAwesomeIcon className={styles.playerMain_skip}
              size={'2x'}
              icon={faStepBackward}/>
          </button>
          <button className={styles.playerMain}>
            <CircleMeter />
            <FontAwesomeIcon className={classnames(
              styles.playerMain_operator,
              styles.square
            )}
              icon={faSquare}/>
          </button>
          <button>
            <FontAwesomeIcon className={styles.playerMain_skip}
              size={'2x'}
              icon={faStepForward}/>
          </button>
        </div>
        <div className={styles.index}>
          <span>1/4</span>
        </div>
      </div>
    </div>
  )
}

export default Stream;
