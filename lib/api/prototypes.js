import { apiGet } from './api-call';

export const getPrototypes = async (token) => {
  const prototypes = await apiGet(
    'prototypes',
    { token }
  );

  // console.log('prototypes', prototypes);

  return prototypes;
}
