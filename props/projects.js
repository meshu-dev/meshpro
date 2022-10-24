import { apiToken } from '../components/auth';
import { getProjects } from '../pages/api/projects';
import { getTypes } from '../pages/api/types';

export default async () => {
  const token = await apiToken();
  const types = await getTypes(token);
  const projects = await getProjects(token);

  return {
    types: types.data,
    projects: projects.data
  }
}
