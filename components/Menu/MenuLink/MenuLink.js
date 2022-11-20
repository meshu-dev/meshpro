import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './MenuLink.module.scss';

const MenuLink = ({ name, url }) => {
  const router = useRouter();
  const indexUrl = '/projects';  

  let linkClass = styles['menu-link'];
  let link = null;

  if (
    router.asPath.startsWith(url) === true || 
    (router.asPath === '/' && url === indexUrl)
  ) {
    linkClass = `${linkClass} ${styles['menu-link-selected']}`;
    link = (<span>{ name }</span>);
  } else {
    url = url === indexUrl ? '/' : url;
    
    link = (
      <Link href={ url }>
        <a>{ name }</a>
      </Link>
    );
  }

  console.log('PATH', router.asPath, url, indexUrl);

  return (
    <div className={ linkClass }>
      { link }
    </div>
  );
}

export default MenuLink;
