import { M } from './style';

const PreviewSelect = () => {
  return (
    <>
      <M.PreviewTitle>다양한 동네친구를 만날 수 있습니다.</M.PreviewTitle>
      <M.PreviewTagList>
        <M.PreviewTag>
          <M.PreviewTagButton>전체</M.PreviewTagButton>
        </M.PreviewTag>
        <M.PreviewTag>
          <M.PreviewTagButton>헬스/필라테스/요가</M.PreviewTagButton>
        </M.PreviewTag>
        <M.PreviewTag>
          <M.PreviewTagButton>식당</M.PreviewTagButton>
        </M.PreviewTag>
        <M.PreviewTag>
          <M.PreviewTagButton>용달/이사</M.PreviewTagButton>
        </M.PreviewTag>
        <M.PreviewTag>
          <M.PreviewTagButton>카페</M.PreviewTagButton>
        </M.PreviewTag>
        <M.PreviewTag>
          <M.PreviewTagButton>뷰티/미용</M.PreviewTagButton>
        </M.PreviewTag>
      </M.PreviewTagList>
    </>
  );
};

export default PreviewSelect;
