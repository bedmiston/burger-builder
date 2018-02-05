import * as React from 'react';

import Logo from '../../Logo/Logo';
import Backdrop from '../../UI/Backdrop/Backdrop';
import NavigationItems from '../NavigationItems/NavigationItems';
// import * as styles from './SideDrawer.css';
import styled from 'styled-components';

const StyledDiv = styled('div')`
  position: fixed;
  width: 280px;
  max-width: 70%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 200;
  background-color: white;
  padding: 32px 16px;
  box-sizing: border-box;
  transition: transform 0.3s ease-out;
  transform: ${(props: { open: boolean }) =>
    props.open ? 'translateX(0)' : 'translateX(-100%)'};

  @media (min-width: 500px) {
    display: none;
  }
`;

const LogoDiv = styled('div')`
  height: 11%;
  margin-bottom: 32px;
`;

interface SideDrawerProps {
  open: boolean;
  closed: () => void;
}

const SideDrawer: React.SFC<SideDrawerProps> = props => {
  return (
    <React.Fragment>
      <Backdrop show={props.open} clicked={props.closed} />
      <StyledDiv {...props}>
        <LogoDiv>
          <Logo />
        </LogoDiv>

        <nav>
          <NavigationItems />
        </nav>
      </StyledDiv>
    </React.Fragment>
  );
};

export default SideDrawer;
