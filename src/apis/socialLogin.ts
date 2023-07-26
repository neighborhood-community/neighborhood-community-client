import { publicApi } from './core/axios';
import { PATH } from './core/constants';

export const kakaoLogin = (kakaoCode: string) => {
  return publicApi.GET(`${PATH.AUTH_KAKAO}`, {
    params: {
      code: kakaoCode,
    },
  });
};
