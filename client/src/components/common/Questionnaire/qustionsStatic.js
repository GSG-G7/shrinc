const options = {
  Q1: {
    type: 'multi',
    question: '1. What do you plan to achieve from therapy?',
    answers: [
      'Receiving guidance and strategies to solve my problems ',
      'Understanding my difficulties in relating to other people',
      'Changing my perspective on my difficulties',
      'Just having someone to talk to would help',
      'Understanding parts of me that I am unaware of with the help of a therapist ',
    ],
  },
  Q2: {
    type: 'multi',
    question: '2. What do you look for in a therapist?',
    answers: [
      'A professional who can give me good, impartial advice on my problems ',
      'Someone who truly understands me',
      'A reliable person who I can trust and confide in ',
      'Someone who can challenge me to resolve my interpersonal problems by showing me by blind spots',
    ],
  },
  Q3: {
    type: 'multi',
    question: '3. What do you think is the root cause of your problems?',
    answers: [
      'I am generally happy but something happened recently that has completely thrown me',
      'I have always thought I need to see a therapist but never got round to it. I have no idea where my problems stem from. ',
      'My main source of difficulties are my relationships, past and current ',
      'I have a general sense of dissatisfaction with many aspects of my life at present and do not know why',
      'There is one specific area of my life that I would like to change and this is the cause of my problems',
      'I think my difficulties originate in my upbringing, and my significant relationships growing up',
    ],
  },
  Q4: {
    type: 'single',
    question: '4. Are you happy to talk about your feelings?',
    answers: [
      'Yes, this is what I could come to therapy for',
      'No, I find this really hard',
      'Yes, although I find it challenging at times',
      'No, I prefer thinking about problem solving than my feelings',
    ],
  },
  Q5: {
    type: 'single',
    question: '5. How long would you foresee seeing a therapist?',
    answers: ['Less than one month', '2-4 month', '1 year ', '2-3 years'],
  },
  Q6: {
    type: 'multi',
    question: '6. My ideal therapist would be',
    answers: [
      'Warm, understanding',
      'Knowledgeable, impartial',
      'Kind but straight to the point',
      'Eclectic, unconventional',
    ],
  },
  Q7: {
    type: 'multi',
    question: '7. I am someone who',
    answers: [
      'Is deeply curious about oneself ',
      'Wants to challenge one’s fears',
      'Likes to be in control',
      'Can become easily overwhelmed',
      'Does not want to dig too deep into painful matters',
      'Prefers to address the present than the past',
      'Wants to find the root cause',
    ],
  },
  Q8: {
    type: 'multi',
    question: '8. Therapy for me is',
    answers: [
      'A solution to a problem',
      'An opportunity to transform',
      'A lifeline',
      'A journey into one’s mind',
      'A source of unconditional support',
    ],
  },
  Q9: {
    type: 'single',
    question:
      '9. My difficulties are mostly related to one or more traumatic events in my life, that is/are still very much alive in my thoughts',
    answers: ['Yes', 'No'],
  },
  Q10: {
    type: 'single',
    question:
      '10. I know already that main main problem is a phobia (strong anxiety about a thing or situation that causes me to avoid it) and I would like to focus on treating this symptom in a short time',
    answers: ['Yes', 'No'],
  },
};

export default options;
