import Header from './Header';
import Footer from './Footer';

import Menu from '../Menu/Menu';

import styles from './Layout.module.scss'

const Layout = (props) => {
  return (
    <div className={styles.container}>
      <Menu />
      <main>
        {props.children}
      </main>
    </div>
  )
}

export default Layout;
