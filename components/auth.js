import { apiPost } from './apiCall';

export const apiLogin = async (email, password) => {
  const response = await apiPost(
    'auth/login',
    { email, password }
  );

  return response['token'];
}

export const apiToken = async () => {
  const token = await apiLogin(
    process.env.API_EMAIL,
    process.env.API_PASSWORD,
  );

  console.log(`token: ${token}`);

  return token;
}