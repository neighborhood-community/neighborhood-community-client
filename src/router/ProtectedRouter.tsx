import { useContext, useEffect } from 'react';

import { Outlet } from 'react-router-dom';

import AuthenticationError from './AuthenticationError';
import { ValidContext } from '../context/authorizationContext';
import { PATH } from '../apis/core/constants';
import { authApi } from '../apis/core/axios';
import { accessTokenManage, refreshTokenManage } from '../utils/storage';

const ProtectedRouter = () => {
  const refreshToken = refreshTokenManage.GET_COOKIE();

  const { isValid, expiredRefreshToken, unexpiredRefreshToken } = useContext(ValidContext);

  useEffect(() => {
    const verifyToken = async () => {
      try {
        const response = await authApi.GET(`${PATH.AUTH_REFRESH_TOKEN_VALIDITY}`, refreshToken);

        unexpiredRefreshToken();

        return response;
      } catch (error) {
        accessTokenManage.DELETE_TOKEN();
        refreshTokenManage.DELETE_COOKIE();
        expiredRefreshToken();
      }
    };

    verifyToken();
  }, []);

  return isValid ? <Outlet /> : <AuthenticationError />;
};

export default ProtectedRouter;
