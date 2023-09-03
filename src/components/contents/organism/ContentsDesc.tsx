import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { styled } from 'styled-components';

import { publicApi } from '../../../apis/core/axios';
import { PATH } from '../../../apis/core/constants';
import ContentsTitle from '../molecules/ContentsTitle';
import UserInfoList from '../molecules/UserInfoList';
import ContentsDetail from '../molecules/ContentsDetail';

const ContentsDesc = () => {
  const [contentsInfo, setContentsInfo] = useState({
    gender: '',
    region: '',
    createdAt: '',
    content: '',
  });

  const [searchParams] = useSearchParams();

  const userId = searchParams.get('userId');

  useEffect(() => {
    const fetchContents = async () => {
      try {
        const response = await publicApi.GET(`${PATH.POST}/${userId}`);
        const { data } = response.data;
        const { gender, region, createdAt, content } = data;

        setContentsInfo({
          gender,
          region,
          createdAt: createdAt.substring(0, 16),
          content,
        });
      } catch (error) {
        console.log(error);
      }
    };

    fetchContents();
  }, []);

  return (
    <Box>
      <ContentsTitle />
      <UserInfoList gender={contentsInfo.gender} region={contentsInfo.region} createdAt={contentsInfo.createdAt} />
      <ContentsDetail content={contentsInfo.content} />
    </Box>
  );
};

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70rem;
  margin: 0 auto;
  margin-top: 3rem;
`;

export default ContentsDesc;
