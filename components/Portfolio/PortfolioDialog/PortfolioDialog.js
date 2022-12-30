import * as React from 'react';
import styles from './PortfolioDialog.module.scss';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Chip from '@mui/material/Chip';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';

const PortfolioDialog = ({ entry, isOpen, onCloseFtn }) => {
  if (entry == null) {
    return;
  }

  const technologies = [];
  const repositories = [];

  for (const technology of entry.technologies) {
    technologies.push(
      <Chip
        key={ technology.id }
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
    <Dialog id={ styles['portfolio-dialog'] } open={ isOpen } onClose={ onCloseFtn }>
      <DialogTitle>{ entry.name }</DialogTitle>
      <DialogContent id={ styles['portfolio-dialog-content'] }>
        <p>{ entry.description }</p>
        <div id={ styles['portfolio-dialog-technologies'] }>
          <h2>Technologies</h2>
          <div id={ styles['portfolio-dialog-technologieslist'] }>
            { technologies }
          </div>
        </div>
        <div id={ styles['portfolio-dialog-repositories'] }>
          <h2>Repositories</h2>
          <div>{ repositories }</div>
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={ onCloseFtn }>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default PortfolioDialog;
