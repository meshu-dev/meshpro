import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Layout from '../components/Layout/Layout';

//import Menu from '../components/Menu/Menu';
import ProjectList from '../components/Portfolio/ProjectList';

import { apiToken } from '../components/auth';
import { getProjects } from './api/projects';
import { getTypes } from './api/types';

export async function getStaticProps() {
  const token = await apiToken();
  //const projects = await getProjects(token);

  return {
    props: {
      about: []
    }
  }
}

export default ({ about }) => {
  return (
    <Layout>
        <h1>About</h1>
    </Layout>
  )
}
