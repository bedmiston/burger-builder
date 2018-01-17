import * as React from 'react';
import * as classes from './Layout.css';

interface LayoutProps {}

const Layout: React.SFC<LayoutProps> = props => {
  return (
    <React.Fragment>
      <div>Toolbar, Side, Backdrop</div>
      <main className={classes.Content}>{props.children}</main>
    </React.Fragment>
  );
};

export default Layout;
