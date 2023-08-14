import { useEffect, useState } from 'react';

import { createPageDataArray } from '../../../utils/createPageDataArray';

const usePostListSize = () => {
  const [postListSize, setPostListSize] = useState(0);

  const pageData = createPageDataArray();

  useEffect(() => {
    setPostListSize(pageData.size);
  }, []);

  return { postListSize };
};

export default usePostListSize;
