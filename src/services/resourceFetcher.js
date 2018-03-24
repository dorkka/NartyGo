import qs from 'qs';

export default (url) => (params) => {

  const fullUrl = `${url}?${qs.stringify(params)}`
  return fetch(`http://localhost:3001/${fullUrl}`)
    .then(response => {
      if (response.ok) {
        return response.json().then((data) => ({data, headers: response.headers}))
      } else {
        throw new Error('Something went wrong ...');
      }
    })
}
