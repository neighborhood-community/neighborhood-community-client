import { useEffect, useState } from 'react';
import { styled } from 'styled-components';

import UserInfoCard from '../molecules/UserInfoCard';

import { fetchUserInfo } from '../../../apis/user';

const UserInfoSection = () => {
  const [userInfo, setUserInfo] = useState({
    gender: '',
    nickname: '',
    profile_img: '',
  });

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const response = await fetchUserInfo();
        const { gender, nickname, profile_img } = response.data.data;

        setUserInfo({
          gender,
          nickname,
          profile_img,
        });
      } catch (error) {
        console.log(error);
      }
    };

    getUserInfo();
  }, []);

  return (
    <Box>
      <UserInfoCard userGender={userInfo.gender} userNickname={userInfo.nickname} userProfileImgPath={userInfo.profile_img} />
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
