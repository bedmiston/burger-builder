import * as React from 'react';

import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import * as styles from './Toolbar.css';

interface ToolbarProps {
  drawerToggleClicked: () => void;
}

const Toolbar: React.SFC<ToolbarProps> = (props) => {
  return (
    <header className={styles.Toolbar}>
      <DrawerToggle clicked={props.drawerToggleClicked} />
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
