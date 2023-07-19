import { C } from './style';

interface TextInputProps {
  placeHolder: string;
}

const TextInput = ({ placeHolder }: TextInputProps) => {
  return (
    <C.InputWrapper>
      <C.Input type="text" placeholder={placeHolder} />
    </C.InputWrapper>
  );
};

export default TextInput;
