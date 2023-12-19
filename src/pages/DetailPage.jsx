import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { styled, Grid, Button, Img } from '@mui/material';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

function DetailPage() {
	const fishbreadAmount = 129;
	return (
		<>
			<Navbar />
			<Container>
				<Title>저소득층</Title>
				<Grid sx={{ lineHeight: 1.5, marginBottom: '40px' }}>
					<div>총 {fishbreadAmount}마리의 붕어빵이 기부되었어요!</div>
					<div>
						모인 붕어빵은 여러분의 이름으로 <br />
						저소득층 단체에 기부됩니다
					</div>
					<div>연말동안 여러분의 따뜻한 마음을 전달해보세요!</div>
				</Grid>
			</Container>
			<Footer />
		</>
	);
}

const Container = styled(Grid)({
	textAlign: 'center',
	alignItems: 'center',
});

const Title = styled(Grid)({
	margin: '40px 0px',
	textAlign: 'center',
	alignItems: 'center',
	color: '#312E26',
	fontSize: '28px',
	fontWeight: 700,
	fontFamily: 'titleFont',
});

export default DetailPage;
