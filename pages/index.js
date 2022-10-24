import pageData from './props/projects';
import Layout from '../components/Layout/Layout';
import ProjectList from '../components/Portfolio/ProjectList';

export async function getStaticProps() {
  return {
    props: await pageData()
  }
}

export default ({ types, projects }) => {
  return (
    <Layout>
        <h1>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <ProjectList projects={ projects } />
    </Layout>
  )
}
