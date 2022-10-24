import { getPrototypeProps } from '../../lib/static-props';
import PrototypeList from '../../components/Prototype/PrototypeList';

export async function getStaticProps() {
  return {
    props: await getPrototypeProps()
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
