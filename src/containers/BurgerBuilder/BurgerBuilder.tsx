import * as React from 'react';
import Burger from '../../components/Burger/Burger';
export interface BurgerBuilderProps {}

class BurgerBuilder extends React.Component<BurgerBuilderProps> {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    }
  };

  render() {
    return (
      <React.Fragment>
        <Burger ingredients={this.state.ingredients} />
        <div>Build Controls</div>
      </React.Fragment>
    );
  }
}

export default BurgerBuilder;
