import { useNavigate, useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import {
  styled,
  Grid,
  Button,
  TextField,
  Alert,
  AlertTitle,
} from '@mui/material';
import snowmanRoot from '../assets/images/snowman_tree.png';
import kakaologinRoot from '../assets/images/kakao_login.png';
import gloveRoot from '../assets/images/glove.png';
import Navbar from '../components/common/Navbar';
import instance from '../api/axios';

function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signupData, setSignupData] = useState({
    //회원가입 데이터
    email: '',
    password: '',
  });

  const navigate = useNavigate();
  // userName input 값 변경 시 실행되는 함수
  // const handleNameChange = (event) => {
  //   setSignupData({...signupData, name: event.target.value});
  // };

  // email input 값 변경 시 실행되는 함수
  const handleEmailChange = async e => {
    const email = e.target.value;
    setSignupData({ ...signupData, email: email });
  };

  // password input 값 변경 시 실행되는 함수
  const handlePasswordChange = event => {
    setSignupData({ ...signupData, password: event.target.value });
  };

  const postSignupData = async event => {
    console.log('회원가입 데이터:', signupData);
    try {
      const response = await instance.post('/accounts/signup', signupData);

      if (response.status == 200) {
        alert('회원가입이 완료되었습니다.');
        setSignupData({
          email: '',
          password: '',
        });
        navigate('/login');
      } else if (
        response.data.message ==
        '회원 가입을 실패했습니다. 이메일이 이미 존재합니다.'
      ) {
        alert('회원 가입을 실패했습니다. 이메일이 이미 존재합니다.');
      }
    } catch (error) {
      console.log('회원가입 실패 ');
      alert('회원가입 실패 ');
    }
  };

  return (
    <>
      <Navbar />
      <SnowmanImage>
        <img src={snowmanRoot} width="200px" alt="snowman" />
      </SnowmanImage>

      <Grid
        sx={{
          width: '300px',
          height: '350px',
          backgroundColor: 'white',
          opacity: '60%',
          borderRadius: '15px',
          display: 'flex',
          flexDirection: 'column',
          margin: '180px 40px 50px 40px',
        }}
      >
        <Grid
          sx={{
            display: 'flex',
            justifyContent: 'center',
            textAlign: 'center',
            margin: '50px 22px 0px 30px',
          }}
        >
          <Grid
            sx={{ fontFamily: 'niceFont', fontSize: '20px', fontWeight: 700 }}
          >
            Create Your Account!
          </Grid>
        </Grid>
        <form onSubmit={postSignupData}>
          <Grid
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              textAlign: 'center',
              alignItems: 'center',
              margin: '15px 0px',
              gap: '10px',
            }}
          >
            {/* <TextField sx={{background: "transparent"}} id="name" type="name" label="이름" variant="outlined" size="small" onChange={handleNameChange} /> */}
            <TextField
              sx={{ background: 'transparent' }}
              id="id"
              type="email"
              label="이메일"
              variant="outlined"
              size="small"
              onChange={handleEmailChange}
            />
            <TextField
              sx={{ backgroundColor: 'transparent' }}
              id="pw"
              type="password"
              label="패스워드"
              size="small"
              onChange={handlePasswordChange}
            />
            {/* {successLogin ? null : (
            <Alert severity="error" style={{marginLeft: -20, width: "260px"}}>
              <AlertTitle>로그인 실패</AlertTitle>
              <strong>아이디</strong>와 <strong>비밀번호</strong>를 확인해보세요.
            </Alert>
          )} */}
            <Button
              type="submit"
              sx={{
                opacity: '100%',
                margin: '20px 0px',
                background: '#ED3333',
                width: '180px',
                height: '40px',
                padding: '12px 60px',
                color: 'white',
                borderRadius: '16px',
                '&:hover': {
                  background: 'rgba(237, 51, 51, 0.50)',
                },
              }}
            >
              회원가입
            </Button>
          </Grid>
        </form>
      </Grid>
      <GloveImage>
        <img src={gloveRoot} width="200px" />
      </GloveImage>
    </>
  );
}

const SnowmanImage = styled(Grid)({
  margin: '30px 0px 0px 30px',
  position: 'absolute',
  display: 'flex',
  justifyContent: 'center',
  zIndex: 1,
});

const GloveImage = styled(Grid)({
  margin: '-90px 0px 0px 180px',
  position: 'absolute',
  display: 'flex',
  justifyContent: 'center',
  zIndex: 1,
});

export default SignupPage;
