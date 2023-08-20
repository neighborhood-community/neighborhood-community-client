import { styled } from 'styled-components';
import { StyledProps } from './type';

const M = {
  TextAreaWrapper: styled.div`
    width: inherit;
    height: 31.25rem;
  `,
  TextArea: styled.textarea`
    width: inherit;
    height: inherit;
    resize: none;
  `,
  PostButton: styled.button<StyledProps>`
    width: 7rem;
    height: 3rem;
    border-radius: 1rem;
    color: #fff;
    background-color: ${({ $isValid }) => ($isValid ? '#b3ecec' : '#e1e2e3')};
  `,
  SelectBox: styled.select``,
  SelectOption: styled.option``,
};

export { M };
