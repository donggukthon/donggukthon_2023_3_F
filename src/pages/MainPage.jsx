import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import presentRoot from '../assets/images/present.png';
import UserGuideWidget from '../components/UserGuideWidget';
import RedButton from '../components/common/RedButton';

function MainPage() {
  const navigate = useNavigate();

  const onClickStart = () => {
    navigate('/login');
  };

  return (
    <>
      <ImagePart>
        <img src={presentRoot} width="180px" alt="img" />
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
      <RedButton onClickFunc={onClickStart}>시작하기</RedButton>
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
  text-align: center;

  text {
    font-family: 'lineFont';
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

export default MainPage;
