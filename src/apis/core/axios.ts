import axios, { InternalAxiosRequestConfig } from 'axios';

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export const publicApi = {
  GET: async (path: string, option?: { params: object }) => {
    try {
      const response = await axiosInstance.get(path, option);

      return response.data;
    } catch (error) {
      console.log(error);
    }
  },
};
