import { getPrototypeListProps } from '../../lib/static-props';
import PrototypeList from '../../components/Prototype/PrototypeList';

export async function getStaticProps() {
  return {
    props: await getPrototypeListProps()
  }
}

const Prototypes = ({ types, prototypes }) => {
  return (
    <PrototypeList
      types={ types }
      prototypes={ prototypes } />
  )
}

export default Prototypes;
