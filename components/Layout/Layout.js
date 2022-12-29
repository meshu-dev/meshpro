import Head from 'next/head';
import Header from './Header/Header';
import MenuView from '../Menu/MenuView/MenuView';
import MenuMobileView from '../Menu/MenuMobileView/MenuMobileView';

import styles from './Layout.module.scss';

/*
<div id={ styles['menu-wrapper'] }>
  <MenuView />
</div>
<div id={ styles['menu-mobile-wrapper'] }>
  <MenuMobileView />
</div> */

const Layout = ({ pageTitle, children }) => {
  return (
    <div id={ styles.layout }>
      <Head>
        <title>Portfolio { pageTitle ? `- ${pageTitle}` : '' }</title>
        <link href='https://fonts.googleapis.com/css?family=Raleway' rel='stylesheet' />
      </Head>
      <Header />
      <main id={ styles['layout-content'] }>
        { children }
      </main>
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
