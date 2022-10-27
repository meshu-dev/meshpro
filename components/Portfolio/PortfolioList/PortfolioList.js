import styles from './PortfolioList.module.scss';
import PortfolioThumb from '../PortfolioThumb/PortfolioThumb';

const PortfolioList = ({ link, entries }) => {
  const portfolioThumbs = entries.map(
    (entry) => {
      return <PortfolioThumb
                key={ entry.id }
                link={ link }
                entry={ entry } />
    }
  );

  return (
    <div id={ styles['portfolio-list'] }>
      { portfolioThumbs }
    </div>
  );
}

export default PortfolioList;
