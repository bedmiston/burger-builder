import * as React from 'react';
import Modal from '../../components/UI/Modal/Modal';
import { AxiosInstance } from 'axios';

// tslint:disable-next-line:no-any
const withErrorHandler = (WrappedComponent: any, axios: AxiosInstance) => {
  // tslint:disable-next-line:no-any
  return class extends React.Component {
    state = {
      error: {
        message: ''
      }
    };

    componentDidMount() {
      axios.interceptors.request.use(req => {
        this.setState({ error: { message: '' } }, undefined);
        return req;
      });

      axios.interceptors.response.use(
        res => res,
        error => {
          this.setState({ error: error });
        }
      );
    }

    errorConfirmedHandler = () => {
      this.setState({ error: { message: '' } });
    };

    render() {
      return (
        <React.Fragment>
          <Modal
            show={this.state.error.message !== ''}
            modalClosed={this.errorConfirmedHandler}
          >
            {this.state.error.message}
          </Modal>
          <WrappedComponent {...this.props} />
        </React.Fragment>
      );
    }
  };
};

export default withErrorHandler;
