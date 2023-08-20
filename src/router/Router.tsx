import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import Layout from '../components/layout/Layout';
import Home from '../components/home';
import Posts from '../components/posts';
import Verify from '../components/verify/Verify';
import MyPage from '../components/mypage';

import { ROUTES } from './routes';
import ProtectedRouter from './ProtectedRouter';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path={ROUTES.MAIN} element={<Home />} />
          <Route element={<ProtectedRouter />}>
            <Route path={ROUTES.POST} element={<Posts />} />
            <Route path={ROUTES.MYPAGE} element={<MyPage />} />
          </Route>
          <Route path="*" element={<Navigate replace to="/" />} />
        </Route>

        <Route path={ROUTES.VERIFY} element={<Verify />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
