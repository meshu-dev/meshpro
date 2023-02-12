import { apiGet } from './api-call';
import { profileApiGet } from './profile-api-call';

/*
export const getAbout = async (token) => {
  const about = await apiGet(
    'about',
    { token }
  );

  return about;
} */

export const getAbout = async () => {
  const techList = await profileApiGet(
    'info/about'
  );

  return techList;
}

export const getTechList = async () => {
  const techList = await profileApiGet(
    'tech/list'
  );

  return techList;
}
