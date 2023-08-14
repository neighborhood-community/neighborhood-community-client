import ProfileImg from '/assets/image/profile-image.svg';

import { M } from './style';

interface UserInfoCardProps {
  userGender: string;
  userNickname: string;
  userProfileImgPath: string;
}

const UserInfoCard = ({ userGender, userNickname, userProfileImgPath }: UserInfoCardProps) => {
  return (
    <M.UserInfoCardBox>
      <M.UserProfileImgBox>
        <M.UserProfileImgWrapper>
          <M.UserProfileImg src={userProfileImgPath || ProfileImg} alt="프로필이미지" />
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
            <M.Td>{userGender || '비공개'}</M.Td>
          </M.Tr>
          <M.Tr>
            <M.Td>{userNickname}</M.Td>
          </M.Tr>
        </M.Tbody>
      </M.Table>
    </M.UserInfoCardBox>
  );
};

export default UserInfoCard;
