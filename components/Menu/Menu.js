import styles from "./Menu.module.scss"
import MenuLink from './MenuLink';

const Menu = () => {
    return (
      <div id={ styles.menu }>
        <h1>Portfolio</h1>
        <nav>
          <MenuLink name="Projects" url="/" />
          <MenuLink name="Prototypes" url="/prototypes" />
          <MenuLink name="About" url="/about" />
        </nav>
      </div>
    );
  }
  
  export default Menu;
  