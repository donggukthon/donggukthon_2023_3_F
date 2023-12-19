import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { styled, Grid, Button, Img } from '@mui/material';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

function MyPage() {
	return (
		<>
			<Navbar />
			<Container>
				<div style={{ margin: '0px 0px 5px 10px' }}>로그인 계정</div>
				<Bar>
					<Grid sx={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
						<div>이미지</div>
						<Grid sx={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
							<div style={{ color: 'black', fontSize: '18px', fontWeight: 600 }}>김혜연님</div>
							<div style={{ fontSize: '14px' }}>hyeyeonismm@gmail.com</div>
						</Grid>
					</Grid>
				</Bar>
			</Container>
			<Container>
				<div style={{ margin: '0px 0px 5px 10px' }}>계좌 정보 수정</div>
				<Bar>
					<div>예금주명</div>
					<div>은행명</div>
					<div>계좌번호</div>
				</Bar>
			</Container>
			<Container>
				<div style={{ margin: '0px 0px 5px 10px' }}>기부 정보 수정</div>
				<Bar>
					<div>기부 요일</div>
					<div>기부내역조회</div>
				</Bar>
				<Button
					sx={{
						margin: '40px 0px 0px 30px',
						background: '#ED3333',
						width: '280px',
						height: '50px',
						padding: '12px 60px',
						color: 'white',
						borderRadius: '16px',
						'&:hover': {
							background: 'rgba(237, 51, 51, 0.50)',
						},
					}}
				>
					수정하기
				</Button>
			</Container>

			<Footer />
		</>
	);
}

const Container = styled(Grid)({
	color: 'rgba(0, 0, 0, 0.45)',
	margin: '0px 25px 30px 25px',
});

const Bar = styled(Grid)({
	width: '341px',
	borderRadius: '30px',
	background: 'rgba(255, 255, 255, 0.60)',
	padding: '20px',
});

export default MyPage;
