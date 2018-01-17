import * as React from 'react';

export interface BurgerBuilderProps {}

class BurgerBuilder extends React.Component<BurgerBuilderProps> {
  render() {
    return (
      <React.Fragment>
        <div>Burger</div>
        <div>Build Controls</div>
      </React.Fragment>
    );
  }
}

export default BurgerBuilder;
