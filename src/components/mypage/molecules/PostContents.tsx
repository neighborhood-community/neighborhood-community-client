import { Link } from 'react-router-dom';

import { M } from './style';
import { ROUTES } from '../../../router/routes';

interface PostContentsProps {
  id: number;
  title: string;
  createdAt: string;
}

const PostContents = ({ id, title, createdAt }: PostContentsProps) => {
  return (
    <Link
      to={{
        pathname: `${ROUTES.CONTENTS}`,
        search: `userId=${id}`,
      }}
    >
      <M.ContentsWrapper>
        <M.Title>{title}</M.Title>
        <M.Date>{createdAt}</M.Date>
      </M.ContentsWrapper>
    </Link>
  );
};

export default PostContents;
