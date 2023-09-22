import { Navigate } from 'react-router-dom';

const AuthenticationError = () => {
  return (
    <>
      <Navigate to={'/'} />
      {alert('로그인을 해주세요')}
    </>
  );
};

export default AuthenticationError;
