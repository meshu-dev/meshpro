import { useRouter } from 'next/router';
import { getPrototypeProps } from '../../lib/static-props';
import PrototypeList from '../../components/Prototype/PrototypeList';

export async function getStaticProps() {
  console.log('GLOBAL!!!', global.globalString);

  return {
    props: await getPrototypeProps()
  }
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { typeId: '1' } },
      { params: { typeId: '2' } }
    ],
    fallback: false
  }
}

const Prototypes = ({ types, prototypes }) => {
    const router = useRouter();
    const { typeId } = router.query;

    console.log('typeId', typeId);

    return (
      <PrototypeList
        types={ types }
        prototypes={ prototypes } />
    )
  }
  
  export default Prototypes;
