import { useRouter } from 'next/router';
import { getPrototypeProps } from '../../lib/static-props';
import { getPortfolioPaths } from '../../lib/static-paths';
import PrototypeList from '../../components/Prototype/PrototypeList';

export async function getStaticProps() {
  return {
    props: await getPrototypeProps()
  }
}

export async function getStaticPaths() {
  return {
    paths: await getPortfolioPaths(),
    fallback: false
  }
}

const Prototypes = ({ types, prototypes }) => {
  const router = useRouter();
  const { typeId } = router.query;

  prototypes = prototypes.filter(
    prototype => prototype.type.id == typeId
  );

  return (
    <PrototypeList
      types={ types }
      selectedTypeId={ typeId }
      prototypes={ prototypes } />
  )
}

export default Prototypes;
