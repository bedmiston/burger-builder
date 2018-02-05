import * as React from 'react';

import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import styled from 'styled-components';

const StyledNav = styled('nav')`
  height: 100%;
  @media (max-width: 499px) {
    display: none;
  }
`;

const StyledHeader = styled('header')`
  height: 56px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #703b09;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
  z-index: 90;

  nav & {
    height: 100%;
  }
`;

const StyledLogoDiv = styled('div')`
  height: 80%;
`;

interface ToolbarProps {
  drawerToggleClicked: () => void;
}

const Toolbar: React.SFC<ToolbarProps> = props => {
  return (
    <StyledHeader>
      <DrawerToggle clicked={props.drawerToggleClicked} />
      <StyledLogoDiv>
        <Logo />
      </StyledLogoDiv>
      <StyledNav>
        <NavigationItems />
      </StyledNav>
    </StyledHeader>
  );
};

export default Toolbar;
