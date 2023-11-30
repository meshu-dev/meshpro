import styles from './Intro.module.scss'
import Layout from '../Layout/Layout'
import Link from '@mui/material/Link'
import Button from '@mui/material/Button'

const Intro = () => {
  return (
    <Layout pageTitle='Home'>
      <div>Hello, I'm</div>
      <div>Mesh</div>
      <div>Fullstack Developer</div>
      <div>
        <Link
          href="http://www.google.co.uk"
          target="_blank"
          underline="none">
          <Button variant="contained">
            Download CV
          </Button>
        </Link>
        <Link
          href="http://www.google.co.uk"
          target="_blank"
          underline="none">
          <Button variant="contained">
            Contact Me
          </Button>
        </Link>
      </div>
      <div>
        
      </div>
      <div id={ styles['project-list'] }>
        <div id={ styles['project-list-header'] }>
          <h1>Projects</h1>
        </div>
      </div>
    </Layout>
  )
}

export default Intro
