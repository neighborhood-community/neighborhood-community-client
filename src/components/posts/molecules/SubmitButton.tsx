import { M } from './style';

interface SubmitButtonProps {
  isValid: boolean;
}

const SubmitButton = ({ isValid }: SubmitButtonProps) => {
  return (
    <M.PostButton disabled={!isValid} type="submit" $isValid={isValid}>
      등록하기
    </M.PostButton>
  );
};

export default SubmitButton;
