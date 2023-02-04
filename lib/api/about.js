import { apiGet } from './api-call';

export const getAbout = async (token) => {
  const about = await apiGet(
    'about',
    { token }
  );

  return about;
}
