import { M } from './style';
import { RegisterProps } from './type';

const ContentDetail = ({ register }: RegisterProps) => {
  return (
    <M.TextAreaWrapper>
      <M.TextArea {...register} placeholder="내용을 입력해주세요" />
    </M.TextAreaWrapper>
  );
};

export default ContentDetail;
