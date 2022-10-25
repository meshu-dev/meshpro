import { useRouter } from 'next/router';
import { getPortfolioPaths } from '../../lib/static-paths';

export async function getStaticPaths() {
  return {
    paths: await getPortfolioPaths(),
    fallback: false
  }
}

const ProjectView = () => {
  const router = useRouter();
  const { id } = router.query;

  console.log(`ViewId: ${id}`);

  return (
    <div>Project View!!!</div>
  )
}
  
export default ProjectView;
