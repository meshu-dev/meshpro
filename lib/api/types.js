import { apiGet } from './apiCall';

export const getTypes = async (token) => {
  const types = await apiGet(
    'types',
    { token }
  );

  // console.log('types', types);

  return types;
}
