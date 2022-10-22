//import styles from "./header.module.scss"

import { isLoggedIn, apiLogin } from '../auth';
import { apiGet } from '../apiCall';

export async function getStaticProps() {
  const hasApiAccess = isLoggedIn();

  let posts = {};

  console.log('ddd');

  if (hasApiAccess === false) {
    const result = await apiLogin(
      process.env.API_EMAIL,
      process.env.API_PASSWORD,
    );

    if (result === true) {
      const response = await apiGet(
        'projects'
      );

      console.log('projects', response);
    }
  }

  return {
    props: {
      posts,
      test: 'It works!'
    }
  }
}

export default ({ posts, test }) => (
  <div>PORTFOLIO { test }</div>
)