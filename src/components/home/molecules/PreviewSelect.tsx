import { categoryList } from '../../../utils/contentsCategoryList';
import { M } from './style';

interface PreviewSelectProps {
  handleCategory: (category: string) => void;
}

const PreviewSelect = ({ handleCategory }: PreviewSelectProps) => {
  return (
    <>
      <M.PreviewTitle>다양한 동네친구를 만날 수 있습니다.</M.PreviewTitle>
      <M.PreviewTagList>
        {categoryList.map(element => (
          <M.PreviewTag key={element}>
            <M.PreviewTagButton onClick={() => handleCategory(element)}>{element}</M.PreviewTagButton>
          </M.PreviewTag>
        ))}
      </M.PreviewTagList>
    </>
  );
};

export default PreviewSelect;
