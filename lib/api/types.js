import { apiGet } from './api-call';

// Currently not in use
export const getTypes = async (token) => {
  const types = await apiGet(
    'types',
    { token }
  );

  return types;
}
