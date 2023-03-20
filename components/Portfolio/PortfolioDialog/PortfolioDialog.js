import * as React from 'react';
import styles from './PortfolioDialog.module.scss';
import Dialog from '@mui/material/Dialog';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Chip from '@mui/material/Chip';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';

const PortfolioDialog = ({ entry, isOpen, isFullscreen, onCloseFtn }) => {
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
      <div key={ repository['name'] } className={ styles['portfolio-dialog-repositorieslink'] }>
        <a href={ repository['url'] } target="_blank" rel="noreferrer">
          { repository['name'] }
        </a>
      </div>
    );
  }

  return (
    <Dialog
      id={ styles['portfolio-dialog'] }
      open={ isOpen }
      onClose={ onCloseFtn }
      fullScreen={ isFullscreen }>
      <AppBar id={ styles['portfolio-dialog-header'] }>
        <IconButton
          edge="start"
          color="inherit"
          onClick={ onCloseFtn }
          aria-label="close">
          <CloseIcon />
        </IconButton>
        <DialogTitle>{ entry.name }</DialogTitle>
      </AppBar>
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
        <Link href={ entry.url } target="_blank" underline="none">
          <Button variant="contained">
            Visit site
          </Button>
        </Link>
      </DialogContent>
    </Dialog>
  );
}

export default PortfolioDialog;
