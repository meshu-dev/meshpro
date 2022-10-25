import { useRouter } from 'next/router';
import { getProjectProps } from '../../lib/static-props';
import { getPortfolioPaths } from '../../lib/static-paths';
import ProjectList from '../components/Project/ProjectList';

export async function getStaticProps() {
  return {
    props: await getProjectProps()
  }
}

export async function getStaticPaths() {
  return {
    paths: await getPortfolioPaths(),
    fallback: false
  }
}

const Projects = ({ types, projects }) => {
  const router = useRouter();
  const { typeId } = router.query;

  return (
    <ProjectList
      types={ types }
      selectedTypeId={ typeId }
      projects={ projects } />
  )
}
  
export default Projects;
