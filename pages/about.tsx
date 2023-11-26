import Layout from '../app/components/Layout/Layout';
import { getAboutProps } from '../app/lib/static-props';

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
        <div id="about-text"
          dangerouslySetInnerHTML={{ __html: about }} />
        <h2>Technologies</h2>
        <div id="about-techstack-list"
          dangerouslySetInnerHTML={{ __html: techList }} />
      </div>
    </Layout>
  )
}

export default About;
