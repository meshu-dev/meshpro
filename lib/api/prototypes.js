import { apiGet } from './api-call';

export const getPrototypes = async (token) => {
  const prototypes = await apiGet(
    'prototypes',
    { token }
  );

  return prototypes;
}

export const getPrototypeTypes = async (token) => {
  const types = await apiGet(
    `prototypes/types`,
    { token }
  );

  return types;
}

export const getPrototype = async (token, id) => {
  const prototype = await apiGet(
    `prototypes/${id}`,
    { token }
  );

  return prototype;
}
