import * as React from 'react';
import * as styles from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

interface NavigationItemsProps {}

const NavigationItems: React.SFC<NavigationItemsProps> = (props) => (
  <ul className={styles.NavigationItems}>
    <NavigationItem link="/" active={true}>
      Burger Builder
    </NavigationItem>
    <NavigationItem link="/" active={false}>
      Checkout
    </NavigationItem>
  </ul>
);

export default NavigationItems;
