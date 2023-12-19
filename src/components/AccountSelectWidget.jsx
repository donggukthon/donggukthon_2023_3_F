import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import styled from "styled-components";

function SelectWidget() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <WidgetPosition>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 300 }}>
        <InputLabel id="demo-simple-select-standard-label">은행을 선택하세요</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={age}
          onChange={handleChange}
          label="Age"
        >
          <MenuItem value={10}>국민은행</MenuItem>
          <MenuItem value={20}>하나은행</MenuItem>
          <MenuItem value={30}>카카오뱅크</MenuItem>
        </Select>
      </FormControl>
    </WidgetPosition>
  );
}

const WidgetPosition = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 0;
  margin: 0;
`;

export default SelectWidget;