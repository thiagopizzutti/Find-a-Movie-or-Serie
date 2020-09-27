import axios from 'axios';

export const api = axios.create({
  baseURL: `https://www.omdbapi.com/`,
  params: {
    apikey: process.env.REACT_APP_API_KEY,
  },
});
