import { apiToken } from '../components/auth';
import { getPrototypes } from '../pages/api/prototypes';
import { getTypes } from '../pages/api/types';

export default async () => {
  const token = await apiToken();
  const types = await getTypes(token);
  const prototypes = await getPrototypes(token);

  return {
    types: types.data,
    prototypes: prototypes.data
  }
}
