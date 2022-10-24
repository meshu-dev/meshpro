import pageData from './props/prototypes';
import Layout from '../components/Layout/Layout';
import PortfolioList from '../components/Portfolio/PortfolioList';

export async function getStaticProps() {
  return {
    props: await pageData()
  }
}

export default ({ prototypes }) => {
  return (
    <Layout>
        <h1>Prototypes</h1>
        <p>Experimental and small projects created to try out new technologies and libraries</p>
        <PortfolioList entries={ prototypes } />
    </Layout>
  )
}
