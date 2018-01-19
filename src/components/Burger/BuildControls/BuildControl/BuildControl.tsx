import * as React from 'react';
import * as styles from './BuildControl.css';

interface BuildControlProps {
  label: string;
}

const BuildControl: React.SFC<BuildControlProps> = (props) => (
  <div className={styles.BuildControl}>
    <div className={styles.Label}>{props.label}</div>
    <button className={styles.Less}>Less</button>
    <button className={styles.More}>More</button>
  </div>
);

export default BuildControl;
