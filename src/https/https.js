import axios from 'axios';

const backendUrl = process.env.REACT_APP_BACKEND_URL;

export const httpClient = axios.create({
  baseURL: backendUrl,
  headers: {
    Accept: 'application/json,application/x-www-form-urlencoded,text/plain,*/*',
    'Content-Type': 'application/json',
    'X-mock-match-request-body': true,
  },
});
