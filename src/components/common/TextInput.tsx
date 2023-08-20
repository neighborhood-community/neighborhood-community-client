import { RegisterProps } from '../posts/molecules/type';
import { C } from './style';

interface TextInputProps extends RegisterProps {
  placeHolder: string;
}

const TextInput = ({ register, placeHolder }: TextInputProps) => {
  return (
    <C.InputWrapper>
      <C.Input {...register} type="text" placeholder={placeHolder} />
    </C.InputWrapper>
  );
};

export default TextInput;
