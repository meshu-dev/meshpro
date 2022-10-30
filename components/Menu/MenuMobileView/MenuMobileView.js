import styles from './MenuMobileView.module.scss';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import MenuLink from '../MenuLink/MenuLink';

const MenuMobileView = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const showMenu = () => {
    setIsMenuVisible(true);
  };

  const hideMenu = () => {
    setIsMenuVisible(false);
  };

  return (
    <div id={ styles['menu-mobile'] }>
      <Button onClick={ showMenu }>
        <MenuIcon
          id={ styles['menu-mobile-btn'] }
          fontSize='large' />
      </Button>
      <h1>Mesh&apos;s Portfolio</h1>
      <Drawer
        anchor='left'
        open={ isMenuVisible }
        onClose={ hideMenu }
      >
        <nav id={ styles['menu-mobile-menu'] }>
          <MenuLink name="Projects" url="/projects" />
          <MenuLink name="Prototypes" url="/prototypes" />
          <MenuLink name="About" url="/about" />
        </nav>
      </Drawer>
    </div>
  );
}
  
export default MenuMobileView;
  