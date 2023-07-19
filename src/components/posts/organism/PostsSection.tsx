import { styled } from 'styled-components';
import TextInput from '../../common/TextInput';
import ContentDetail from '../molecules/ContentDetail';

const PostsSection = () => {
  return (
    <Box>
      <Content>
        <TextInput placeHolder="제목을 입력해주세요" />
        <TextInput placeHolder="지역을 입력해주세요" />
        <ContentDetail />
      </Content>
    </Box>
  );
};

const Box = styled.div``;
const Content = styled.div`
  width: 700px;
  margin: 0 auto;
  margin-top: 20px;
`;

export default PostsSection;
