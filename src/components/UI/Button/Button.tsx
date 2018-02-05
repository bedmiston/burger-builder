import * as React from 'react';

import styled from 'react-emotion';

interface StyledImageProps {
  btnType?: string;
}

const StyledButton = styled<StyledImageProps, 'button'>('button')`
  background-color: transparent;
  border: none;
  color: ${props => {
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
  return (
    <StyledButton btnType={props.btnType} onClick={props.clicked}>
      {props.children}
    </StyledButton>
  );
};

export default Button;
