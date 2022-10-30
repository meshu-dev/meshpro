import styles from './MenuView.module.scss';
import MenuLink from '../MenuLink/MenuLink';

const MenuView = () => {
  return (
    <div id={ styles.menu }>
      <h1>Mesh&apos;s<br />Portfolio</h1>
      <nav>
        <MenuLink name="Projects" url="/projects" />
        <MenuLink name="Prototypes" url="/prototypes" />
        <MenuLink name="About" url="/about" />
      </nav>
    </div>
  );
}
  
export default MenuView;
  