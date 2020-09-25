import axios from 'axios'

export const api = axios.create({
  baseURL: `https://www.omdbapi.com/?i=tt3896198&apikey=5f02449c`,
});


