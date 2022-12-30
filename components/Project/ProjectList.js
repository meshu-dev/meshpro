import styles from './ProjectList.module.scss';
import Layout from '../Layout/Layout';
import TypeFilter from '../Portfolio/TypeFilter/TypeFilter';
import PortfolioList from '../Portfolio/PortfolioList/PortfolioList';

const ProjectList = ({ types, selectedTypeId, projects }) => {
  return (
    <Layout pageTitle='Projects'>
      <div id={ styles['project-list'] }>
        <div id={ styles['project-list-header'] }>
          <h1>Projects</h1>
          <p>Apps I&apos;ve worked on and use to serve a specific purpose</p>
          <TypeFilter
            link='/projects'
            types={ types }
            selectedTypeId={ selectedTypeId } />
        </div>
        <PortfolioList entries={ projects } />
      </div>
    </Layout>
  )
}

export default ProjectList;
