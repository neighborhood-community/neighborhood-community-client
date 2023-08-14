import { useState } from 'react';

const useClickedPage = (postListSize: number) => {
  const [pageNumber, setPageNumber] = useState(1);

  const handlePageNumber = (page: number) => {
    if (page < 1 || page > postListSize) {
      return;
    }

    setPageNumber(page);
  };

  return { pageNumber, handlePageNumber };
};

export default useClickedPage;
