import * as React from 'react';

import * as styles from './BuildControl.css';

interface BuildControlProps {
  label: string;
  added: () => void;
  removed: () => void;
  disabled: boolean;
}

const BuildControl: React.SFC<BuildControlProps> = (props) => (
  <div className={styles.BuildControl}>
    <div className={styles.Label}>{props.label}</div>
    <button
      className={styles.Less}
      onClick={props.removed}
      disabled={props.disabled}
    >
      Less
    </button>
    <button className={styles.More} onClick={props.added}>
      More
    </button>
  </div>
);

export default BuildControl;
