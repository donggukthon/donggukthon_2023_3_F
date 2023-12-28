import React from 'react';
import LinearProgress from '@mui/material/LinearProgress';

function Progressbar({ value }) {
  return (
    <>
      <div>
        <LinearProgress
          variant="determinate"
          value={value}
          sx={{
            backgroundColor: '#e0e0e0',
            height: '15px',
            borderRadius: '10px',
            '& .MuiLinearProgress-bar': {
              backgroundColor: '#ff0000',
            },
          }}
        />
      </div>
    </>
  );
}
export default Progressbar;
