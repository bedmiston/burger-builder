import * as React from 'react';
import * as styles from './Spinner.css';

interface SpinnerProps {}

const Spinner: React.SFC<SpinnerProps> = (props) => {
  return <div className={styles.Loader}>Loading...</div>;
};

export default Spinner;
