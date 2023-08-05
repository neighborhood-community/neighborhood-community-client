import { styled } from 'styled-components';
import UserInfoCard from '../molecules/UserInfoCard';

const UserInfoSection = () => {
  return (
    <Box>
      <UserInfoCard />
    </Box>
  );
};

const Box = styled.div`
  display: flex;
  justify-content: center;
  width: 70rem;
  margin: 0 auto;
  margin-top: 3rem;
`;

export default UserInfoSection;
