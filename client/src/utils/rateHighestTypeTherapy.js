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

  const finalResult = [
    { rate: result.CBT, text: 'CBT' },
    { rate: result.PD, text: 'PD' },
    { rate: result.Hu, text: 'Hu' },
    { rate: result.In, text: 'In' },
  ];

  const maxValue = Math.max(...finalResult.map(o => o.rate), 0);

  return finalResult
    .filter(element => element.rate === maxValue)
    .map(element => element.text);
};

export default rate;
