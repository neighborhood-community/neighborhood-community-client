import { publicApi } from './core/axios';
import { PATH } from './core/constants';

export const fetchUserInfo = async () => {
  return publicApi.GET(`${PATH.MYPAGE}`);
};
