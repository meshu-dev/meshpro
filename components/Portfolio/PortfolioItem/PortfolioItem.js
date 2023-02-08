import * as React from 'react';
import styles from './PortfolioItem.module.scss';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import PortfolioMobileItem from '../PortfolioMobileItem/PortfolioMobileItem';

const PortfolioItem = ({ entry, showType, onSelectFtn }) => {
  let imgElement = '';

  if (entry.images) {
    const image = entry.images[0];

    if (image && image.url) {
      imgElement = (
        <img src={ image.url } />
      );
    }
  }

  let showTypeHtml = '';

  if (showType) {
    showTypeHtml =  <Chip label={ entry.type.name } variant="outlined" />;
  }

  return (
    <div>
      <div key={ entry.id } className={ styles['portfolio-item'] }>
        { imgElement }
        <div className={ styles['portfolio-item-text'] }>
          <h2>{ entry.name }</h2>
          { showTypeHtml }
          <p>{ entry.description }</p>
          <Button
            variant="contained"
            onClick={ () => onSelectFtn(entry) }>
            View more
          </Button>
        </div>
      </div>
      <PortfolioMobileItem
        entry={ entry }
        onSelectFtn={ onSelectFtn } />
    </div>
  );
}

export default PortfolioItem;
