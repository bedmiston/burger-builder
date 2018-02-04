import * as React from 'react';

import styled from 'styled-components';
import styledComponentsTS from 'styled-components-ts';

interface StyledButtonProps {
  success?: boolean;
  danger?: boolean;
}

const StyledButton = styledComponentsTS<StyledButtonProps>(styled.button)`
  background-color: transparent;
  border: none;
  color: ${props => {
    if (props.success) {
      return '#5c9210';
    } else if (props.danger) {
      return '#944317';
    } else {
      return 'white';
    }
  }}
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
