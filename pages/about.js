import Layout from '../components/Layout/Layout';
import { getAboutProps } from '../lib/static-props';

export async function getStaticProps() {
  return {
    props: await getAboutProps()
  }
}

const About = ({ about, techList }) => {
  return (
    <Layout pageTitle='About'>
      <div id='about'>
        <h1>About</h1>
        <div id="about-text" dangerouslySetInnerHTML={{ __html: about }} />
        <h2>Technologies</h2>
        <div id="about-techstack-list">
          <div id="about-techstack-msg">Below shows a list of technologies that I have experience 
          in with both work experience and personal projects.</div>
          <div dangerouslySetInnerHTML={{ __html: techList }} />
        </div>
      </div>
    </Layout>
  )
}

export default About;
