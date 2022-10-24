import { useRouter } from 'next/router';
import pageData from '../../props/prototypes';
import PrototypeList from '../../components/Prototype/PrototypeList';

export async function getStaticProps() {
  return {
    props: await pageData()
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
