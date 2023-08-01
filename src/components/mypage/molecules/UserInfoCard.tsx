import ProfileImg from '/assets/image/profile-image.svg';

import { M } from './style';

const UserInfoCard = () => {
  return (
    <M.UserInfoCardBox>
      <M.UserProfileImgBox>
        <M.UserProfileImgWrapper>
          <M.UserProfileImg src={ProfileImg} alt="프로필이미지" />
        </M.UserProfileImgWrapper>
      </M.UserProfileImgBox>
      <M.Table>
        <M.Thead>
          <M.Tr>
            <M.Th>성 별 : </M.Th>
          </M.Tr>
          <M.Tr>
            <M.Th>닉네임 : </M.Th>
          </M.Tr>
        </M.Thead>
        <M.Tbody>
          <M.Tr>
            <M.Td>남자</M.Td>
          </M.Tr>
          <M.Tr>
            <M.Td>뭘까요</M.Td>
          </M.Tr>
        </M.Tbody>
      </M.Table>
    </M.UserInfoCardBox>
  );
};

export default UserInfoCard;
