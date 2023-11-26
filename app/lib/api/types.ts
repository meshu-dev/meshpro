import { apiGet } from './api-call';

export const getTypes = async (token: string) => {
  const types = await apiGet(
    'types',
    { token }
  )

  console.log('TYPES', types)

  return types
}
