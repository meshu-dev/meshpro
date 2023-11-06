import styles from './PortfolioList.module.scss';
import * as React from 'react';
import PortfolioItem from '../PortfolioItem/PortfolioItem';
import PortfolioDialog from '../PortfolioDialog/PortfolioDialog';

const PortfolioList = ({ entries, showType }) => {
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [dialogFullscreen, setDialogFullscreen] = React.useState(false);
  const [entry, setEntry] = React.useState(null);

  const onDialogOpen = (entry, isFullscreen = false) => {
    setEntry(entry);
    setDialogFullscreen(isFullscreen);
    setDialogOpen(true);
  };

  const portfolioItems = entries.map(
    (entry) => {
      return <PortfolioItem
                key={ entry.id }
                entry={ entry }
                showType={ showType }
                onSelectFtn={ onDialogOpen } />
    }
  );

  const onDialogClose = () => {
    setEntry(null);
    setDialogOpen(false);
  };

  return (
    <div id={ styles['portfolio-list'] }>
      <div id={ styles['portfolio-list-entries'] }>
        { portfolioItems }
      </div>
      <PortfolioDialog
        entry={ entry }
        isOpen={ dialogOpen }
        isFullscreen={ dialogFullscreen }
        onCloseFtn={ onDialogClose } />
    </div>
  );
}

export default PortfolioList;
