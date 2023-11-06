import { useRouter } from 'next/router';
import { getPrototypeListProps } from '../../lib/static-props';
import { getPortfolioListPaths } from '../../lib/static-paths';
import PrototypeList from '../../components/Prototype/PrototypeList';

export async function getStaticProps() {
  return {
    props: await getPrototypeListProps()
  }
}

export async function getStaticPaths() {
  return {
    paths: await getPortfolioListPaths(),
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
