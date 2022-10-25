import { useRouter } from 'next/router';
import { getPortfolioPaths } from '../../lib/static-paths';

export async function getStaticPaths() {
  return {
    paths: await getPortfolioPaths(),
    fallback: false
  }
}

const PrototypeView = () => {
  const router = useRouter();
  const { id } = router.query;

  console.log(`ViewId: ${id}`);

  return (
    <div>Prototype View!!!</div>
  )
}
  
export default PrototypeView;
