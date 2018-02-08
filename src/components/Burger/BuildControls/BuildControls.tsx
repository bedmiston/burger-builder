import * as React from 'react';

import BuildControl from './BuildControl/BuildControl';
import styled, { css, keyframes } from 'styled-components';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' }
];

const enable = keyframes`
  0% {
    transform: scale(1);
  }
  60% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

const StyledDiv = styled('div')`
  width: 100%;
  background-color: #cf8f2e;
  display: flex;
  flex-flow: column;
  align-items: center;
  box-shadow: 0 2px 1px #ccc;
  margin: auto;
  padding: 10px 0;
`;

interface OrderButtonProps {
  disabled: boolean;
}

const OrderButton = styled<OrderButtonProps, 'div'>('div')`
  background-color: ${props => (props.disabled ? '#c7c6c6' : '#dad735')};
  outline: none;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  border: ${props => (props.disabled ? '1px solid #ccc' : '1px solid #966909')};
  color: ${props => (props.disabled ? '#888888' : '#966909')};
  font-family: inherit;
  font-size: 1.2em;
  padding: 15px 30px;
  box-shadow: 2px 2px 2px #966909;
  animation: ${props => (!props.disabled ? enable + ' 0.3s linear' : '')};

  &:hover {
    ${props =>
      !props.disabled
        ? css`
            background-color: #a0db41;
            border: 1px solid #966909;
            color: #966909;
          `
        : ''};
  }
`;

interface BuildControlsProps {
  ingredientAdded: (type: string) => void;
  ingredientRemoved: (type: string) => void;
  disabled: object;
  price: number;
  purchaseable: boolean;
  ordered: () => void;
}

const BuildControls: React.SFC<BuildControlsProps> = props => (
  <StyledDiv>
    <p>
      Current Price: <strong>{props.price.toFixed(2)}</strong>
    </p>
    {controls.map(ctrl => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        added={() => props.ingredientAdded(ctrl.type)}
        removed={() => props.ingredientRemoved(ctrl.type)}
        disabled={props.disabled[ctrl.type]}
      />
    ))}
    <OrderButton disabled={!props.purchaseable} onClick={props.ordered}>
      ORDER NOW
    </OrderButton>
  </StyledDiv>
);

export default BuildControls;
