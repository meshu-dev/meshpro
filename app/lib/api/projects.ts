import { apiGet } from './api-call';

export const getProjects = async (token) => {
  const projects = await apiGet(
    'projects',
    { token }
  );

  return projects;
}

export const getProjectTypes = async (token) => {
  const types = await apiGet(
    `projects/types`,
    { token }
  );

  return types;
}

export const getProject = async (token, id) => {
  const project = await apiGet(
    `projects/${id}`,
    { token }
  );

  return project;
}
