import { apiGet } from './apiCall';

export const getProjects = async (token) => {
  const projects = await apiGet(
    'projects',
    { token }
  );

  // console.log('projects', projects);

  return projects;
}
