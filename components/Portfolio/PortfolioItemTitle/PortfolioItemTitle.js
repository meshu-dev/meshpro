import * as React from 'react';
import styles from './PortfolioItemTitle.module.scss';
import Chip from '@mui/material/Chip';

const PortfolioItemTitle = ({ entry, showType }) => {
  let showTypeHtml = '';

  if (showType) {
    showTypeHtml =  <Chip label={ entry.type.name } variant="outlined" />;
  }

  return (
    <div className={ styles['portfolio-item-title'] }>
      <h2>{ entry.name }</h2>
      <div className={ styles['portfolio-item-type'] }>{ showTypeHtml }</div>
    </div>
  );
}

export default PortfolioItemTitle;
