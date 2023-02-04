import Layout from '../components/Layout/Layout';
import Head from 'next/head';
import Chip from '@mui/material/Chip';
import { getAboutProps } from '../lib/static-props';
import PHPImage from '../components/Image/PHPImage';
import NodeImage from '../components/Image/NodeImage';
import BrowserImage from '../components/Image/BrowserImage';

export async function getStaticProps() {
  return {
    props: await getAboutProps()
  }
}

const About = (about) => {
  return (
    <Layout pageTitle='About'>
        <Head>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" />
        </Head>
        <div id='about'>
          <h1>About</h1>
          <p>{ about.text }</p>
          <div>
            <h2>Technologies</h2>
            <div id='about-techstack-list'>
              <div className='about-techstack'>
                <PHPImage />
                <div className="about-techstack-items">
                  <Chip label="Laravel" />
                  <Chip label="Symfony" />
                  <Chip label="MySQL" />
                </div>
              </div>
              <div className='about-techstack'>
                <NodeImage />
                <div className="about-techstack-items">
                  <Chip label="Express.js" />
                  <Chip label="MongoDB" />
                  <Chip label="11ty" />
                </div>
              </div>
              <div className='about-techstack'>
                <div className='about-techstack-iconwrapper'>
                  <BrowserImage />
                </div>
                <div className="about-techstack-items">
                  <Chip label="React" />
                  <Chip label="Next.js" />
                  <Chip label="Angular" />
                  <Chip label="Vue.js" />
                  <Chip label="Nuxt.js" />
                  <Chip label="HTML 5" />
                  <Chip label="CSS 3" />
                  <Chip label="SASS" />
                  <Chip label="JavaScript" />
                </div>
              </div>
            </div>
          </div>
        </div>
    </Layout>
  )
}

export default About;
