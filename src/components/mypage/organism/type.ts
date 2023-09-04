import { HTMLAttributes } from 'react';

interface StyledProps extends HTMLAttributes<HTMLButtonElement> {
  $translateValue: number;
}

type UserPostListType = {
  category: string;
  content: string;
  createdAt: string;
  gender: null | string;
  id: number;
  nickname: string;
  profileImg: string;
  region: string;
  title: string;
};

export type { StyledProps, UserPostListType };
