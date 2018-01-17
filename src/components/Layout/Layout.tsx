import * as React from 'react';
const Fragment = React.Fragment;

interface LayoutProps {}

const Layout: React.SFC<LayoutProps> = props => {
  return (
    <Fragment>
      <div>Toolbar, Side, Backdrop</div>
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
