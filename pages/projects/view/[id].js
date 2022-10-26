import { getProjectViewPaths } from '../../../lib/static-paths';
import { getProjectViewProps } from '../../../lib/static-props';
import PortfolioView from '../../../components/Portfolio/PortfolioView/PortfolioView';

export async function getStaticProps(context) {
  let props = {};

  if (context.params && context.params.id) {
    const id = context.params.id;
    props = await getProjectViewProps(id);
  }

  return { props };
}

export async function getStaticPaths() {
  return {
    paths: await getProjectViewPaths(),
    fallback: false
  }
}

const ProjectView = ({ project }) => {
  return (
    <PortfolioView
      entry={ project } />
  )
}
  
export default ProjectView;
