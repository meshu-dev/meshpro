import styles from './PortfolioList.module.scss';
import PortfolioThumb from '../PortfolioThumb/PortfolioThumb';
import PortfolioItem from '../PortfolioItem/PortfolioItem';

const PortfolioList = ({ link, entries }) => {
  const portfolioThumbs = entries.map(
    (entry) => {
      return <PortfolioItem
                key={ entry.id }
                link={ link }
                entry={ entry } /> 

      /*
      return <PortfolioThumb
                key={ entry.id }
                link={ link }
                entry={ entry } /> */
    }
  );

  return (
    <div id={ styles['portfolio-list'] }>
      { portfolioThumbs }
    </div>
  );
}

export default PortfolioList;
