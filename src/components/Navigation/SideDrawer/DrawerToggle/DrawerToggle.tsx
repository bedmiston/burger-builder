import * as React from 'react';

import * as styles from './DrawerToggle.css';

interface DrawerToggleProps {
  clicked: () => void;
}

const DrawerToggle: React.SFC<DrawerToggleProps> = (props) => {
  return (
    <div className={styles.DrawerToggle} onClick={props.clicked}>
      <div />
      <div />
      <div />
    </div>
  );
};

export default DrawerToggle;
