export const getFileName = (file) => {
  return file.split('alt')[0]?.split('-').slice(-1)[0].slice(0, -1);
};
