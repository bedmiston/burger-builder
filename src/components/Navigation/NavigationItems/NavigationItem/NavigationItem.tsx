import * as React from 'react';
import styled from 'styled-components';

const StyleListItem = styled('li')`
  margin: 10px 0;
  box-sizing: border-box;
  display: block;
  width: 100%;

  @media (min-width: 500px) {
    margin: 0;
    display: flex;
    height: 100%;
    width: auto;
    align-items: center;
  }
`;

interface StyledLinkProps {
  active: boolean;
}

const StyledLink = styled<StyledLinkProps, 'a'>('a')`
  color: ${props => (props.active ? '#40a4c8' : '#8f5c2c')};
  text-decoration: none;
  height: 100%;
  box-sizing: border-box;
  display: block;

  &:hover {
    color: #40a4c8;
  }

  @media (min-width: 500px) {
    color: white;
    height: 100%;
    padding: 16px 10px;
    border-bottom: 4px solid transparent;

    &:hover {
      background-color: #8f5c2c;
      border-bottom: 4px solid #40a4c8;
    }
  }
`;

interface NavigationItemProps {
  link: string;
  active: boolean;
}

const NavigationItem: React.SFC<NavigationItemProps> = props => (
  <StyleListItem>
    <StyledLink href={props.link} active={props.active}>
      {props.children}
    </StyledLink>
  </StyleListItem>
);

export default NavigationItem;
