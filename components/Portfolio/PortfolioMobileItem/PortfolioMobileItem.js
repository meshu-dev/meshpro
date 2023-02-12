import * as React from 'react';
import styles from './PortfolioMobileItem.module.scss';
import Chip from '@mui/material/Chip';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import PortfolioItemTitle from '../PortfolioItemTitle/PortfolioItemTitle';
import CardMedia from '@mui/material/CardMedia';

const PortfolioMobileItem = ({ entry, showType, onSelectFtn }) => {
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

  let showTypeHtml = '';

  if (showType) {
    showTypeHtml =  <Chip label={ entry.type.name } variant="outlined" />;
  }

  return (
    <Card
      key={ entry.id }
      className={ styles['portfolio-mobile-item'] }
      onClick={ () => onSelectFtn(entry, true) }>
      { imgElement }
      <CardContent>
        <PortfolioItemTitle
          entry={ entry }
          showType={ showType } />
        <p>{ entry.description }</p>
      </CardContent>
    </Card>
  );
}

export default PortfolioMobileItem;
