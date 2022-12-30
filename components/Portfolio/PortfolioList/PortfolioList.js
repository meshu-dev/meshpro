import styles from './PortfolioList.module.scss';
import * as React from 'react';
import PortfolioItem from '../PortfolioItem/PortfolioItem';
import PortfolioDialog from '../PortfolioDialog/PortfolioDialog';

const PortfolioList = ({ entries }) => {
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [entry, setEntry] = React.useState(null);

  const onDialogOpen = (entry) => {
    setEntry(entry);
    setDialogOpen(true);
  };

  const portfolioThumbs = entries.map(
    (entry) => {
      return <PortfolioItem
                key={ entry.id }
                entry={ entry }
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
        { portfolioThumbs }
      </div>
      <PortfolioDialog
        entry={ entry }
        isOpen={ dialogOpen }
        onCloseFtn={ onDialogClose } />
    </div>
  );
}

export default PortfolioList;
