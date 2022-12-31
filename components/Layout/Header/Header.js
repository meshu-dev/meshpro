import * as React from 'react';
import Link from 'next/link';
import HeaderLink from '../HeaderLink/HeaderLink';
import styles from './Header.module.scss';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

const Header = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const navLinks = [
    { label: "Projects", link: "/" },
    { label: "Prototypes", link: "/prototypes" },
    { label: "About", link: "/about" }
  ];

  const toggleMenu = () => {
    setMenuOpen(menuOpen ? false : true);
  };

  return (
    <header id={ styles['header'] }>
      <h1>Mesh&apos;s Portfolio</h1>
      <nav>
        { navLinks.map((data, index) => (
          <HeaderLink
            key={ `header-link-${index + 1}` }
            name={ data['label'] }
            url={ data['link'] === '/' ? '/projects' : data['link'] } />
        )) }
      </nav>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
        onClick={ toggleMenu }>
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="top"
        open={ menuOpen }
        onClose={ toggleMenu }>
        <List>
          { navLinks.map((data, index) => (
            <ListItem key={ `header-menuitem-${index + 1}` }>
              <Link href={ data['link'] }>
                <ListItemButton>
                  <ListItemText primary={ data['label'] } />
                </ListItemButton>
              </Link>
            </ListItem>
          )) }
        </List>
      </Drawer>
    </header>
  )
}

export default Header;
