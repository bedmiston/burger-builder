import * as React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import * as styles from './SideDrawer.css';

interface SideDrawerProps {}

const SideDrawer: React.SFC<SideDrawerProps> = (props) => {
  // conditional styling
  return (
    <div className={styles.SideDrawer}>
      <div className={styles.Logo}>
        <Logo />
      </div>

      <nav>
        <NavigationItems />
      </nav>
    </div>
  );
};

export default SideDrawer;
