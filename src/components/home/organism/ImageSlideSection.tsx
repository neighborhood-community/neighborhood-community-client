import { styled } from 'styled-components';
import ImageSlide from '../molecules/ImageSlide';

const ImageSlideSection = () => {
  return (
    <Box>
      <ImageSlide />
    </Box>
  );
};

const Box = styled.div`
  width: 70rem;
  height: 25rem;
  margin: 0 auto;
  margin-bottom: 2.5rem;
`;

export default ImageSlideSection;
