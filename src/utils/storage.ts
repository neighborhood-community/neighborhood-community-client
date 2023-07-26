import { Cookies } from 'react-cookie';

const cookies = new Cookies();

export const refreshTokenManage = {
  GET_COOKIE: (name: string) => {
    return cookies.get(name);
  },
  SET_COOKIE: (name: string, value: string) => {
    return cookies.set(name, value);
  },
  DELETE_COOKIE: (name: string) => {
    return cookies.remove(name);
  },
};

export const accessTokenManage = {
  GET_TOKEN: (name: string) => {
    return localStorage.getItem(name);
  },
  SET_TOKEN: (name: string, value: string) => {
    return localStorage.setItem(name, value);
  },
  DELETE_TOKEN: (name: string) => {
    return localStorage.removeItem(name);
  },
};
