import { useRouter } from 'next/router';
import { getProjectViewPaths } from '../../../lib/static-paths';
import { getProjectViewProps } from '../../../lib/static-props';

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
  console.log(`project`, project);

  return (
    <div>Project View!!!</div>
  )
}
  
export default ProjectView;
