import { getProjectListProps } from '../lib/static-props'
import Intro from '../../app/components/Intro/Intro'

export async function getStaticProps() {
  return {
    props: await getProjectListProps()
  }
}

const Home = () => {
  return (
    <Intro />
  )
}

export default Home
