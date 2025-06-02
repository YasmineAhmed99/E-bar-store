
import axios from 'axios';
import { getSessionToken } from '../utils/token';

const api = axios.create({
  baseURL: 'https://dev.backend-api.goldady.com/user-api',
});

api.interceptors.request.use((config) => {
  const token = getSessionToken();
  if (token) {
    config.params = { ...config.params, token };
  }
  return config;
});

export default api;
