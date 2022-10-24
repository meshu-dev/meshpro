import { apiToken } from '../../components/auth';
import { getProjects } from '../api/projects';
import { getTypes } from '../api/types';

export default async () => {
  const token = await apiToken();
  const types = await getTypes(token);
  const projects = await getProjects(token);

  return {
    types: types.data,
    projects: projects.data
  }
}
