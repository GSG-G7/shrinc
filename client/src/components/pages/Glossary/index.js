import React from 'react';
import { Title, Description, Table } from './style';
import table from '../../../assets/table.svg';

function glossary() {
  return (
    <div>
      <Title>Glossary</Title>
      <Description>You can find Glossary of Therap here to know .</Description>
      <Table src={table} alt="table Image" />
    </div>
  );
}

export default glossary;
