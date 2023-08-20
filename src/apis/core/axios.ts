import axios, { AxiosResponse, InternalAxiosRequestConfig } from 'axios';

import { accessTokenManage, refreshTokenManage } from '../../utils/storage';
import { PATH } from './constants';
import { updateToken } from '../auth';

interface ResponseErrorType extends AxiosResponse {
  response: {
    data: {
      message: string;
    };
  };
}

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const authInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const publicApi = {
  GET: async (path: string, option?: { params: object }) => {
    const response = await axiosInstance.get(path, option);
    return response;
  },
  POST: async (path: string, body: object, option?: object) => {
    const response = await axiosInstance.post(path, body, option);
    return response;
  },
};

export const authApi = {
  POST: async (path: string, body?: { refreshToken: string } | null, option?: { params: { code: string } }) => {
    const response = await authInstance.post(path, body, option);
    return response;
  },
};

const requestHandler = (config: InternalAxiosRequestConfig) => {
  if (config.url === PATH.AUTH_KAKAO || config.url === PATH.AUTH_NEWTOKEN) {
    return config;
  }

  config.headers.Authorization = `Bearer ${accessTokenManage.GET_TOKEN()}`;

  return config;
};

const responseHandler = async (error: ResponseErrorType) => {
  const { response, config } = error;
  const { message } = response.data;

  if (message === '만료된 JWT 토큰입니다.') {
    try {
      const response = await updateToken({ refreshToken: refreshTokenManage.GET_COOKIE() });
      const { accessToken } = response.data.data;

      accessTokenManage.SET_TOKEN(accessToken);

      config.headers.Authorization = `Bearer ${accessTokenManage.GET_TOKEN()}`;

      return axios(config);
    } catch (error) {
      accessTokenManage.DELETE_TOKEN();
      refreshTokenManage.DELETE_COOKIE();

      window.location.href = '/';
    }
  }
};

axiosInstance.interceptors.request.use(requestHandler);
axiosInstance.interceptors.response.use(null, responseHandler);
