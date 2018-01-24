import * as React from 'react';
import * as styles from './Backdrop.css';

interface BackdropProps {
  show: boolean;
  clicked: () => void;
}

const Backdrop: React.SFC<BackdropProps> = (props) => {
  return props.show ? (
    <div className={styles.Backdrop} onClick={props.clicked} />
  ) : null;
};

export default Backdrop;
