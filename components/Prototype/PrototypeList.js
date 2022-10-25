import styles from './PrototypeList.module.scss';
import Layout from '../Layout/Layout';
import TypeFilter from '../Portfolio/TypeFilter';
import PortfolioList from '../Portfolio/PortfolioList';

const PrototypeList = ({ types, selectedTypeId, prototypes }) => {
  return (
    <Layout>
      <div id={ styles['prototype-list'] }>
        <h1>Prototypes</h1>
        <p>Experimental and small projects created to try out new technologies and libraries</p>
        <TypeFilter
          link='/prototypes'
          types={ types }
          selectedTypeId={ selectedTypeId } />
        <PortfolioList
          entries={ prototypes } />
      </div>
    </Layout>
  )
}

export default PrototypeList;
