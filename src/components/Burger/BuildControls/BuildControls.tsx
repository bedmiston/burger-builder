import * as React from 'react';
import * as styles from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' }
];

interface BuildControlsProps {
  ingredientAdded: (type: string) => void;
  ingredientRemoved: (type: string) => void;
  disabled: object;
  price: number;
}

const BuildControls: React.SFC<BuildControlsProps> = (props) => (
  <div className={styles.BuildControls}>
    <p>
      Current Price: <strong>{props.price.toFixed(2)}</strong>
    </p>
    {controls.map((ctrl) => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        added={() => props.ingredientAdded(ctrl.type)}
        removed={() => props.ingredientRemoved(ctrl.type)}
        disabled={props.disabled[ctrl.type]}
      />
    ))}
  </div>
);

export default BuildControls;
