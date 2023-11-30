import { getProjectListProps } from '../app/lib/static-props';
import ProjectList from '../app/components/Project/ProjectList';

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


/*
import Intro from '../app/components/Intro/Intro'

const Home = () => {
  return (
    <Intro />
  )
}

export default Home */


