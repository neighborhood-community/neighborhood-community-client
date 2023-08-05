import { HTMLAttributes } from 'react';

export interface StyledProps extends HTMLAttributes<HTMLDivElement> {
  $transformindex: number;
  $imgdatalegnth: number;
  $carouseltransition: string;
}
