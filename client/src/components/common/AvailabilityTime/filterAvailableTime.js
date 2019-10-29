export default table => {
  return table.filter(item => {
    return item.from && item.to > 3;
  });
};
