import { Link } from 'react-router-dom';
import { M } from './style';

const MoreButton = () => {
  return (
    <M.MoreBtnBox>
      <Link to="/board">
        <M.MoreBtnSpan>더보기</M.MoreBtnSpan>
      </Link>
    </M.MoreBtnBox>
  );
};

export default MoreButton;
