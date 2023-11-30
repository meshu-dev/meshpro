import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './HeaderLink.module.scss'

const HeaderLink = ({ name, url }) => {
  const router = useRouter()

  let linkClass = styles['header-link']
  let link = null

  console.log('url', url, router.asPath)

  if (router.asPath === url) {
    linkClass = `${linkClass} ${styles['header-link-selected']}`
    link = (<span>{ name }</span>);
  } else {
    link = (
      <Link href={ url }>{ name }</Link>
    )
  }

  return (
    <div className={ linkClass }>
      { link }
    </div>
  )
}

export default HeaderLink
