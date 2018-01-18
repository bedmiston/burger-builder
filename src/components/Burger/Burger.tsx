import * as React from 'react';
import * as styles from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

interface BurgerProps {}

const Burger: React.SFC<BurgerProps> = props => {
  return (
    <div className={styles.Burger}>
      <BurgerIngredient type="bread-top" />
      <BurgerIngredient type="cheese" />
      <BurgerIngredient type="meat" />
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
