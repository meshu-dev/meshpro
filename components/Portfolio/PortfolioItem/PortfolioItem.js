import * as React from 'react';
import styles from './PortfolioItem.module.scss';
import Button from '@mui/material/Button';

const PortfolioItem = ({ link, entry }) => {
  let imgElement = '';

  if (entry.images) {
    const image = entry.images[0];

    if (image.thumb && image.thumb.url) {
      imgElement = (
        <img src={ image.thumb.url } />
      );
    }
  }

  return (
    <div key={ entry.id } className={ styles['portfolio-item'] }>
      { imgElement }
      <div className={ styles['portfolio-item-text'] }>
        <h2>{ entry.name }</h2>
        <p>{ entry.description }</p>
        <Button
          variant="contained">
          View more
        </Button>
      </div>
    </div>
  );
}

export default PortfolioItem;
