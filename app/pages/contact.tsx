import { getProjectListProps } from '../lib/static-props'

export async function getStaticProps() {
  return {
    props: await getProjectListProps()
  }
}

const Contact = () => {
  return (
    <div>COntact</div>
  )
}

export default Contact
