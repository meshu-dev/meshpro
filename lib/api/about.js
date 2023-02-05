import { apiGet } from './api-call';
import { profileApiGet } from './profile-api-call';

export const getAbout = async (token) => {
  const about = await apiGet(
    'about',
    { token }
  );

  return about;
}

export const getLangList = async () => {
  const langList = await profileApiGet(
    'lang/list'
  );

  return langList;
}
