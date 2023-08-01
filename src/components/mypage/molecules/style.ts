import { styled } from 'styled-components';

const M = {
  UserInfoCardBox: styled.div`
    display: flex;
    align-items: center;
    width: 30rem;
    border: 0.1rem solid #888;
    border-radius: 1rem;
  `,
  UserProfileImgBox: styled.div``,
  UserProfileImgWrapper: styled.div`
    width: 7rem;
    height: 7rem;
    margin: 10px;
    border-radius: 50%;
  `,
  UserProfileImg: styled.img`
    width: inherit;
    height: inherit;
    border-radius: inherit;
  `,
  Table: styled.table`
    display: flex;
    width: 100%;
  `,
  Thead: styled.thead`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 40%;
  `,
  Tbody: styled.tbody`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 60%;
  `,
  Th: styled.th`
    font-size: 1.5rem;
  `,
  Tr: styled.tr`
    margin-bottom: 5px;

    &:last-child {
      margin-bottom: 0;
    }
  `,
  Td: styled.td`
    font-size: 1.3rem;
    color: #888;
  `,

  ContentsWrapper: styled.div`
    display: grid;
    place-items: center;
    grid-template-columns: 5fr 1fr;
    height: 3rem;
  `,
  Title: styled.p`
    font-size: 1.4rem;
  `,
  Date: styled.p``,
};

export { M };
