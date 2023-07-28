import { styled } from 'styled-components';
import { StyledProps } from './type';

const M = {
  ImageSlideBox: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow-x: hidden;
    height: inherit;
    background-color: #fff;
    color: #fff;
  `,
  ImageSlideWrapper: styled.div<StyledProps>`
    position: absolute;
    left: 0;
    display: flex;
    width: ${({ $imgdatalegnth }) => `${70 * $imgdatalegnth}rem`};
    transform: translateX(${({ $transformindex, $imgdatalegnth }) => `${-1 * ((100 / $imgdatalegnth) * $transformindex)}%`});
    transition: ${({ $carouseltransition }) => $carouseltransition};
  `,
  NextButton: styled.div`
    position: absolute;
    top: 50%;
    right: 3rem;
    cursor: pointer;
    font-size: 1.8rem;
    z-index: 10;
  `,
  PrevButton: styled.div`
    position: absolute;
    top: 50%;
    left: 3rem;
    cursor: pointer;
    font-size: 1.8rem;
    z-index: 10;
  `,
  SlideImg: styled.img`
    width: inherit;
    height: inherit;
  `,
  PreviewTitle: styled.h1`
    text-align: center;
    margin-bottom: 1.25rem;
    font-size: 1.5rem;
    font-weight: bold;
  `,
  PreviewTagList: styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  PreviewTag: styled.li`
    margin-right: 0.625rem;
    border: 0.1rem solid #e1e2e3;
    border-radius: 6.25rem;

    &:last-child {
      margin-right: 0;
    }
  `,
  PreviewTagButton: styled.button`
    padding: 0.5625rem 1.5625rem;
    border-radius: inherit;
  `,
  PreviewCardBox: styled.div`
    padding: 1rem;
    border-bottom: 0.0625rem solid #e1e2e3;
  `,
  CardDetailBox: styled.div`
    display: flex;
  `,
  CardImageWrapper: styled.div`
    margin-right: 0.9375rem;
    padding: 0.625rem;
  `,
  ImageWrapper: styled.div`
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
  `,
  Image: styled.img`
    width: inherit;
    height: inherit;
    border-radius: inherit;
  `,
  CardDescBox: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: center;
  `,
  UserInformationBox: styled.div`
    display: flex;
    width: 100%;
    margin-bottom: 2rem;
  `,
  UserGender: styled.div`
    margin-right: 0.625rem;
  `,
  UserLocatoin: styled.div`
    color: #e1e2e3;
  `,
  BoardTitle: styled.p``,
  MoreBtnBox: styled.div`
    text-align: right;
  `,
  MoreBtnSpan: styled.span`
    font-size: 1.3rem;
    font-weight: bold;
  `,
};

export { M };
