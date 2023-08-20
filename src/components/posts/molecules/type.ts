import { HTMLAttributes } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

interface RegisterProps {
  register?: UseFormRegisterReturn;
}

interface StyledProps extends HTMLAttributes<HTMLButtonElement> {
  $isValid: boolean;
}

export type { RegisterProps, StyledProps };
