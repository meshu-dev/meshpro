import { profileApiGet } from './profile-api-call';

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
