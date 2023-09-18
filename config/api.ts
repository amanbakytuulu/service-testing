import { FREE_IMAGE_URL } from '@/constants';
import axios, { InternalAxiosRequestConfig } from 'axios';

export const api = axios.create({
  baseURL: FREE_IMAGE_URL,
});

api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    config.headers['Access-Control-Allow-Origin'] = '*';
    return config;
  },
  (error) => Promise.reject(error),
);

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
    }

    return Promise.reject(error);
  },
);
