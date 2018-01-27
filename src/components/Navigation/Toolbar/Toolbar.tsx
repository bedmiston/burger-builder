import * as React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import * as styles from './Toolbar.css';

interface ToolbarProps {}

const Toolbar: React.SFC<ToolbarProps> = (props) => {
  return (
    <header className={styles.Toolbar}>
      <div>MENU</div>
      <div className={styles.Logo}>
        <Logo />
      </div>
      <nav className={styles.DesktopOnly}>
        <NavigationItems />
      </nav>
    </header>
  );
};

export default Toolbar;
