import { useEffect, useState } from 'react';

const usePostList = (pageNumber: number, userPostData: Map<number, []> | undefined) => {
  const [postList, setPostList] = useState([]);

  const handlePageData = (data: Map<number, []>) => {
    const pageData = data.get(pageNumber)!;
    setPostList(pageData);
  };

  useEffect(() => {
    if (userPostData) {
      handlePageData(userPostData);
    }
  }, [pageNumber, userPostData]);

  return { postList };
};

export default usePostList;
