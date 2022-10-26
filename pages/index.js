import { getProjectListProps } from '../lib/static-props';
import ProjectList from '../components/Project/ProjectList';

export async function getStaticProps() {
  return {
    props: await getProjectListProps()
  }
}

const Projects = ({ types, projects }) => {
  return (
    <ProjectList
      types={ types }
      projects={ projects } />
  )
}

export default Projects;
