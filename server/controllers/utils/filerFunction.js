exports.getFilteredTherapist = async ({
  city, type, remote, priceRange,
}, validData) => {
  // eslint-disable-next-line max-len
  const filteredData = validData.filter((e) => (type ? e.fields.type === type : true) && (city ? e.fields.city === city : true) && (remote ? e.fields.remote === remote : true) && (priceRange ? e.fields.priceRange === priceRange : true));
  return filteredData;
};
