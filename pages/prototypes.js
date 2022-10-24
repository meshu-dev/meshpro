import pageData from './props/prototypes';
import Layout from '../components/Layout/Layout';
import ProjectList from '../components/Portfolio/ProjectList';

export async function getStaticProps() {
  return {
    props: await pageData()
  }
}

export default ({ prototypes }) => {
  return (
    <Layout>
        <h1>Prototypes</h1>
        <ProjectList projects={ prototypes } />
    </Layout>
  )
}
