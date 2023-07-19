import { Link } from 'react-router-dom';
import { M } from './style';

import Profile from '/assets/image/profile-image.svg';

const PreviewCard = () => {
  return (
    <M.PreviewCardBox>
      <Link to="/">
        <M.CardDetailBox>
          <M.CardImageWrapper>
            <M.ImageWrapper>
              <M.Image src={Profile} alt="프로필이미지" />
            </M.ImageWrapper>
          </M.CardImageWrapper>
          <M.CardDescBox>
            <M.UserInformationBox>
              <M.UserGender>남자</M.UserGender>
              <M.UserLocatoin>안산</M.UserLocatoin>
            </M.UserInformationBox>
            <M.BoardTitle>안녕하세요! 새벽에 수산물을 받아서 신선하게 배송해드리고 있습니다.</M.BoardTitle>
          </M.CardDescBox>
        </M.CardDetailBox>
      </Link>
    </M.PreviewCardBox>
  );
};

export default PreviewCard;
