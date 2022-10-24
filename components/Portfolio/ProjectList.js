import styles from './ProjectList.module.scss';
import Project from './Project';


const ProjectList = ({ projects }) => {
  const projectBlocks = projects.map(
    (project) => {
      return <Project key={ project.id } project={ project } />
    }
  );

  return (
    <div id={ styles['project-list'] }>
      { projectBlocks }
    </div>
  );
}

export default ProjectList;
