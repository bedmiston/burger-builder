import * as React from 'react';

import Backdrop from '../Backdrop/Backdrop';
import * as styles from './Modal.css';

interface ModalProps {
  show: boolean;
  modalClosed: () => void;
}

class Modal extends React.Component<ModalProps> {
  shouldComponentUpdate(nextProps: ModalProps, nextState: ModalProps) {
    return nextProps.show !== this.props.show;
  }

  render() {
    return (
      <React.Fragment>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div
          className={styles.Modal}
          style={{
            transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: this.props.show ? 1 : 0
          }}
        >
          {this.props.children}
        </div>
      </React.Fragment>
    );
  }
}

export default Modal;
