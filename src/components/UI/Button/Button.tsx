import * as React from 'react';
import * as styles from './Button.css';

interface ButtonProps {
  clicked: () => void;
  btnType: string;
}

const Button: React.SFC<ButtonProps> = (props) => {
  return (
    <button
      className={[styles.Button, styles[props.btnType]].join(' ')}
      onClick={props.clicked}
    >
      {props.children}
    </button>
  );
};

export default Button;
