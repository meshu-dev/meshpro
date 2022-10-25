import { getPrototypeViewPaths } from '../../../lib/static-paths';
import { getPrototypeViewProps } from '../../../lib/static-props';

export async function getStaticProps(context) {
  let props = {};

  if (context.params && context.params.id) {
    const id = context.params.id;
    props = await getPrototypeViewProps(id);
  }

  return { props };
}

export async function getStaticPaths() {
  return {
    paths: await getPrototypeViewPaths(),
    fallback: false
  }
}

const PrototypeView = ({ prototype }) => {
  console.log(`prototype 2`, prototype);

  return (
    <div>Prototype View!!!</div>
  )
}
  
export default PrototypeView;
