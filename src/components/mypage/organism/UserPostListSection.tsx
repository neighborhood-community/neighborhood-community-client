import { styled } from 'styled-components';
import { BiSolidLeftArrow, BiSolidRightArrow } from 'react-icons/bi';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import PostContents from '../molecules/PostContents';
import PageNumberButton from '../molecules/PageNumberButton';

import usePostList from '../hook/usePostList';
import useClickedPage from '../hook/useClickedPage';
import { numberList } from '../../../utils/numberList';
import usePostListSize from '../hook/usePostListSize';
import { StyledProps } from './type';
import { useEffect, useState } from 'react';

const UserPostListSection = () => {
  const [translateValue, setTranslateValue] = useState(0);

  const { postListSize } = usePostListSize();
  const { pageNumber, handlePageNumber } = useClickedPage(postListSize);
  const { postList } = usePostList(pageNumber);

  const postNumberList = numberList(postListSize);

  const handleEnd = (endNumber: number) => {
    handlePageNumber(endNumber);
  };

  const pageMovePrevSingly = () => {
    handlePageNumber(pageNumber - 1);
  };

  const pageMoveNextSingly = () => {
    handlePageNumber(pageNumber + 1);
  };

  useEffect(() => {
    if (pageNumber === 1) {
      setTranslateValue(0);
    } else {
      setTranslateValue(pageNumber % 5 === 0 ? Math.floor(pageNumber / 5) - 1 : Math.floor(pageNumber / 5));
    }
  }, [pageNumber]);

  return (
    <Box>
      <PagiNationBox>
        <ContentsListBox>
          {postList.map(({ id, title, date }) => (
            <PostContents key={id} title={title} date={date} />
          ))}
        </ContentsListBox>
        <PageNumberListBox>
          <PageMoveButtonWrapper>
            <FirstMove onClick={() => handleEnd(1)}>
              <FaChevronLeft />
            </FirstMove>
            <PrevSingly onClick={pageMovePrevSingly}>
              <BiSolidLeftArrow />
            </PrevSingly>
          </PageMoveButtonWrapper>
          <PostNumberListBox>
            <PostNumberListWrapper $translateValue={translateValue}>
              {postNumberList.map(element => (
                <PageNumberButton isChecked={element === pageNumber ? true : false} key={element} pageNumberData={element} handlePageNumber={handlePageNumber} />
              ))}
            </PostNumberListWrapper>
          </PostNumberListBox>
          <PageMoveButtonWrapper>
            <NextSingly onClick={pageMoveNextSingly}>
              <BiSolidRightArrow />
            </NextSingly>
            <LastMove onClick={() => handleEnd(postListSize)}>
              <FaChevronRight />
            </LastMove>
          </PageMoveButtonWrapper>
        </PageNumberListBox>
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
  overflow-y: hidden;
`;
const PageMoveButtonWrapper = styled.div``;
const PrevSingly = styled.button``;
const NextSingly = styled.button``;
const FirstMove = styled.button``;
const LastMove = styled.button``;
const PageNumberListBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: inherit;
`;
const PostNumberListBox = styled.div`
  overflow-x: hidden;
  width: 11.35rem;
  height: 2.2rem;
`;
const PostNumberListWrapper = styled.div<StyledProps>`
  display: flex;
  transform: translateX(${({ $translateValue }) => `${-1 * 114 * $translateValue}px`});
`;

export default UserPostListSection;
