import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import styled from 'styled-components';

const StyledFormControl = styled(FormControl)`
  .MuiInputBase-root {
    border: none;
  }
`;

function SelectBank() {
  return (
    <StyledFormControl fullWidth>
      <InputLabel id='demo-simple-select-small-label'>은행명</InputLabel>
      <Select labelId='demo-simple-select-small-label' id='demo-select-small'>
        <MenuItem value={10}>하나은행</MenuItem>
        <MenuItem value={20}>카카오뱅크</MenuItem>
        <MenuItem value={30}>수협은행</MenuItem>
      </Select>
    </StyledFormControl>
  );
}

export default SelectBank;