import React, { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import styled from 'styled-components';

const StyledFormControl = styled(FormControl)`
  .MuiInputBase-root {
    border: none;
  }
`;

function SelectBank() {
  const [bankValue, setbankValue] = useState('');
  // event 객체 받아서 
  const selectedBank = (e) => {
    e.preventDefault();
    setbankValue(e.target.value);
  };

  return (
    <StyledFormControl fullWidth>
      <InputLabel id='demo-simple-select-small-label'>은행명</InputLabel>
      <Select 
        labelId='demo-simple-select-small-label' 
        id='demo-select-small'
        onChange={selectedBank}
      >
        <MenuItem value={'하나'}>하나은행</MenuItem>
        <MenuItem value={'카카오뱅크'}>카카오뱅크</MenuItem>
        <MenuItem value={'수협'}>수협은행</MenuItem>
      </Select>
    </StyledFormControl>
  );
}

export default SelectBank;