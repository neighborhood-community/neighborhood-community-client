import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { styled } from 'styled-components';

import { publicApi } from '../../../apis/core/axios';
import { PATH } from '../../../apis/core/constants';
import ContentDetail from '../molecules/ContentDetail';
import SubmitButton from '../molecules/SubmitButton';
import ActivitySelect from '../molecules/ActivitySelect';
import TextInput from '../../common/TextInput';

type ContentsType = {
  contentsTitle: string;
  contentsRegion: string;
  contentsCategory: string;
  contentsDetail: string;
};

const PostsSection = () => {
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    setValue,
    formState: { isValid },
  } = useForm<ContentsType>({
    mode: 'onSubmit',
    defaultValues: {
      contentsTitle: '',
      contentsRegion: '',
      contentsCategory: '카테고리',
      contentsDetail: '',
    },
  });

  const handleOnSubmit = async (data: ContentsType) => {
    const { contentsTitle, contentsRegion, contentsCategory, contentsDetail } = data;

    try {
      const response = await publicApi.POST(`${PATH.POST_CONTENTS}`, {
        title: contentsTitle,
        region: contentsRegion,
        category: contentsCategory,
        content: contentsDetail,
      });

      navigate('/');

      return response;
    } catch (error) {
      console.log(error);
    }
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { target } = e;
    const { value } = target;

    setValue('contentsCategory', value);
  };

  return (
    <Box>
      <ContentForm onSubmit={handleSubmit(handleOnSubmit)}>
        <TextInput register={register('contentsTitle', { required: true })} placeHolder="제목을 입력해주세요" />
        <TextInput register={register('contentsRegion', { required: { value: true, message: '지역을 입력해주세요' } })} placeHolder="지역을 입력해주세요" />
        <ActivitySelect register={register('contentsCategory', { required: true })} handleSelectChange={handleSelectChange} />
        <ContentDetail register={register('contentsDetail', { required: { value: true, message: '내용을 입력해주세요' } })} />
        <SubmitButton isValid={isValid} />
      </ContentForm>
    </Box>
  );
};

const Box = styled.div``;
const ContentForm = styled.form`
  width: 700px;
  margin: 0 auto;
  margin-top: 20px;
`;

export default PostsSection;
