import { useRouter } from 'next/router';
import { getProjectListProps } from '../../app/lib/static-props';
import { getPortfolioListPaths } from '../../app/lib/static-paths';
import ProjectList from '../../app/components/Project/ProjectList';

export async function getStaticProps() {
  return {
    props: await getProjectListProps()
  }
}

export async function getStaticPaths() {
  return {
    paths: await getPortfolioListPaths(),
    fallback: false
  }
}

const Projects = ({ types, projects }) => {
  const router = useRouter();
  const { typeId } = router.query;

  projects = projects.filter(
    project => project.type.id == typeId
  );

  return (
    <ProjectList
      types={ types }
      selectedTypeId={ typeId }
      projects={ projects } />
  )
}
  
export default Projects;
