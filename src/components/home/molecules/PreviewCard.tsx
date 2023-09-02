import { Link } from 'react-router-dom';
import { M } from './style';

interface PreviewCard {
  id: string;
  region: string;
  content: string;
  category: string;
  profileImg: string;
  gender: string;
  date: string;
}

const PreviewCard = ({ id, region, content, category, profileImg, gender, date }: PreviewCard) => {
  return (
    <Link
      to={{
        pathname: '/contents',
        search: `userId=${id}`,
      }}
    >
      <M.PreviewCardBox>
        <M.CardDetailBox>
          <M.CardImageWrapper>
            <M.ImageWrapper>
              <M.Image src={profileImg} alt="프로필이미지" />
            </M.ImageWrapper>
          </M.CardImageWrapper>
          <M.CardDescBox>
            <M.UserInformationBox>
              <M.UserGender>
                <M.Gender>{gender && '비공개'}</M.Gender>
              </M.UserGender>
              <M.UserRegion>
                <M.Region>{region}</M.Region>
              </M.UserRegion>
              <M.ContentsCategory>
                <M.Category>{category}</M.Category>
              </M.ContentsCategory>
              <M.ContentsDate>
                <M.Date>{date}</M.Date>
              </M.ContentsDate>
            </M.UserInformationBox>
            <M.BoardTitle>{content}</M.BoardTitle>
          </M.CardDescBox>
        </M.CardDetailBox>
      </M.PreviewCardBox>
    </Link>
  );
};

export default PreviewCard;
