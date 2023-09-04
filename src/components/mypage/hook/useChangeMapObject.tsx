import { useEffect, useState } from 'react';
import { UserPostListType } from '../organism/type';

const useChangeMapObject = (data: UserPostListType | undefined) => {
  const [mapObject, setMapObject] = useState<Map<number, []>>();

  useEffect(() => {
    const mapData = new Map();

    let mapObjectIndex = 0;

    if (Array.isArray(data)) {
      for (let mapObjectKey = 0; mapObjectKey <= Math.floor(data.length / 9); mapObjectKey++) {
        mapData.set(mapObjectKey + 1, data.slice(mapObjectIndex, mapObjectIndex + 9));
        mapObjectIndex += 9;
      }

      setMapObject(mapData);
    }
  }, [data]);

  return [mapObject];
};

export default useChangeMapObject;
