import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './HeaderLink.module.scss';

const HeaderLink = ({ name, url }) => {
  const router = useRouter();
  const indexUrl = '/';  

  let linkClass = styles['header-link'];
  let link = null;

  if (router.asPath === url) {
    linkClass = `${linkClass} ${styles['header-link-selected']}`;
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

export default HeaderLink;
