import * as React from 'react';
import * as classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

interface LayoutProps {}

const Layout: React.SFC<LayoutProps> = (props) => {
  return (
    <React.Fragment>
      <Toolbar />
      <SideDrawer />
      <main className={classes.Content}>{props.children}</main>
    </React.Fragment>
  );
};

export default Layout;
