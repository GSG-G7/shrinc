import React from 'react';

import './style.css';
import Card from './Card';
import Contact from './Contact';
import Location from './Location';

export default () => {
  return (
    <section>
      <Card />
      <Contact />
      <Location />
    </section>
  );
};
