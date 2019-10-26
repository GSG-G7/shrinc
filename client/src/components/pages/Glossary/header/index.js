import React from 'react';
import { HeaderStyle, Title, Description, Table } from './style';
import logo from '../../../../assets/white_logo1.svg';
import table from '../../../../assets/table.svg';

const header = () => {
  return (
    <div>
      <HeaderStyle>
        <h4>back</h4>
        <img src={logo} alt="shrinc logo" />
      </HeaderStyle>
      <Title>Glossary</Title>
      <Description>You can find Glossary of Therap here to know .</Description>
      <Table src={table} alt="table Image" />
    </div>
  );
};
export default header;
