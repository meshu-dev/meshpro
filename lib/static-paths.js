import { apiToken } from './api/auth';
import { getTypes } from './api/types';

export const getPortfolioPaths = async () => {
  const token = await apiToken();
  const paths = [];

  let types = await getTypes(token);
  types = types.data;

  for (const type of types) {
    const typeId = type.id.toString();

    paths.push({
      params: { typeId }
    });
  }
  console.log('paths', paths);
  return paths;
}
