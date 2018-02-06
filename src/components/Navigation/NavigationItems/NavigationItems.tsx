import * as React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import styled from 'styled-components';

const StyledUL = styled('ul')`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-flow: column;
  align-items: center;
  height: 100%;

  @media (min-width: 500px) {
    flex-flow: row;
  }
`;
interface NavigationItemsProps {}

const NavigationItems: React.SFC<NavigationItemsProps> = props => (
  <StyledUL>
    <NavigationItem link="/" active={true}>
      Burger Builder
    </NavigationItem>
    <NavigationItem link="/" active={false}>
      Checkout
    </NavigationItem>
  </StyledUL>
);

export default NavigationItems;
