import pageData from './../props/projects';
import ProjectList from '../components/Project/ProjectList';

export async function getStaticProps() {
  return {
    props: await pageData()
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
