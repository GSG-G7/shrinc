import ratesForAllQusetions from './ratesForAllQuestions';

const rate = answers => {
  const getValues = Object.values(answers);
  const result = { CBT: 0, PD: 0, Hu: 0, In: 0, C: 0, STPD: 0 };
  ratesForAllQusetions.forEach((rateForSingleQuestion, id) => {
    const selectedOption = getValues[id];
    if (selectedOption) {
      result.CBT += rateForSingleQuestion[selectedOption].CBT;
      result.PD += rateForSingleQuestion[selectedOption].PD;
      result.Hu += rateForSingleQuestion[selectedOption].Hu;
      result.In += rateForSingleQuestion[selectedOption].In;
      result.C += rateForSingleQuestion[selectedOption].C;
      result.STPD += rateForSingleQuestion[selectedOption].STPD;
    }
  });

  return result;
};

export default rate;
