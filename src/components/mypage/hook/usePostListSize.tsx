import { useEffect, useState } from 'react';

const usePostListSize = (data: Map<number, []> | undefined) => {
  const [postListSize, setPostListSize] = useState(0);

  useEffect(() => {
    if (data) {
      setPostListSize(data.size);
    }
  }, [data]);

  return { postListSize };
};

export default usePostListSize;
