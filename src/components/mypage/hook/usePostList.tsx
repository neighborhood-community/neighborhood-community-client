import { useEffect, useState } from 'react';

import { MockData } from '../../../utils/MockData';

const usePostList = (pageNumber: number) => {
  const [postList, setPostList] = useState([]);
  const [postListSize, setPostListSize] = useState(0);

  const mapObj = new Map();

  const handlePageData = (data: Map<number, []>) => {
    const pageData = data.get(pageNumber)!;
    setPostList(pageData);
  };

  useEffect(() => {
    for (let i = 1; i <= MockData.length; i++) {
      mapObj.set(i, MockData[i - 1]);
    }

    handlePageData(mapObj);
    setPostListSize(mapObj.size);
  }, [pageNumber]);

  return { postList, postListSize };
};

export default usePostList;
