const apiRequest = async (method, url, params) => {
  const headers = {'Content-Type': 'text/html'};
  const apiUrl = `${process.env.PROFILE_API_URL}/${url}`;

  if (params && params['token']) {
    headers['Authorization'] = `Bearer ${params['token']}`;
    delete params['token'];
  }

  const fetchParams = {
    method,
    headers
  };

  if (method !== 'GET' && params) {
    fetchParams['body'] = JSON.stringify(params);
  }

  console.log(`REQUEST | URL: ${apiUrl}`, fetchParams);

  let response = await fetch(apiUrl, fetchParams);

  try {
    response = await response.json();
  } catch (error) {
    console.log('ERROR: ', error);
  }

  return response;
};

export const profileApiGet = async (url, params) => {
  return await apiRequest('GET', url, params);
}
