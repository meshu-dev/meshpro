import { apiPost } from './api-call';

export const apiLogin = async (email, password) => {
  const response = await apiPost(
    'auth/login',
    { email, password }
  );

  return response['token'];
}

export const apiToken = async () => {
  // const hasToken = hasAuthToken();

  if (global.authToken) {
    return global.authToken;
  }

  const token = await apiLogin(
    process.env.API_EMAIL,
    process.env.API_PASSWORD,
  );

  global.authToken = token;

  console.log(`token: ${token} | ${global.authToken}`);

  return token;
}

export const hasAuthToken = () => {
  return global.authToken ? true : false;
}

export const getAuthToken = () => {
  return global.authToken;
}
