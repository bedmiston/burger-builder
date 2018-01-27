import * as React from 'react';

interface DrawerToggleProps {
  clicked: () => void;
}

const DrawerToggle: React.SFC<DrawerToggleProps> = (props) => {
  return <div onClick={props.clicked}>MENU</div>;
};

export default DrawerToggle;
