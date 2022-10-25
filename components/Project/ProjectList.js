import Layout from '../Layout/Layout';
import TypeFilter from '../Portfolio/TypeFilter';
import PortfolioList from '../Portfolio/PortfolioList';

const ProjectList = ({ types, selectedTypeId, projects }) => {
  return (
    <Layout>
        <h1>Projects</h1>
        <p>Apps I&apos;ve worked on and use to serve a specific purpose</p>
        <TypeFilter
          link='/projects'
          types={ types }
          selectedTypeId={ selectedTypeId } />
        <PortfolioList
          entries={ projects } />
    </Layout>
  )
}

export default ProjectList;
