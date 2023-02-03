import styles from './PrototypeList.module.scss';
import Layout from '../Layout/Layout';
import PortfolioList from '../Portfolio/PortfolioList/PortfolioList';

const PrototypeList = ({ types, selectedTypeId, prototypes }) => {
  return (
    <Layout pageTitle='Prototypes'>
      <div id={ styles['prototype-list'] }>
        <div id={ styles['prototype-list-header'] }>
          <h1>Prototypes</h1>
          <p>Experimental and small projects created to try out new technologies and libraries</p>
        </div>
        <PortfolioList entries={ prototypes } />
      </div>
    </Layout>
  )
}

export default PrototypeList;
