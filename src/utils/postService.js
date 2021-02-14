import tokenService from './tokenService';

const BASE_URL = '/api/profile/';

function index() {
  const options = {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + tokenService.getToken()
    }
  };
  return fetch(BASE_URL, options).then(res => res.json());
  console.log('testing the index function in post service')
}

function create(post) {
  const options = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      // Add this header - don't forget the space after Bearer
      'Authorization': 'Bearer ' + tokenService.getToken()
    },
    body: JSON.stringify(post)
  };
  return fetch(BASE_URL, options).then(res => res.json());
}

export default {
    index,
    create
  };