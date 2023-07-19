import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const Header = () => {
  return (
    <HeaderBox>
      <GNB>
        <LinkList>
          <NavigationLink>
            <Link to="/">홈</Link>
          </NavigationLink>
          <NavigationLink>
            <Link to="/post">글 작성</Link>
          </NavigationLink>
        </LinkList>
        <AuthModalButton>
          <AuthButton>로그인/회원가입</AuthButton>
        </AuthModalButton>
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
`;
const GNB = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 959px;
`;
const LinkList = styled.ul`
  display: flex;
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

export default Header;
