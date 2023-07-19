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
  height: 21.875rem;
  margin-bottom: 2.5rem;
`;

export default ImageSlideSection;
