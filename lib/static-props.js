import { apiToken } from './api/auth';
import { getProjects, getProjectTypes } from './api/projects';
import { getPrototypes, getPrototypeTypes } from './api/prototypes';
import { getAbout } from './api/about';

export const getProjectListProps = async () => {
  const token = await apiToken();
  const types = await getProjectTypes(token);
  const projects = await getProjects(token);

  return {
    types: types.data,
    projects: projects.data
  }
}

export const getPrototypeListProps = async () => {
  const token = await apiToken();
  const types = await getPrototypeTypes(token);
  const prototypes = await getPrototypes(token);

  return {
    types: types.data,
    prototypes: prototypes.data
  }
}

export const getAboutProps = async () => {
  const token = await apiToken();
  const about = await getAbout(token);

  return {
    about: about.data
  }
}
