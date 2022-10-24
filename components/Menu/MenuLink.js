import Link from 'next/link';

const MenuLink = ({ name, url }) => {
  return (
    <Link href={ url }>
      <a>{ name }</a>
    </Link>
  );
}

export default MenuLink;
  