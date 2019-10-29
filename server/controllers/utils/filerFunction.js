exports.getFilteredTherapist = async ({
  city, types, remote, priceRange,
}, validData) => {
  // eslint-disable-next-line max-len
  const filteredData = validData.filter((e) => (types ? e.fields.types === types : true) && (city ? e.fields.city === city : true) && (remote ? e.fields.remote === remote : true) && (priceRange ? e.fields.priceRange === priceRange : true));
  return filteredData;
};
