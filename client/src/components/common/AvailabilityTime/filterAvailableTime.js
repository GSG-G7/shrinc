export default table => {
  return table.filter(item => {
    return item.day.length >= 3 && item.from.length > 3 && item.to.length > 3;
  });
};
