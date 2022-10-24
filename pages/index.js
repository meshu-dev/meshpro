import pageData from './props/projects';
import Layout from '../components/Layout/Layout';
import PortfolioList from '../components/Portfolio/PortfolioList';

export async function getStaticProps() {
  return {
    props: await pageData()
  }
}

export default ({ types, projects }) => {
  return (
    <Layout>
        <h1>Projects</h1>
        <p>Apps I've worked on and use to serve a specific purpose</p>
        <PortfolioList entries={ projects } />
    </Layout>
  )
}
