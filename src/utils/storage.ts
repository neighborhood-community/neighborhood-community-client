import { Cookies } from 'react-cookie';

const cookies = new Cookies();

const ACCESS_TOKEN = 'accessToken';
const REFRESH_TOKEN = 'refreshToken';

export const refreshTokenManage = {
  GET_COOKIE: () => {
    return cookies.get(REFRESH_TOKEN);
  },
  SET_COOKIE: (value: string) => {
    return cookies.set(REFRESH_TOKEN, value);
  },
  DELETE_COOKIE: () => {
    return cookies.remove(REFRESH_TOKEN);
  },
};

export const accessTokenManage = {
  GET_TOKEN: () => {
    return localStorage.getItem(ACCESS_TOKEN);
  },
  SET_TOKEN: (value: string) => {
    return localStorage.setItem(ACCESS_TOKEN, value);
  },
  DELETE_TOKEN: () => {
    return localStorage.removeItem(ACCESS_TOKEN);
  },
};
