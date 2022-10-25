import { apiGet } from './api-call';

export const getTypes = async (token) => {
  const types = await apiGet(
    'types',
    { token }
  );

  return types;
}
