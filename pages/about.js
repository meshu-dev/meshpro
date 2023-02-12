import Layout from '../components/Layout/Layout';
import Head from 'next/head';
import { getAboutProps } from '../lib/static-props';

export async function getStaticProps() {
  return {
    props: await getAboutProps()
  }
}

const About = ({ about, techList }) => {
  return (
    <Layout pageTitle='About'>
        <Head>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" />
        </Head>
        <div id='about'>
          <h1>About</h1>
          <div id="about-text" dangerouslySetInnerHTML={{ __html: about }} />
          <div>
            <h2>Technologies</h2>
            <div id="about-techstack-list">
              <div id="about-techstack-msg">Below shows a list of technologies that I have experience 
              in with both work experience and personal projects.</div>
              <div dangerouslySetInnerHTML={{ __html: techList }} />
            </div>
          </div>
        </div>
    </Layout>
  )
}

export default About;
