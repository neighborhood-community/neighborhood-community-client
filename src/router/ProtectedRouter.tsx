import { Navigate, Outlet } from 'react-router-dom';
import { accessTokenManage } from '../utils/storage';

const ProtectedRouter = () => {
  const token = accessTokenManage.GET_TOKEN();

  return token ? <Outlet /> : <Navigate to={'/'} />;
};

export default ProtectedRouter;
