import React from 'react';
import { useNavigate } from 'react-router-dom';
import { styled, Grid, Button } from '@mui/material';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import Progressbar from '../components/Progressbar';

function HomePage() {
	const navigate = useNavigate();
	const day = 2;
	const totalAmount = 3290;
	const formattedTotalAmount = totalAmount.toLocaleString();
	const progress = 50;

	const onClickBtn = () => {
		navigate('/history');
	};

	return (
		<>
			<Navbar />
			<Container>
				<div style={{ margin: '0px 30px 40px 30px' }}>
					<Progressbar value={progress} />
				</div>
				<Title>{day}일차</Title>
				<div style={{ margin: '10px 0px' }}>무슨무슨재단</div>
				<div style={{ margin: '10px 0px' }}>현재까지 모인 금액</div>
				<Title>{formattedTotalAmount}원</Title>
				<Button
					onClick={onClickBtn}
					sx={{
						margin: '40px 0px',
						background: '#ED3333',
						width: '280px',
						height: '50px',
						padding: '12px 60px',
						color: 'white',
						borderRadius: '16px',
						'&:hover': {
							background: 'rgba(237, 51, 51, 0.50)',
						},
					}}>
					기부 내역 조회
				</Button>
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
	textAlign: 'center',
	alignItems: 'center',
	color: '#312E26',
	fontSize: '28px',
	fontWeight: 700,
	fontFamily: 'titleFont',
});

export default HomePage;
