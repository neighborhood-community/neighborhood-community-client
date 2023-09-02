import { styled } from 'styled-components';

const M = {
  Title: styled.h1``,
  UserInfoListWrapper: styled.ul`
    display: flex;
    justify-content: right;
    width: 100%;
  `,
  UserInfoItem: styled.li`
    margin-right: 0.5rem;
  `,
  ContentsDetailWrapper: styled.div`
    width: 100%;
  `,
  Detail: styled.div`
    margin: 1rem;
    padding: 1rem;
    height: 50rem;
    border-radius: 1.5rem;
    box-shadow: 0.8px 0.8px 1px 1px #e1e2e3;
  `,
};

export { M };
