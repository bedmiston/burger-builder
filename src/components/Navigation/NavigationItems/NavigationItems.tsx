import * as React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import * as styles from './NavigationItems.css';

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
