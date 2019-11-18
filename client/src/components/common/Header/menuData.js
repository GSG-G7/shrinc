import React from 'react';
import {
  HomeIcone,
  TypesTherapist,
  Questionnaire,
  Search,
  About,
} from '../../assets';

const menuData = [
  {
    label: 'Home',
    url: '/',
    icon: <HomeIcone />,
  },
  {
    label: 'Types of therapy',
    url: '/types',
    icon: <TypesTherapist />,
  },
  {
    label: 'Glossary',
    url: '/glossary',
    icon: <TypesTherapist />,
  },
  {
    label: 'Explore therapies',
    url: '/questionnaire',
    icon: <Questionnaire />,
  },
  {
    label: 'Therapist search',
    url: '/filter',
    icon: <Search />,
  },
  {
    label: 'About',
    url: '/about',
    icon: <About />,
  },
];

export default menuData;
