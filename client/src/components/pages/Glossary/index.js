import React from 'react';
import Header from './header';
import { Title, Description, Table } from './style';
import table from '../../../assets/table.svg';

function glossary() {
  return (
    <div>
      <Header />
      <Title>Glossary</Title>
      <Description>You can find Glossary of Therap here to know .</Description>
      <Table src={table} alt="table Image" />
    </div>
  );
}

export default glossary;
