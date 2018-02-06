import * as React from 'react';

import styled from 'styled-components';

const DrawerDiv = styled('div')`
  width: 40px;
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;
  padding: 10px 0;
  box-sizing: border-box;
  cursor: pointer;

  @media (min-width: 500px) {
    display: none;
  }
`;

const DrawerItemDiv = styled('div')`
  width: 90%;
  height: 3px;
  background-color: white;
`;

interface DrawerToggleProps {
  clicked: () => void;
}

const DrawerToggle: React.SFC<DrawerToggleProps> = props => {
  return (
    <DrawerDiv onClick={props.clicked}>
      <DrawerItemDiv />
      <DrawerItemDiv />
      <DrawerItemDiv />
    </DrawerDiv>
  );
};

export default DrawerToggle;
