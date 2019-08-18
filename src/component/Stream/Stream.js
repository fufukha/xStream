import React from 'react';
import Segment from '../Segment/Segment.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
  faPlus,
  faMinus,
  faMicrophone,
  faPlay,
  faPen
} from '@fortawesome/free-solid-svg-icons'
import styles from './stream.css';
import classnames from 'classnames';

const Stream = () => {
  const featureSize = '2x'
  return (
    <div className={styles.stream}>
      <Segment />
      <div className={styles.controls}>
        <div className={styles.footer}>
          <div className={styles.features}>
            <button>
            <FontAwesomeIcon
              size={featureSize}
              icon={faMicrophone}/>
            </button>
            <button>
            <FontAwesomeIcon
              size={featureSize}
              icon={faPlay}/>
            </button>
            <button>
            <FontAwesomeIcon
              size={featureSize}
              icon={faPen}/>
            </button>
          </div>
          <div className='index noused'>
            <button className={styles.operator}>
              <FontAwesomeIcon
                icon={faMinus}/>
            </button>
            <span>1/4</span>
            <button className={styles.operator}>
              <FontAwesomeIcon
                icon={faPlus}/>
            </button>
          </div>
        </div>
          <button className={classnames(styles.arrow, styles.arrow_left)}>
            <FontAwesomeIcon
            size={'5x'}
            icon={faChevronLeft} />
          </button>
        <button className={classnames(styles.arrow, styles.arrow_right)}>
          <FontAwesomeIcon
            size={'5x'}
            icon={faChevronRight} />
        </button>
      </div>
    </div>
  )
}

export default Stream;
