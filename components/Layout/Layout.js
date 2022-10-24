import Menu from '../Menu/Menu';

import styles from './Layout.module.scss'

const Layout = (props) => {
  return (
    <div className={ styles.container }>
      <div id={ styles['menu-wrapper'] }>
        <Menu />
      </div>
      <main>
        {props.children}
      </main>
    </div>
  )
}

export default Layout;
