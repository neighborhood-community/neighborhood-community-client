import { useContext, useEffect } from 'react';

import { useNavigate, useSearchParams } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import { styled } from 'styled-components';

import { ValidContext } from '../../context/authorizationContext';
import { kakaoLogin } from '../../apis/auth';
import { accessTokenManage, refreshTokenManage } from '../../utils/storage';

const Verify = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const { unexpiredRefreshToken } = useContext(ValidContext);

  const override: React.CSSProperties = {
    width: '12.25rem',
    height: '12.25rem',
  };

  useEffect(() => {
    const queryString = searchParams.get('code');

    const getAuthcode = async () => {
      try {
        const response = await kakaoLogin(queryString!);
        const { accessToken, refreshToken } = response.data.data;

        accessTokenManage.SET_TOKEN(accessToken);
        refreshTokenManage.SET_COOKIE(refreshToken);

        unexpiredRefreshToken();

        navigate('/');

        return response;
      } catch (error) {
        console.log(error);
      }
    };

    getAuthcode();
  }, []);

  return (
    <VerifyBox>
      <ClipLoader cssOverride={override} color="#36d6b0" />
    </VerifyBox>
  );
};

const VerifyBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

export default Verify;
