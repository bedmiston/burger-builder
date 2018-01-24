import * as React from 'react';
import * as styles from './Modal.css';

interface ModalProps {
  show: boolean;
}

const Modal: React.SFC<ModalProps> = (props) => {
  return (
    <div
      className={styles.Modal}
      style={{
        transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: props.show ? 1 : 0
      }}
    >
      {props.children}
    </div>
  );
};

export default Modal;
