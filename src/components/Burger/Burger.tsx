import * as React from 'react';
import * as styles from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

interface IngredientProps {
  salad?: number;
  cheese?: number;
  meat?: number;
  bacon: number;
}

interface BurgerProps {
  ingredients: IngredientProps;
}

const Burger: React.SFC<BurgerProps> = (props) => {
  let transformedIngredients: JSX.Element[] | null = Object.keys(
    props.ingredients
  )
    .map((igKey) => {
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
    <div className={styles.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
