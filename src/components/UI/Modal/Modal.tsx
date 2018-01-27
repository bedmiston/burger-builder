import * as React from 'react';

import Backdrop from '../Backdrop/Backdrop';
import * as styles from './Modal.css';

interface ModalProps {
  show: boolean;
  modalClosed: () => void;
}

const Modal: React.SFC<ModalProps> = (props) => {
  return (
    <React.Fragment>
      <Backdrop show={props.show} clicked={props.modalClosed} />
      <div
        className={styles.Modal}
        style={{
          transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: props.show ? 1 : 0
        }}
      >
        {props.children}
      </div>
    </React.Fragment>
  );
};

export default Modal;
