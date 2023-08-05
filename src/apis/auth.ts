import { authApi } from './core/axios';
import { PATH } from './core/constants';

export const kakaoLogin = (kakaoCode: string) => {
  return authApi.POST(`${PATH.AUTH_KAKAO}`, null, { params: { code: kakaoCode } });
};
export const updateToken = (token: { refreshToken: string }) => {
  return authApi.POST(`${PATH.AUTH_NEWTOKEN}`, token);
};
