import { apiToken } from './api/auth';
import { getProjects } from './api/projects';
import { getPrototypes } from './api/prototypes';
import { getTypes } from './api/types';

export const getProjectProps = async () => {
  const token = await apiToken();
  const types = await getTypes(token);
  const projects = await getProjects(token);

  return {
    types: types.data,
    projects: projects.data
  }
}

export const getPrototypeProps = async () => {
  const token = await apiToken();
  const types = await getTypes(token);
  const prototypes = await getPrototypes(token);

  return {
    types: types.data,
    prototypes: prototypes.data
  }
}
