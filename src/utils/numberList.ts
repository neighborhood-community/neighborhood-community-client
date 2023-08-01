export const numberList = (postListSize: number) => {
  const postNumberList = [];

  for (let i = 1; i <= postListSize; i++) {
    postNumberList.push(i);
  }

  return postNumberList;
};
