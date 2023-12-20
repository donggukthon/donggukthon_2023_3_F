import {useNavigate, useLocation} from "react-router-dom";
import React, {useState, useEffect} from "react";
import {styled, Grid, Button, TextField, Alert, AlertTitle} from "@mui/material";
import snowmanRoot from "../assets/images/snowman_tree.png";
import gloveRoot from "../assets/images/glove.png";
import Navbar from "../components/common/Navbar";
import instance from "../api/axios";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successLogin, setSuccessLogin] = useState(true);

  const navigate = useNavigate();
  const onClickLogin = () => {
    navigate("/account");
  };

  const onClickSignup = () => {
    navigate("/signup");
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  // password input 값 변경 시 실행되는 함수
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await instance.post(
        "/accounts/login",
        {
          email: email,
          password: password,
        },
        {
          withCredentials: true,
        }
      );

      console.log(response);

      // 토큰 값을 가져옴
      const token = response.data.accessToken;
      const userName = response.data.userName;
      // 토큰을 LocalStorage에 저장
      localStorage.setItem("token", token);
      // 유저 이름을 LocalStorage에 저장
      localStorage.setItem("userName", userName);

      // 로그인 성공 처리
      console.log("로그인 성공:");

      // 메인으로 이동
      navigate("/account");
    } catch (error) {
      // 로그인 실패 처리
      setSuccessLogin(false);
      console.error("로그인 실패:");
    }
    sessionStorage.setItem("email", email);
  };
  return (
    <>
      <Navbar />
      <SnowmanImage>
        <img src={snowmanRoot} width="200px" />
      </SnowmanImage>

      <Grid sx={{width: "300px", height: "350px", backgroundColor: "white", opacity: "60%", borderRadius: "15px", display: "flex", flexDirection: "column", margin: "160px 40px 50px 40px"}}>
        <Grid sx={{display: "flex", justifyContent: "center", textAlign: "center", margin: "50px 22px 0px 30px"}}>
          <Grid sx={{fontFamily: "niceFont", fontSize: "20px", fontWeight: 700}}>Sign in Your Account!</Grid>
        </Grid>
        <form onSubmit={handleFormSubmit}>
          <Grid sx={{display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "center", alignItems: "center", margin: "15px 0px", gap: "10px"}}>
            <TextField sx={{background: "transparent"}} id="id" type="email" label="이메일" variant="outlined" size="small" />
            <TextField sx={{backgroundColor: "transparent"}} id="pw" type="password" label="패스워드" size="small" />
            {/* {successLogin ? null : (
            <Alert severity="error" style={{marginLeft: -20, width: "260px"}}>
              <AlertTitle>로그인 실패</AlertTitle>
              <strong>아이디</strong>와 <strong>비밀번호</strong>를 확인해보세요.
            </Alert>
          )} */}
          </Grid>

          <Grid sx={{display: "flex", flexDirection: "column", justifyContent: "flex-end", textAlign: "right", marginRight: "20px"}}>
            <Grid sx={{fontSize: "14px", marginTop: "2px", color: "#757575"}}>계정이 없으신가요?</Grid>
            <Button sx={{marginLeft: "190px", color: "#B87514", fontSize: "14px", width: "90px"}} onClick={onClickSignup}>
              회원가입
            </Button>
          </Grid>
          <Grid sx={{marginTop: "20px", display: "flex", justifyContent: "center", textAlign: "center"}}>
            <Button
              type="submit"
              sx={{
                opacity: "100%",
                margin: "0px 0px",
                background: "#ED3333",
                width: "180px",
                height: "40px",
                padding: "12px 60px",
                color: "white",
                borderRadius: "16px",
                "&:hover": {
                  background: "rgba(237, 51, 51, 0.50)",
                },
              }}
            >
              로그인
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
  margin: "30px 0px 0px 30px",
  position: "absolute",
  display: "flex",
  justifyContent: "center",
  zIndex: 1,
});

const GloveImage = styled(Grid)({
  margin: "-90px 0px 0px 180px",
  position: "absolute",
  display: "flex",
  justifyContent: "center",
  zIndex: 1,
});
export default LoginPage;
