import { apiGet } from './apiCall';

export const getPrototypes = async (token) => {
  const prototypes = await apiGet(
    'prototypes',
    { token }
  );

  // console.log('prototypes', prototypes);

  return prototypes;
}
