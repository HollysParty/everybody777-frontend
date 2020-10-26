import { BASE_URL } from '../const';

export const getSketches = () => {
  return fetch(`${BASE_URL}/api/image/sketches`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(async (response) => {
    if (response.status < 200 || response.status >= 300) {
      throw Error();
    }
    const data = await response.json();
    return data;
  });
};
