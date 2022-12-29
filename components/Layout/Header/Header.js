import HeaderLink from '../HeaderLink/HeaderLink';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header id={ styles['header'] }>
      <h1>Mesh&apos;s Portfolio</h1>
      <nav>
        <HeaderLink name="Projects" url="/projects" />
        <HeaderLink name="Prototypes" url="/prototypes" />
        <HeaderLink name="About" url="/about" />
      </nav>
    </header>
  )
}

export default Header;
