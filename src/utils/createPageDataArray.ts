import { MockData } from './MockData';

export const createPageDataArray = () => {
  const mapObject = new Map();
  let mapObjectIndex = 0;

  for (let mapObjectKey = 0; mapObjectKey <= MockData.length / 9; mapObjectKey++) {
    mapObject.set(mapObjectKey + 1, MockData.slice(mapObjectIndex, mapObjectIndex + 9));
    mapObjectIndex += 9;
  }

  return mapObject;
};
