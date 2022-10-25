import styles from './PortfolioList.module.scss';
import PortfolioThumb from '../PortfolioThumb';

const PortfolioList = ({ entries }) => {
  const portfolioThumbs = entries.map(
    (entry) => {
      return <PortfolioThumb key={ entry.id } project={ entry } />
    }
  );

  return (
    <div id={ styles['portfolio-list'] }>
      { portfolioThumbs }
    </div>
  );
}

export default PortfolioList;
