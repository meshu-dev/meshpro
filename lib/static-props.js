import { apiToken } from './api/auth';
import { getProjects, getProjectTypes, getProject } from './api/projects';
import { getPrototypes, getPrototypeTypes, getPrototype } from './api/prototypes';

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

export const getProjectViewProps = async (id) => {
  const token = await apiToken();
  const project = await getProject(token, id);

  return {
    project: project.data
  }
}

export const getPrototypeViewProps = async (id) => {
  const token = await apiToken();
  const prototype = await getPrototype(token, id);

  return {
    prototype: prototype.data
  }
}
