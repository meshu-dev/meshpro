import * as React from 'react';
import styles from './PortfolioItem.module.scss';
import Button from '@mui/material/Button';
import PortfolioItemTitle from '../PortfolioItemTitle/PortfolioItemTitle';
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

  return (
    <div  className={ styles['portfolio-item-wrapper'] }>
      <div key={ entry.id } className={ styles['portfolio-item'] }>
        { imgElement }
        <div className={ styles['portfolio-item-text'] }>
          <PortfolioItemTitle
            entry={ entry }
            showType={ showType } />
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
        showType={ showType }
        onSelectFtn={ onSelectFtn } />
    </div>
  );
}

export default PortfolioItem;
