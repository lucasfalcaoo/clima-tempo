import axios from 'axios';

export const API_KEY = 'b5cb9753574cc8464bfa01c2e053c3a0';

export const api = axios.create({
  baseURL: 'http://apiadvisor.climatempo.com.br/api/v1/',
  timeout: 10000,
});
