import Layout from '../components/Layout/Layout';
import Head from 'next/head';
import Chip from '@mui/material/Chip';
import { getAboutProps } from '../lib/static-props';

export async function getStaticProps() {
  return {
    props: await getAboutProps()
  }
}

const About = ({ about, langList }) => {
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
              <div dangerouslySetInnerHTML={{ __html: langList }} />
            </div>
          </div>
        </div>
    </Layout>
  )
}

export default About;
