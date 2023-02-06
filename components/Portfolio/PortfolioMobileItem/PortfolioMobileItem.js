import * as React from 'react';
import styles from './PortfolioMobileItem.module.scss';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

const PortfolioMobileItem = ({ entry, onSelectFtn }) => {
  let imgElement = '';

  if (entry.images) {
    const image = entry.images[0];

    if (image && image.url) {
      imgElement = (
        <CardMedia
          component="img"
          image={ image.url }
          alt={ entry.name } />
      );
    }
  }

  return (
    <Card
      key={ entry.id }
      className={ styles['portfolio-mobile-item'] }
      onClick={ () => onSelectFtn(entry, true) }>
      { imgElement }
      <CardContent>
        <h2>{ entry.name }</h2>
        <p>{ entry.description }</p>
      </CardContent>
    </Card>
  );
}

export default PortfolioMobileItem;
