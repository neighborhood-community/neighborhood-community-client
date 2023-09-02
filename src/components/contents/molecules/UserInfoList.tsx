import { M } from './style';

interface UsreInfoList {
  gender?: string;
  region?: string;
  createdAt?: string;
}

const UserInfoList = ({ gender, region, createdAt }: UsreInfoList) => {
  return (
    <M.UserInfoListWrapper>
      <M.UserInfoItem>{gender && '비공개'}</M.UserInfoItem>
      <M.UserInfoItem>{region}</M.UserInfoItem>
      <M.UserInfoItem>{createdAt}</M.UserInfoItem>
    </M.UserInfoListWrapper>
  );
};

export default UserInfoList;
