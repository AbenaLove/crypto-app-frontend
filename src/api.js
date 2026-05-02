const BASE_URL = 'https://ewura-crypto-api.onrender.com';

export const api = {
  //AUTH 
  register: (data) => 
    fetch(`${BASE_URL}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      credentials: 'include',
      body: JSON.stringify(data),
    }).then((res) => res.json()),

    login: (data) => 
      fetch(`${BASE_URL}/auth/login`, {
        method:'POST',
        headers: { 'Content-Type': 'application/json'},
        credentials: 'include',
        body: JSON.stringify(data),
      }).then((res) => res.json()),

    logout: () =>
    fetch(`${BASE_URL}/auth/logout`, {
      method: 'POST',
      credentials: 'include',
    }).then((res) => res.json()),

    getProfile: () =>
      fetch(`${BASE_URL}/auth/profile`, {
        credentials: 'include',
      }).then((res) => res.json()),

    // CRYPTO
    getAllCrypto: () =>
      fetch(`${BASE_URL}/crypto`, {
        credentials: 'include',
      }).then((res) => res.json()),

    getGainers: () =>
      fetch(`${BASE_URL}/crypto/gainers`, {
        credentials: 'include',
      }).then((res) => res.json()),

    getNewListings: () =>
    fetch(`${BASE_URL}/crypto/new`, {
      credentials: 'include',
    }).then((res) => res.json()),

    addCrypto: (data) =>
      fetch(`${BASE_URL}/crypto`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(data),
      }).then((res) => res.json()),
  };