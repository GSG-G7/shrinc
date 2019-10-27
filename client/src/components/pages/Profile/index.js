import React from 'react';

import './style.css';
import Card from './Card';
import Contact from './Contact';
import Location from './Location';

export default () => {
  return (
    <section>
      <Card />
      <h1>Availablity</h1>
      <Contact />
      <Location />
    </section>
  );
};
