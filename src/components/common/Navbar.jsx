import React from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { styled, Button } from '@mui/material';

function Navbar() {
	const navigate = useNavigate();
	const onClickNav = () => {
		navigate(-1);
	};
	return (
		<>
			<div style={StyledNavbar}>
				<IconButton onClick={onClickNav}>
					<ArrowBackIosNewIcon />
				</IconButton>
			</div>
		</>
	);
}

const StyledNavbar = {
	margin: '30px 0px',
};

const IconButton = styled(Button)({
	display: 'flex',
	textAlign: 'center',
	alignItems: 'center',
	color: '#989898',
});

export default Navbar;
