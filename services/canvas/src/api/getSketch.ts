import { BASE_URL } from '../const';

export const getSketch = (id: number) => {
  return fetch(`${BASE_URL}/api/image/sketch/${id}`, {
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
