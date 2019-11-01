import React from 'react';
import Q from './Question';

const renderSteps = ({ onChange, state, options }) => [
  {
    title: '',
    content: (
      <>
        <Q
          keyValue="q1"
          onChange={onChange}
          value={state.value.Q1}
          options={options}
          id="Q1"
        />
      </>
    ),
  },
  {
    title: '',
    content: (
      <Q
        keyValue="q2"
        onChange={onChange}
        value={state.value.Q2}
        options={options}
        id="Q2"
      />
    ),
  },
  {
    title: '',
    content: (
      <Q
        keyValue="q3"
        onChange={onChange}
        value={state.value.Q3}
        options={options}
        id="Q3"
      />
    ),
  },
  {
    title: '',
    content: (
      <Q
        keyValue="q4"
        onChange={onChange}
        value={state.value.Q4}
        options={options}
        id="Q4"
      />
    ),
  },
  {
    title: '',
    content: (
      <Q
        keyValue="q5"
        onChange={onChange}
        value={state.value.Q5}
        options={options}
        id="Q5"
      />
    ),
  },
  {
    title: '',
    content: (
      <Q
        keyValue="q6"
        onChange={onChange}
        value={state.value.Q6}
        options={options}
        id="Q6"
      />
    ),
  },
  {
    title: '',
    content: (
      <Q
        keyValue="q7"
        onChange={onChange}
        value={state.value.Q7}
        options={options}
        id="Q7"
      />
    ),
  },
  {
    title: '',
    content: (
      <Q
        keyValue="q8"
        onChange={onChange}
        value={state.value.Q8}
        options={options}
        id="Q8"
      />
    ),
  },
];

export default renderSteps;
