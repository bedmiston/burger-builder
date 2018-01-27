import * as React from 'react';

import * as styles from './Logo.css';

const burgerLogo = require('../../assets/images/burger-logo.png');

interface LogoProps {}

const Logo: React.SFC<LogoProps> = (props) => {
  return (
    <div className={styles.Logo}>
      <img src={burgerLogo} alt="MyBurger" />
    </div>
  );
};

export default Logo;
