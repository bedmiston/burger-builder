import * as React from 'react';

import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${(props: { btnType?: string }) => {
    if (props.btnType === 'Success') {
      return '#5c9210';
    } else if (props.btnType === 'Danger') {
      return '#944317';
    } else {
      return 'white';
    }
  }};
  outline: none;
  cursor: pointer;
  font: inherit;
  padding: 10px;
  margin: 10px;
  font-weight: bold;

  &:first-of-type {
    margin-left: 0;
    padding-left: 0;
  }
`;

interface ButtonProps {
  clicked: () => void;
  btnType: string;
}

const Button: React.SFC<ButtonProps> = props => {
  return <StyledButton onClick={props.clicked}>{props.children}</StyledButton>;
};

export default Button;
