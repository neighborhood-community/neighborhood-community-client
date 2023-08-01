import usePostList from '../hook/usePostList';

import { numberList } from '../../../utils/numberList';

import { styled } from 'styled-components';
import useClickedPage from '../hook/useClickedPage';
import PostContents from '../molecules/PostContents';

const UserPostListSection = () => {
  const { pageNumber, handlePageNumber } = useClickedPage();
  const { postList, postListSize } = usePostList(pageNumber);

  const postNumberList = numberList(postListSize);

  const handleMovePage = (clickedNumber: number) => {
    handlePageNumber(clickedNumber);
  };

  const handleEnd = (endNumber: number) => {
    handlePageNumber(endNumber);
  };

  return (
    <Box>
      <PagiNationBox>
        <ContentsListBox>
          {postList.map(({ id, title, date }) => (
            <PostContents key={id} title={title} date={date} />
          ))}
        </ContentsListBox>
        <PageNumberListWrapper>
          <Prev onClick={() => handleEnd(1)}>⬅️</Prev>
          {postNumberList.map(element => (
            <PageNumberBtn onClick={() => handleMovePage(element)} key={element}>
              {element}
            </PageNumberBtn>
          ))}
          <Next onClick={() => handleEnd(postListSize)}>➡️</Next>
        </PageNumberListWrapper>
      </PagiNationBox>
    </Box>
  );
};

const Box = styled.div`
  width: 70rem;
  height: 30rem;
  margin: 0 auto;
  margin-top: 2rem;
`;
const PagiNationBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 40rem;
  height: 30rem;
  margin: 0 auto;
  border: 0.1rem solid #888;
  border-radius: 1rem;
`;
const ContentsListBox = styled.div`
  flex: 1;
  /* overflow-y: hidden; */
`;
const Prev = styled.button``;
const Next = styled.button``;
const PageNumberListWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: inherit;
`;
const PageNumberBtn = styled.button`
  width: 2rem;
  height: 2rem;
  border: 0.1rem solid #e1e2e3;
  border-radius: 0.3rem;
`;

export default UserPostListSection;
