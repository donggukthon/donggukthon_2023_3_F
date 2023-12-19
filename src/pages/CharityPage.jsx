import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { styled, Grid, Button, Img } from '@mui/material';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

function CharityPage() {
	const navigate = useNavigate();

	const onClickedCharity = () => {
		navigate('/detail');
	};
	return (
		<>
			<Navbar />
			<Container sx={{ lineHeight: 1.5 }}>
				<Title>Charity</Title>
				<div>마음을 나눌 수 있는 단체들</div>
				<div>단체를 클릭하여 각 단체별 누적 기부 금액을 확인하세요!</div>
				<CharityContainer>
					<Grid sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center', alignItems: 'center' }}>
						<Charity onClick={onClickedCharity}>
							<div>이미지</div>
						</Charity>
						<Text onClick={onClickedCharity}>어린이</Text>
					</Grid>
					<Grid sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center', alignItems: 'center' }}>
						<Charity onClick={onClickedCharity}>
							<div>이미지</div>
						</Charity>
						<Text onClick={onClickedCharity}>독거노인</Text>
					</Grid>
				</CharityContainer>

				<CharityContainer>
					<Grid sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center', alignItems: 'center' }}>
						<Charity onClick={onClickedCharity}>
							<div>이미지</div>
						</Charity>
						<Text onClick={onClickedCharity}>난민</Text>
					</Grid>
					<Grid sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center', alignItems: 'center' }}>
						<Charity onClick={onClickedCharity}>
							<div>이미지</div>
						</Charity>
						<Text onClick={onClickedCharity}>저소득층</Text>
					</Grid>
				</CharityContainer>
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

const CharityContainer = styled(Grid)({
	display: 'flex',
	gap: 10,

	flexDirection: 'row',
	justifyContent: 'space-between',
	margin: '20px',
});

const Charity = styled(Button)({
	background: 'rgba(255, 255, 255, 0.61)',
	textAlign: 'center',
	alignItems: 'center',
	width: '170px',
	height: '175px',
	marginBottom: '10px',
	borderRadius: '10px',
	'&:hover': {
		background: 'rgba(255, 255, 255, 0.61)',
	},
});

const Text = styled(Button)({
	display: 'flex',

	height: '30px',
	textAlign: 'center',
	alignItems: 'center',
	color: '#312e26',
	fontSize: '20px',
	fontWeight: 600,
	fontFamily: 'titleFont',
});

export default CharityPage;
