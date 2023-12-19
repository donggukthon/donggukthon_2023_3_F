import React from "react";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import presentRoot from "../assets/images/present.png";
import UserGuideWidget from "../components/UserGuideWidget";

function MainPage() {
  const navigate = useNavigate();

  const onClickStart = () => {
    navigate("/login");
  };

  return (
    <>
      <ImagePart>
        <img src={presentRoot} width="180px" />
      </ImagePart>
      <TextPart>
        <text>
          Create Bread
          <br />
          and Donate!
        </text>
      </TextPart>
      <WhiteBox>
        <UserGuideWidgetContainer>
          <UserGuideWidget />
        </UserGuideWidgetContainer>
      </WhiteBox>
      <StartButton onClick={onClickStart}>시작하기</StartButton>
    </>
  );
}

const ImagePart = styled.div`
  background-color: none;
  border-radius: 100px;
  margin: 30px 0 0 0;
  position: relative;
  display: flex;
  justify-content: center;

  img {
    margin: 0 auto 0 auto;
  }
`;

const TextPart = styled.div`
  border: none;
  position: relative;
  display: flex;
  justify-content: center;

  text {
    font-family: "lineFont";
    font-size: 30px;
    font-weight: 700;
  }
`;

const WhiteBox = styled.div`
  width: 250px;
  height: 250px;
  background-color: white;
  opacity: 60%;
  border-radius: 15px;
  margin: 20px auto;
  position: relative;
  display: flex;
  overflow-x: auto;
  padding: 20px;
`;

// UserGuideWidget의 너비, 높이 조정
const UserGuideWidgetContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const StartButton = styled.button`
  width: 250px;
  height: 45px;
  background: var(--button-bg-color, #ed3333);
  border: none;
  border-radius: 15px;
  font-family: "Godo", sans-serif;
  font-size: 17px;
  color: white;
  margin: 0 auto;
  padding: auto 0 auto 0;
  box-shadow: 3px 3px 3px 0px gray;
  opacity: 90%;
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  &:active,
  &:hover {
    opacity: 100%;
  }

  // 고도체
  @font-face {
    font-family: "Godo";
    font-style: normal;
    font-weight: 700;
    src: url("//cdn.jsdelivr.net/korean-webfonts/1/corps/godo/Godo/GodoB.woff2") format("woff2"), url("//cdn.jsdelivr.net/korean-webfonts/1/corps/godo/Godo/GodoB.woff") format("woff");
  }
`;

export default MainPage;
