import ratesForAllQusetions from './ratesForAllQuestions';

const rate = answers => {
  const getValues = Object.values(answers);
  const result = { CBT: 0, PD: 0, Hu: 0, In: 0, C: 0, STPD: 0 };
  ratesForAllQusetions.forEach((rateForSingleQuestion, id) => {
    const selectedOptions = getValues[id];
    selectedOptions.forEach(singleOption => {
      const q = rateForSingleQuestion[singleOption];
      Object.keys(q).forEach(key => {
        result[key] += q[key];
      });
    });
  });

  return result;
};

export default rate;
