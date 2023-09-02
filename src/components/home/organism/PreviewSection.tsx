import { useEffect, useState } from 'react';

import { styled } from 'styled-components';

import PreviewCard from '../molecules/PreviewCard';
import PreviewSelect from '../molecules/PreviewSelect';
import { PATH } from '../../../apis/core/constants';
import { publicApi } from '../../../apis/core/axios';

const PreviewSection = () => {
  const [contentsCategory, setContentsCategory] = useState('all');
  const [contentsList, setContentsList] = useState([]);

  const handleCategory = (category: string) => {
    setContentsCategory(category);
  };

  useEffect(() => {
    const fetchCotentsList = async () => {
      try {
        const response = await publicApi.GET(`${PATH.POST_CATEGORY}`, {
          params: {
            category: contentsCategory,
            perPage: 8,
            page: 1,
          },
        });
        const { posts } = response.data.data;

        setContentsList(posts);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCotentsList();
  }, [contentsCategory]);

  return (
    <Box>
      <Content>
        <PreviewBox>
          <PreviewSelect handleCategory={handleCategory} />
        </PreviewBox>
        <CardListBox>
          {contentsList.map(({ id, region, content, category, profileImg, gender, createdAt }) => (
            <PreviewCard key={id} id={id} region={region} content={content} category={category} profileImg={profileImg} gender={gender} date={createdAt} />
          ))}
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
  grid-column-gap: 1.5rem;

  &:nth-child(2n) {
    grid-column-gap: 15px;
  }
`;

export default PreviewSection;
