import * as React from 'react';
import * as styles from './Toolbar.css';
import Logo from '../../Logo/Logo';

interface ToolbarProps {}

const Toolbar: React.SFC<ToolbarProps> = (props) => {
  return (
    <header className={styles.Toolbar}>
      <div>MENU</div>
      <Logo />
      <nav>...</nav>
    </header>
  );
};

export default Toolbar;
