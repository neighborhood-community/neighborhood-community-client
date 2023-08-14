import { useEffect, useState } from 'react';
import { createPageDataArray } from '../../../utils/createPageDataArray';

const usePostList = (pageNumber: number) => {
  const [postList, setPostList] = useState([]);

  const pageData = createPageDataArray();

  const handlePageData = (data: Map<number, []>) => {
    const pageData = data.get(pageNumber)!;
    setPostList(pageData);
  };

  useEffect(() => {
    handlePageData(pageData);
  }, [pageNumber]);

  return { postList };
};

export default usePostList;
