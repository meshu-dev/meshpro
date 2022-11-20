import styles from './PortfolioView.module.scss';
//import Image from 'next/image';
import Chip from '@mui/material/Chip';
import Layout from '../../Layout/Layout';

const PortfolioView = ({ entry }) => {
  let image = null;
  let imageTag = null;

  if (entry.images.length > 0) {
    image = entry.images[0];
    imageTag = (
      <img src={ image.url } alt={ image.name } />
    );
  
    /*
    imageTag = (
      <Image
        src={ image.url }
        alt='swear'
        width='600'
        height='300' />
    ); */
  }

  const technologies = [];
  const repositories = [];

  for (const technology of entry.technologies) {
    technologies.push(
      <Chip
        key={ technology.id }
        color="primary"
        label={ technology.name } />
    );
  }

  for (const repository of entry.repositories) {
    repositories.push(
      <div className={ styles['portfolio-repositories-link'] }>
        <a href={ repository['url'] } target="_blank" rel="noreferrer">
          { repository['name'] }
        </a>
      </div>
    );
  }

  return (
    <Layout pageTitle={ entry.name }>
      <div id={ styles['portfolio-view'] }>
        <div className={ styles['portfolio-view-column'] }>
          <h1>{ entry.name }</h1>
          <p>{ entry.description }</p>
          <div id={ styles['portfolio-technologies'] }>
            <h2>Technologies</h2>
            <div id={ styles['portfolio-technologies-list'] }>
              { technologies }
            </div>
          </div>
          <div id={ styles['portfolio-repositories'] }>
            <h2>Repositories</h2>
            <div>
              { repositories }
            </div>
          </div>
        </div>
        <div id={ styles['portfolio-view-imgwrapper'] }
             className={ styles['portfolio-view-column'] }>
          { imageTag }
        </div>
      </div>
    </Layout>
  );
}

export default PortfolioView;
