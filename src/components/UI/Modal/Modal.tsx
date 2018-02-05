import * as React from 'react';

import Backdrop from '../Backdrop/Backdrop';
import styled from 'react-emotion';

const StyledDiv = styled('div')`
  position: fixed;
  z-index: 500;
  background-color: white;
  width: 70%;
  border: 1px solid #ccc;
  box-shadow: 1px 1px 1px black;
  padding: 16px;
  left: 15%;
  top: 30%;
  box-sizing: border-box;
  transition: all 0.3s ease-out;

  @media (min-width: 600px) {
    width: 500px;
    left: calc(50% - 250px);
  }
`;

interface ModalProps {
  show: boolean;
  modalClosed: () => void;
  // tslint:disable-next-line
  children?: any;
}

class Modal extends React.Component<ModalProps> {
  shouldComponentUpdate(nextProps: ModalProps, nextState: ModalProps) {
    return (
      nextProps.show !== this.props.show ||
      nextProps.children !== this.props.children
    );
  }

  render() {
    return (
      <React.Fragment>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <StyledDiv
          style={{
            transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: this.props.show ? 1 : 0
          }}
        >
          {this.props.children}
        </StyledDiv>
      </React.Fragment>
    );
  }
}

export default Modal;
