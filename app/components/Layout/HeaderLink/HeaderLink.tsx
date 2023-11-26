import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './HeaderLink.module.scss'

const HeaderLink = ({ name, url }) => {
  const router = useRouter()
  const indexUrl = '/projects'

  let linkClass = styles['header-link']
  let link = null

  if (
    router.asPath.startsWith(url) === true || 
    (router.asPath === '/' && url === indexUrl)
  ) {
    linkClass = `${linkClass} ${styles['header-link-selected']}`
    link = (<span>{ name }</span>);
  } else {
    url = url === indexUrl ? '/' : url
    
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
