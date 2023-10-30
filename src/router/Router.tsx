import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import Layout from '../components/layout/Layout';
import Home from '../components/home';
import Posts from '../components/posts';
import Verify from '../components/verify/Verify';
import MyPage from '../components/mypage';
import Contents from '../components/contents';

import { ROUTES } from './routes';
import ProtectedRouter from './ProtectedRouter';
import PostList from '../components/postlist';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path={ROUTES.MAIN} element={<Home />} />
          <Route element={<ProtectedRouter />}>
            <Route path={ROUTES.POST} element={<Posts />} />
            <Route path={ROUTES.MYPAGE} element={<MyPage />} />
            <Route path={ROUTES.CONTENTS} element={<Contents />} />
            <Route path={ROUTES.POSTLIST} element={<PostList />} />
          </Route>
          <Route path="*" element={<Navigate replace to="/" />} />
        </Route>

        <Route path={ROUTES.VERIFY} element={<Verify />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
