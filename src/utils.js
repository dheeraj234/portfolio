export const getImageUrl = (path) => {
  console.log("THE PATH",path);
  return `../../../assets/${path}`;
  //return new URL(`../../../assets/${path}`, import.meta.url).href;
};
