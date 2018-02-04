import * as React from 'react';

import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import styled from 'styled-components';

const StyledMain = styled.main`
  margin-top: 72px;
`;

export interface LayoutProps {}

class Layout extends React.Component<LayoutProps> {
  state = {
    showSideDrawer: false
  };

  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  sideDrawerToggleHandler = () => {
    const oldShowSideDrawer = this.state.showSideDrawer;
    this.setState({ showSideDrawer: !oldShowSideDrawer });
  };

  render() {
    return (
      <React.Fragment>
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
        <SideDrawer
          closed={this.sideDrawerClosedHandler}
          open={this.state.showSideDrawer}
        />
        <StyledMain>{this.props.children}</StyledMain>
      </React.Fragment>
    );
  }
}

export default Layout;
