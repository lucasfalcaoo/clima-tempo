import axios from 'axios';

export const API_KEY = '7ac2499d';

export const api = axios.create({
  baseURL: 'https://api.hgbrasil.com/weather',
  timeout: 10000,
});
