import { Outlet } from 'react-router-dom';
import { styled } from 'styled-components';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
  return (
    <Container>
      <Header />
      <MainContainer>
        <Outlet />
      </MainContainer>
      <Footer />
    </Container>
  );
};

export default Layout;

const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  font-family: 'NotoSans KR';
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
