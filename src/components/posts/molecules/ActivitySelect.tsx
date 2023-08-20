import { M } from './style';
import { RegisterProps } from './type';

interface ActivitySelectProps extends RegisterProps {
  handleSelectChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const ActivitySelect = ({ register, handleSelectChange }: ActivitySelectProps) => {
  return (
    <M.SelectBox {...register} name="activity" onChange={handleSelectChange} defaultValue="카테고리">
      <M.SelectOption value="카테고리">카테고리</M.SelectOption>
      <M.SelectOption value="영화">영화</M.SelectOption>
      <M.SelectOption value="술">술</M.SelectOption>
      <M.SelectOption value="운동">운동</M.SelectOption>
      <M.SelectOption value="독서">독서</M.SelectOption>
      <M.SelectOption value="공부">공부</M.SelectOption>
      <M.SelectOption value="산책">산책</M.SelectOption>
    </M.SelectBox>
  );
};

export default ActivitySelect;
