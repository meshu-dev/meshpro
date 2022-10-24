import pageData from './../props/projects';
import Layout from '../components/Layout/Layout';
import TypeFilter from '../components/Portfolio/TypeFilter';
import PortfolioList from '../components/Portfolio/PortfolioList';

export async function getStaticProps() {
  return {
    props: await pageData()
  }
}

const Projects = ({ types, projects }) => {
  return (
    <Layout>
        <h1>Projects</h1>
        <p>Apps I&apos;ve worked on and use to serve a specific purpose</p>
        <TypeFilter types={ types } />
        <PortfolioList entries={ projects } />
    </Layout>
  )
}

export default Projects;
