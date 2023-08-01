import { M } from './style';

interface PostContentsProps {
  title: string;
  date: string;
}

const PostContents = ({ title, date }: PostContentsProps) => {
  return (
    <M.ContentsWrapper>
      <M.Title>{title}</M.Title>
      <M.Date>{date}</M.Date>
    </M.ContentsWrapper>
  );
};

export default PostContents;
