import Head from 'next/head';
import MenuView from '../Menu/MenuView/MenuView';
import MenuMobileView from '../Menu/MenuMobileView/MenuMobileView';

import styles from './Layout.module.scss';

const Layout = (props) => {
  return (
    <div id={ styles.layout }>
      <Head>
        <title>My page title</title>
        <link href='https://fonts.googleapis.com/css?family=Raleway' rel='stylesheet' />
      </Head>
      <div id={ styles['layout-content'] }>
        <div id={ styles['menu-wrapper'] }>
          <MenuView />
        </div>
        <div id={ styles['menu-mobile-wrapper'] }>
          <MenuMobileView />
        </div>
        <main>
          { props.children }
        </main>
      </div>
      <footer>
        <div id={ styles['footer-divider'] }></div>
        <p>
          Built and generated with&nbsp;
          <a href="https://nextjs.org">Next.js</a>
        </p>
      </footer>
    </div>
  )
}

export default Layout;
