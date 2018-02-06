import * as React from 'react';
import styled from 'styled-components';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const StyledDiv = styled('div')`
  width: 100%;
  margin: auto;
  height: 250px;
  overflow: scroll;
  text-align: center;
  font-weight: bold;
  font-size: 1.2rem;

  @media (min-width: 500px) and (min-height: 400px) {
    width: 350px;
    height: 300px;
  }

  @media (min-width: 500px) and (min-height: 401px) {
    width: 450px;
    height: 400px;
  }

  @media (min-width: 1000px) and (min-height: 700px) {
    width: 700px;
    height: 600px;
  }
`;
interface IngredientProps {
  salad?: number;
  cheese?: number;
  meat?: number;
  bacon: number;
}

interface BurgerProps {
  ingredients: IngredientProps;
}

const Burger: React.SFC<BurgerProps> = props => {
  let transformedIngredients: JSX.Element[] | null = Object.keys(
    props.ingredients
  )
    .map(igKey => {
      return [...Array(props.ingredients[igKey]).fill(<React.Fragment />)].map(
        (_, i) => {
          return <BurgerIngredient key={igKey + i} type={igKey} />;
        }
      );
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []); // tslint:disable-line
  if (transformedIngredients.length === 0) {
    transformedIngredients = [<p key="0">Please start adding ingredients!</p>];
  }

  return (
    <StyledDiv>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </StyledDiv>
  );
};

export default Burger;
