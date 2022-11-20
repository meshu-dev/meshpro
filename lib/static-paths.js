import { apiToken } from './api/auth';
import { getTypes } from './api/types';
import { getProjects } from './api/projects';
import { getPrototypes } from './api/prototypes';

export const getPortfolioListPaths = async () => {
  const token = await apiToken();
  const types = await getTypes(token);
  const paths = createPaths('typeId', types.data);

  return paths;
}

export const getProjectViewPaths = async () => {
  const token = await apiToken();
  const projects = await getProjects(token);
  const paths = createPaths('id', projects.data);

  return paths;
}

export const getPrototypeViewPaths = async () => {
  const token = await apiToken();
  const prototypes = await getPrototypes(token);
  const paths = createPaths('id', prototypes.data);

  return paths;
}

const createPaths = (key, rows) => {
  const paths = [];

  for (const row of rows) {
    const id = row.id.toString();
    
    const params = {};
    params[key] = id;

    paths.push({
      params
    });
  }
  return paths;
}
