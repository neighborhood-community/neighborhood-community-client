import { HTMLAttributes } from 'react';

interface StyledProps extends HTMLAttributes<HTMLButtonElement> {
  $isChecked: boolean;
}

export type { StyledProps };
