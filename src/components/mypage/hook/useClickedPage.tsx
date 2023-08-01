import { useState } from 'react';

const useClickedPage = () => {
  const [pageNumber, setPageNumber] = useState(1);

  const handlePageNumber = (page: number) => {
    setPageNumber(page);
  };

  return { pageNumber, handlePageNumber };
};

export default useClickedPage;
