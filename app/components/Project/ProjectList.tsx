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
          <p>Apps to provide a service and showcase technologies</p>
          <TypeFilter
            link='/projects'
            types={ types }
            selectedTypeId={ selectedTypeId } />
        </div>
        <PortfolioList
          entries={ projects }
          showType={ selectedTypeId ? false : true } />
      </div>
    </Layout>
  )
}

export default ProjectList;
