import * as React from 'react';
import * as styles from './Modal.css';

interface ModalProps {}

const Modal: React.SFC<ModalProps> = (props) => {
  return <div className={styles.Modal}>{props.children}</div>;
};

export default Modal;
