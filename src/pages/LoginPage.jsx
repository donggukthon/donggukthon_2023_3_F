import React from "react";
import styled from "styled-components";
import snowmanRoot from "../assets/images/snowman_tree.png";
import kakaologinRoot from "../assets/images/kakao_login.png";
import gloveRoot from "../assets/images/glove.png";
import Navbar from "../components/common/Navbar";

function LoginPage() {
  return (
    <>
      <Navbar />
      <SnowmanImage>
        <img src={snowmanRoot} width="200px" />
      </SnowmanImage>
      <WhiteBox>
        <TextPart>
          <text>Create Yout Account!</text>
        </TextPart>
      </WhiteBox>
      <LoginButton></LoginButton>
      <GloveImage>
        <img src={gloveRoot} width="200px" />
      </GloveImage>
    </>
  );
}

const SnowmanImage = styled.div`
  background-color: none;
  margin: 30px 0 0 30px;
  position: absolute;
  display: flex;
  justify-content: center;
  z-index: 1;
`;

const GloveImage = styled.div`
  background-color: none;
  margin: -50px 0 0 180px;
  position: absolute;
  display: flex;
  justify-content: center;
  z-index: 1;
`;

const TextPart = styled.div`
  border: none;
  position: relative;
  display: flex;
  margin-top: 40px;

  text {
    font-family: "niceFont";
    font-size: 20px;
    font-weight: 700;
    // 이거 왜 색깔 적용이 안될까요 언니 ...
    color: black;
  }
`;

const WhiteBox = styled.div`
  width: 300px;
  height: 300px;
  background-color: white;
  opacity: 60%;
  border-radius: 15px;
  margin: 190px auto 0 auto;
  position: relative;
  /* overflow-x: auto; */
  display: flex;
  justify-content: center;
  z-index: 0;
`;

const LoginButton = styled.button`
  width: 220px;
  height: 35px;
  background: none;
  border: none;
  border-radius: 10px;
  font-family: "Godo", sans-serif;
  font-size: 17px;
  color: white;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 350px;
  left: 393px;

  cursor: pointer;
  &:active,
  &:hover {
    /* opacity: 100%; */
  }

  image {
    z-index: 1;
  }
`;

export default LoginPage;
