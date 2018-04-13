import qs from 'qs';

export default url => (params) => {
  const fullUrl = `${url}?${qs.stringify(params)}`;
  return fetch(`http://localhost:3001/${fullUrl}`)
    .then((response) => {
      if (response.ok) {
        return response.json().then(data => ({ data, headers: response.headers }));
      }
      let message = 'Something went wrong ...';
      if (response.status === 404) {
        message = 'Page not found 404';
      }
      throw new Error(message);
    });
};
