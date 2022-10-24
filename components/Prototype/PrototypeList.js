import Layout from '../Layout/Layout';
import PortfolioList from '../Portfolio/PortfolioList';

const PrototypeList = ({ types, prototypes }) => {
  return (
    <Layout>
        <h1>Prototypes</h1>
        <p>Experimental and small projects created to try out new technologies and libraries</p>
        <PortfolioList entries={ prototypes } />
    </Layout>
  )
}

export default PrototypeList;
