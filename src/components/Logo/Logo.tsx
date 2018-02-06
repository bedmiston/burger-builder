import * as React from 'react';

import styled from 'styled-components';

const burgerLogo = require('../../assets/images/burger-logo.png');
const StyledDiv = styled('div')`
  background-color: white;
  padding: 8px;
  height: 100%;
  box-sizing: border-box;
  border-radius: 5px;
`;

const StyledImg = styled('img')`
  height: 100%;
`;
interface LogoProps {}

const Logo: React.SFC<LogoProps> = props => {
  return (
    <StyledDiv>
      <StyledImg src={burgerLogo} alt="MyBurger" />
    </StyledDiv>
  );
};

export default Logo;
