const apiRequest = async (method, url, params) => {
  const headers = {'Content-Type': 'application/json'};
  const apiUrl = `${process.env.API_URL}/${url}`;

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
  
  //console.log('RESPONSE', response);

  try {
    response = await response.json();
  } catch (error) {
    console.log('ERROR: ', error);
  }

  console.log('RESPONSE 2', response);

  return response;
};

export const apiGet = async (url, params) => {
  return await apiRequest('GET', url, params);
}

export const apiPost = async (url, params) => {
  return await apiRequest('POST', url, params);
}

export const apiPut = async (url, params) => {
  return await apiRequest('PUT', url, params);
}

export const apiDelete = async (url, params) => {
  return await apiRequest('DELETE', url, params);
}
