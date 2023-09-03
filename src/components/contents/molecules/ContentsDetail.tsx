import { M } from './style';

interface ContentsDetailProps {
  content: string;
}

const ContentsDetail = ({ content }: ContentsDetailProps) => {
  return (
    <M.ContentsDetailWrapper>
      <M.Detail>{content}</M.Detail>
    </M.ContentsDetailWrapper>
  );
};

export default ContentsDetail;
