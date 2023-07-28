import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import AuthModal from '../login/molecules/AuthModal';
import { accessTokenManage } from '../../utils/storage';

const Header = () => {
  const [isModal, setIsModal] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const handleModal = () => {
    setIsModal(prev => !prev);
  };

  useEffect(() => {
    const token = accessTokenManage.GET_TOKEN('accessToken');

    if (token) {
      setIsLogin(true);
    }
  }, []);

  return (
    <HeaderBox>
      <GNB>
        <LinkList>
          <NavigationLink>
            <Link to="/">홈</Link>
          </NavigationLink>
          {isLogin && (
            <Link to="/post">
              <NavigationLink>글 작성</NavigationLink>
            </Link>
          )}
        </LinkList>
        {isLogin ? (
          <MyPageButton>마이페이지</MyPageButton>
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
  display: flex;
  justify-content: center;
  position: sticky;
  top: 0;
  height: 4rem;
  border: 0.0625rem solid #e1e2e3;
  background-color: #fff;
  z-index: 11;
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
const MyPageButton = styled.button`
  font-size: 1.5rem;
  font-weight: bold;
`;

export default Header;
