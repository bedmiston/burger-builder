import * as React from 'react';
import * as styles from './NavigationItem.css';

interface NavigationItemProps {
  link: string;
  active: boolean;
}

const NavigationItem: React.SFC<NavigationItemProps> = (props) => (
  <li className={styles.NavigationItem}>
    <a href={props.link} className={props.active ? styles.active : undefined}>
      {props.children}
    </a>
  </li>
);

export default NavigationItem;
