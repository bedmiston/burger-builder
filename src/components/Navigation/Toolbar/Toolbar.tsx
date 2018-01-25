import * as React from 'react';
import * as styles from './Toolbar.css';

interface ToolbarProps {}

const Toolbar: React.SFC<ToolbarProps> = (props) => {
  return (
    <header className={styles.Toolbar}>
      <div>MENU</div>
      <div>LOGO</div>
      <nav>...</nav>
    </header>
  );
};

export default Toolbar;
