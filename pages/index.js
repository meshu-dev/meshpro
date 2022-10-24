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
  const types = await getTypes(token);
  const projects = await getProjects(token);

  return {
    props: {
      types: types.data,
      projects: projects.data,
      test: 'It works!'
    }
  }
}

export default ({ types, projects, test }) => {
  return (
    <Layout>
        <h1>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <ProjectList projects={ projects } />
    </Layout>
  )
}
