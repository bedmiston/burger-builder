import * as React from 'react';
// import * as styles from './Spinner.css';
import styled, { keyframes } from 'styled-components';

const load1 = keyframes`
  0%,
  80%,
  100% {
    box-shadow: 0 0;
    height: 4em;
  }
  40% {
    box-shadow: 0 -2em;
    height: 5em;
  }
`;

const StyledDiv = styled('div')`
  background: #521751;
  -webkit-animation: ${load1} 1s infinite ease-in-out;
  animation: ${load1} 1s infinite ease-in-out;
  width: 1em;
  height: 4em;
  color: #521751;
  text-indent: -9999em;
  margin: 88px auto;
  position: relative;
  font-size: 11px;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;

  &:before {
    background: #521751;
    -webkit-animation: ${load1} 1s infinite ease-in-out;
    animation: ${load1} 1s infinite ease-in-out;
    width: 1em;
    height: 4em;
    position: absolute;
    top: 0;
    content: '';
    left: -1.5em;
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }
  &:after {
    background: #521751;
    -webkit-animation: ${load1} 1s infinite ease-in-out;
    animation: ${load1} 1s infinite ease-in-out;
    width: 1em;
    height: 4em;
    position: absolute;
    top: 0;
    content: '';
    left: 1.5em;
  }
`;

interface SpinnerProps {}

const Spinner: React.SFC<SpinnerProps> = props => {
  return <StyledDiv>Loading...</StyledDiv>;
};

export default Spinner;
