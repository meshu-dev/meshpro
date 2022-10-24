import pageData from '../../props/prototypes';
import PrototypeList from '../../components/Prototype/PrototypeList';

export async function getStaticProps() {
  return {
    props: await pageData()
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
