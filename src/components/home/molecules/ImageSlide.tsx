import { useEffect, useState } from 'react';

import { IMG_DATA, IMG_DATA_LENGTH } from '../../../utils/imgData';

import { M } from './style';

const ImageSlide = () => {
  const [slideIndex, setSlideIndex] = useState(1);
  const [carouselTransition, setCarouselTransition] = useState('all 500ms ease-in-out');
  const [isHover, setIsHover] = useState(true);

  const handlePrev = () => {
    setSlideIndex(prev => prev - 1);
    setCarouselTransition('all 500ms ease-in-out');
  };

  const handleNext = () => {
    setSlideIndex(prev => prev + 1);
    setCarouselTransition('all 500ms ease-in-out');
  };

  const handleMouseHover = () => {
    setIsHover(prev => !prev);
  };

  useEffect(() => {
    setTimeout(() => {
      if (slideIndex === 6) {
        setSlideIndex(1);
        setCarouselTransition('');
      } else if (slideIndex === 0) {
        setSlideIndex(5);
        setCarouselTransition('');
      }
    }, 500);
  }, [slideIndex]);

  useEffect(() => {
    if (isHover) {
      const timer = setInterval(() => {
        setSlideIndex(prev => prev + 1);
        setCarouselTransition('transform 500ms ease-in-out');
      }, 6000);

      return () => {
        clearInterval(timer);
      };
    }
  }, [isHover]);

  return (
    <M.ImageSlideBox onMouseOver={handleMouseHover} onMouseOut={handleMouseHover}>
      <M.PrevButton onClick={handlePrev}>⬅️</M.PrevButton>
      <M.NextButton onClick={handleNext}>➡️</M.NextButton>
      <M.ImageSlideWrapper $carouseltransition={carouselTransition} $transformindex={slideIndex} $imgdatalegnth={IMG_DATA_LENGTH}>
        {IMG_DATA.map(({ id, path }) => (
          <M.SlideImg key={id} src={path} alt="슬라이드이미지" />
        ))}
      </M.ImageSlideWrapper>
    </M.ImageSlideBox>
  );
};

export default ImageSlide;
