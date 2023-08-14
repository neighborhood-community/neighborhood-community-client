import { HTMLAttributes } from 'react';

interface StyledProps extends HTMLAttributes<HTMLButtonElement> {
  $translateValue: number;
}

export type { StyledProps };
