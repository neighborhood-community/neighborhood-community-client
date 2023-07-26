import { Link } from 'react-router-dom';
import { M } from './style';
import KakaoLoginImage from '/assets/image/kakao-login-image.svg';
import { loginLink } from '../../../apis/core/kakaoConfig';

const Overlay = () => {
  return (
    <M.OverlayBox>
      <M.LoginTitle>카카오로 로그인 해보세요!</M.LoginTitle>
      <Link to={loginLink}>
        <M.SocialLoginLink>
          <M.KakaoImage src={KakaoLoginImage} alt="카카오로그인이미지" />
        </M.SocialLoginLink>
      </Link>
    </M.OverlayBox>
  );
};

export default Overlay;
