import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Navbar from '../components/common/Navbar';
import instance from "../api/axios";

function ChooseDayPage() {
  // 다음 페이지 이동
  const navigate = useNavigate();
  const onClickStart = () => {
    // api 연결
    handleDaySuccess();
    // 화면 이동
    navigate("/home");
  };
  
  // 선택한 요일들 관리 
  const [selectedDays, setSelectedDays] = useState([]);
  const handleDayButtonClick = (day) => {
    if (selectedDays.includes(day)) {
      setSelectedDays(selectedDays.filter((selectedDay) => selectedDay !== day));
    } else {
      setSelectedDays([...selectedDays, day]);
    }
  };

  // API 연결 -> 체크 필요
  // 1. 혹시 이 함수는 동기로 처리되어야 하는지 !
  // 2. res 인자 안 받아도 될 것 같다는 생각이 ... 
  // 3. API 명세에 작성되어 있는 것처럼 "date": selectedDays로 문자열로 작성해도 되는지 !
  const handleDaySuccess = async (res) => {
    console.log(res.credential);
    try {
      const response = await instance.put("/api/v1/date", {
        "date": selectedDays,
      });
      console.log(response.data);
    } catch (err) {
      console.error("Error: ", err);
    }
  };

  return (
    <>
      <Navbar />
      <PageState>
        <CommentPart>
          <text>Share your warmth</text>
          <br/>
          <text>With our app</text>
        </CommentPart>
      </PageState>
      <FixedBoldText>기부 요일 선택</FixedBoldText>
      <FixedText>선택한 요일 22시에 계좌의  1000원 미만의<br/>자투리 금액이 기부됩니다! </FixedText>
      <DayRow>
      <DayButton
        onClick={() => handleDayButtonClick("MON")}
        selected={selectedDays.includes("mon")}
      >
        MON
      </DayButton>
      </DayRow>
      <DayRow>
        <DayButton
          onClick={() => handleDayButtonClick("TUE")}
          selected={selectedDays.includes("tue")}
        >
          TUE
        </DayButton>
        <DayButton
          onClick={() => handleDayButtonClick("WED")}
          selected={selectedDays.includes("wed")}
        >
          WED
        </DayButton>
      </DayRow>
      <DayRow>
        <DayButton
          onClick={() => handleDayButtonClick("THU")}
          selected={selectedDays.includes("thu")}
        >
          THU
        </DayButton>
        <DayButton
          onClick={() => handleDayButtonClick("FRI")}
          selected={selectedDays.includes("fri")}
        >
          FRI
        </DayButton>
        <DayButton
          onClick={() => handleDayButtonClick("SAT")}
          selected={selectedDays.includes("sat")}
        >
          SAT
        </DayButton>
        <DayButton
          onClick={() => handleDayButtonClick("SUN")}
          selected={selectedDays.includes("sun")}
        >
          SUN
        </DayButton>
      </DayRow>
      <StartButton onClick={onClickStart}>시작하기</StartButton>
    </>
  );
}

const PageState = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
`;

const CommentPart = styled.div`
  border: none;
  position: relative;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 30px;
  text {
    font-family: "niceFont";
    font-size: 30px;
    font-weight: 700;
    margin: auto;
  }
`;

const FixedBoldText = styled.div`
  font-family: "descriptBoldFont";
  font-size: 18px;
  font-weight: 100;
  color: #4A453A;
  text-align: center;
  margin-bottom: 20px;
`;

const FixedText = styled.div`
  font-family: "descriptFont";
  font-size: 13px;
  font-weight: 100;
  color: #4A453A;
  text-align: center;
  margin-bottom: 20px;
`;

const DayButton = styled.button`
  width: 60px;
  height: 60px;
  border: none;
  border-radius: 30px;
  margin: 10px;
  font-family: "descriptBoldFont";
  font-size: 15px;
  opacity: 80%;
  background-color: ${({ selected }) => (selected ? "#EEBD53" : "white")};
  cursor: pointer;

  &:active,
  &:hover {
    background-color: #EEBD53;
    opacity: 100%;
  }
`;

const DayRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
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
  margin: 50px auto 0 auto;
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

export default ChooseDayPage;