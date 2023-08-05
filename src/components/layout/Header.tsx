import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import AuthModal from '../login/molecules/AuthModal';
import { accessTokenManage, refreshTokenManage } from '../../utils/storage';

const Header = () => {
  const [isModal, setIsModal] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const handleModal = () => {
    setIsModal(prev => !prev);
  };

  const handleLogout = () => {
    accessTokenManage.DELETE_TOKEN();
    refreshTokenManage.DELETE_COOKIE();

    setIsLogin(false);
  };

  useEffect(() => {
    const token = accessTokenManage.GET_TOKEN();

    if (token) {
      setIsLogin(true);
    }
  }, [isLogin]);

  return (
    <HeaderBox>
      <GNB>
        <LinkList>
          <NavigationLink>
            <Link to="/">홈</Link>
          </NavigationLink>
          {isLogin && (
            <NavigationLink>
              <Link to="/post">글 작성</Link>
            </NavigationLink>
          )}
        </LinkList>
        {isLogin ? (
          <UserBox>
            <Link to={'/mypage'}>
              <MyPageLink>마이페이지</MyPageLink>
            </Link>
            <LogoutButton onClick={handleLogout}>로그아웃</LogoutButton>
          </UserBox>
        ) : (
          <AuthModalButton>
            <AuthButton onClick={handleModal}>로그인</AuthButton>
            {isModal && <AuthModal onClose={handleModal} />}
          </AuthModalButton>
        )}
      </GNB>
    </HeaderBox>
  );
};

const HeaderBox = styled.header`
  z-index: 10;
  display: flex;
  justify-content: center;
  position: sticky;
  top: 0;
  height: 4rem;
  border: 0.0625rem solid #e1e2e3;
  background-color: #fff;
`;
const GNB = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 959px;
`;
const LinkList = styled.ul`
  display: flex;
  align-items: center;
`;
const NavigationLink = styled.li`
  font-size: 1.5rem;
  margin-right: 1.875rem;
`;
const AuthModalButton = styled.div``;
const AuthButton = styled.button`
  width: inherit;
  height: inherit;
  font-size: 1.5rem;
  font-weight: bold;
`;
const MyPageLink = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-right: 1rem;
`;
const LogoutButton = styled.button`
  font-size: 1.5rem;
  font-weight: bold;
`;
const UserBox = styled.div`
  display: flex;
  align-items: center;
`;

export default Header;
