import { getPrototypeViewPaths } from '../../../lib/static-paths';
import { getPrototypeViewProps } from '../../../lib/static-props';
import PortfolioView from '../../../components/Portfolio/PortfolioView/PortfolioView';

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
  return (
    <PortfolioView
      entry={ prototype } />
  )
}
  
export default PrototypeView;
