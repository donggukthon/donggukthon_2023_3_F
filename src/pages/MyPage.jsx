import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled, Grid, Button, InputLabel, MenuItem, FormControl, Select } from '@mui/material';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import logo from "../assets/images/logo.png";
import instance from "../api/axios";

function MyPage() {
	const navigate = useNavigate();

	// 상태 관리
	const [userData, setUserData] = useState({
		name: '김혜연 ',
		account_num: '3333-84-1238352',
		email: 'hyeyeonkim@naver.com',
	});

	// API 연결 -> 체크 필요
	const handleAccountSuccess = async () => {
		try {
			const response = await instance.get("/api/v1/mypage");
			console.log(response.data);

			setUserData(response.data);	// 상태 업데이트
		} catch (err) {
			console.error("Error: ", err);
		}
	};

	useEffect(() => {
		handleAccountSuccess();
	}, []);

	const userName = userData.name;
	const userAccount = userData.account_num;
	const userEmail = userData.email;

	// 은행 선택 칸 값 설정
  const [bankValue, setBankValue] = useState('');
	const selectedBank = (e) => {
    setBankValue(e.target.value);
  };

	const onClickShow = () => {
		navigate('/history');
	};

	// 은행 선택 dropdown 
  const StyledFormControl = styled(FormControl)`
		.MuiInputBase-root {
			border: none;
		};
	`;
	
	return (
		<>
			<Navbar />
			<Container>
				<div style={{ margin: '10px 0px 10px 10px' }}>로그인 계정</div>
				<Bar>
					<Grid sx={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
						<div><img src={logo} alt='logo' width='35px'/></div>
						<Grid sx={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
							<div style={{ color: 'black', fontSize: '18px', fontWeight: 600 }}>{userName}님</div>
							<div style={{ fontSize: '14px' }}>{userEmail}</div>
						</Grid>
					</Grid>
				</Bar>
			</Container>
			<Container>
				<div style={{ margin: '10px 0px 10px 10px' }}>계좌 정보 수정</div>
				<Bar>
					<GridTitle>예금주명</GridTitle>
					<input
						type='text'
						disabled
						placeholder={userName}
						style={{
							background: 'transparent',
							paddingLeft: '10px',
							border: '1px solid #ddd',
							margin: '10px 0px',
							width: '286px',
							height: '44px',
							borderRadius: '6px',
							'&:focus': {
								border: '1px solid #ddd',
							},
						}}
					/>
					<GridTitle marginBottom='10px'>은행명</GridTitle>
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
					<GridTitle marginTop='10px'>계좌번호</GridTitle>
					<input
						type='text'
						disabled
						placeholder={userAccount}
						style={{
							paddingLeft: '10px',
							background: 'transparent',
							border: '1px solid #ddd',
							margin: '10px 0px',
							width: '286px',
							height: '44px',
							borderRadius: '6px',
							'&:focus': {
								border: '1px solid #ddd',
							},
						}}
					/>
				</Bar>
			</Container>
			<Container>
				<div style={{ margin: '0px 0px 5px 10px' }}>기부 정보 수정</div>
				<Bar>
					<GridTitle>기부 요일</GridTitle>
					<GridTitle>기부내역조회</GridTitle>
					<Button
						onClick={onClickShow}
						sx={{
							color: '#fff',
							margin: '10px 0px',
							background: '#EEBD53',
							borderRadius: '16px',
							width: '300px',
							height: '40px',
							justifyContent: 'center',
							'&:hover': {
								background: '#EEBD53',
							},
						}}>
						기부 내역 조회
					</Button>
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
					}}>
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

const GridTitle = styled(Grid)({
	color: '#312e26',
	fontFamily: 'titleFont',
});

export default MyPage;
