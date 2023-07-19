import MoreButton from '../molecules/MoreButton';
import PreviewCard from '../molecules/PreviewCard';
import PreviewSelect from '../molecules/PreviewSelect';
import { styled } from 'styled-components';

const PreviewSection = () => {
  return (
    <Box>
      <Content>
        <PreviewBox>
          <PreviewSelect />
        </PreviewBox>
        <MoreButton />
        <CardListBox>
          <PreviewCard />
          <PreviewCard />
          <PreviewCard />
          <PreviewCard />
          <PreviewCard />
          <PreviewCard />
          <PreviewCard />
          <PreviewCard />
        </CardListBox>
      </Content>
    </Box>
  );
};

const Box = styled.div`
  height: 100vh;
`;
const Content = styled.div`
  width: 700px;
  margin: 0 auto;
`;
const PreviewBox = styled.div`
  margin-bottom: 3.125rem;
`;
const CardListBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(4, 1fr);
  width: inherit;
  height: 336px;
  overflow-y: hidden;

  &:nth-child(2n) {
    grid-column-gap: 15px;
  }
`;

export default PreviewSection;
