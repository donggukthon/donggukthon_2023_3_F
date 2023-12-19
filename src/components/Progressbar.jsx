import React from 'react';
import LinearProgress from '@mui/material/LinearProgress';

function Progressbar({ value }) {
	return (
		<>
			<div>
				<LinearProgress variant='determinate' value={value} />
			</div>
		</>
	);
}
export default Progressbar;
