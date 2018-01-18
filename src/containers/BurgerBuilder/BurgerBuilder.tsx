import * as React from 'react';
import Burger from '../../components/Burger/Burger';
export interface BurgerBuilderProps {}

class BurgerBuilder extends React.Component<BurgerBuilderProps> {
  render() {
    return (
      <React.Fragment>
        <Burger />
        <div>Build Controls</div>
      </React.Fragment>
    );
  }
}

export default BurgerBuilder;
