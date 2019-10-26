import React from 'react';
import HeaderStyle from './style';
import logo from '../../../../assets/white_logo1.svg';

const header = () => {
  return (
    <HeaderStyle>
      <h4>back</h4>
      <img src={logo} alt="shrinc logo" />
    </HeaderStyle>
  );
};
export default header;
