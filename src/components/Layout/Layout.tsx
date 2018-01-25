import * as React from 'react';
import * as classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';

interface LayoutProps {}

const Layout: React.SFC<LayoutProps> = (props) => {
  return (
    <React.Fragment>
      <Toolbar />
      <main className={classes.Content}>{props.children}</main>
    </React.Fragment>
  );
};

export default Layout;
