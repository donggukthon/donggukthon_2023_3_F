import React from 'react';
import styled from 'styled-components';
import presentRoot from '../assets/images/present.png';

function MainPage() {
  return (
    <>
      <ImagePart>
        <img src={presentRoot} width='180px' padding='0'/>
      </ImagePart>
      <TextPart>
        <text>Create Bread<br/>and Donate!</text>
      </TextPart>
      <WhiteBoxContainer>
        <WhiteBox />
        <WhiteBox />
      </WhiteBoxContainer>
      <StartButton>시작하기</StartButton>
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
    font-family: 'Rampart One', sans-serif;
    font-size: 30px;
    font-weight: 700;
  }

  @font-face {
    font-family: "RampartOne";
    font-style: normal;
    font-weight: 400;
    src: url('https://fonts.googleapis.com/css2?family=Rampart+One&display=swap') format('ttf');
  }
`;

const WhiteBoxContainer = styled.div`
  display: flex;
  overflow-x: auto;
  padding: 20px; 
`;

const WhiteBox = styled.div`
  width: 250px;
  height: 250px;
  background-color: white;
  opacity: 60%;
  border-radius: 15px;
  margin: auto auto 20px auto;
  position: relative;
  z-index: 0;
`;

const StartButton = styled.button`
  width: 250px;
  height: 45px;
  background: var(--button-bg-color, #ED3333);
  border: none;
  border-radius: 15px 15px 15px 15px;
  font-family: 'Godo', sans-serif;
  font-size: 20px;
  color: white;
  margin: 0 auto 0 auto;
  padding: auto 0 auto 0;
  box-shadow: 3px 3px 3px 0px gray;
  opacity: 90%;
  display: flex;
  justify-content: center;

  cursor: pointer;
  &:active,
  &:hover {
    opacity: 100%;
  }

  // 고도체
  @font-face {  
    font-family: 'Godo';
    font-style: normal;
    font-weight: 700;
    src: url('//cdn.jsdelivr.net/korean-webfonts/1/corps/godo/Godo/GodoB.woff2') format('woff2'), url('//cdn.jsdelivr.net/korean-webfonts/1/corps/godo/Godo/GodoB.woff') format('woff');
  }
`;

export default MainPage;