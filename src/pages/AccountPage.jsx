import React from "react";
import styled from "styled-components";
import Navbar from '../components/common/Navbar';
import SelectWidget from "../components/AccountSelectWidget";
import { useNavigate } from "react-router-dom";

function AccountPage() {
  const navigate = useNavigate();

  const onClickNext = () => {
    navigate("/day");
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

        <FixedText>예금주명</FixedText>
        <UserInputPart>
        </UserInputPart>

        <FixedText>은행 선택</FixedText>
        <UserInputBox>
          <SelectWidgetWrapper>
            <SelectWidget/>
          </SelectWidgetWrapper>
        </UserInputBox>

        <FixedText>계좌 번호</FixedText>
        <UserInputPart>
        </UserInputPart>
      </PageState>
      <StartButton onClick={onClickNext}>다음</StartButton>
    </>
  );
}

const PageState = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: auto;
`;

const CommentPart = styled.div`
  border: none;
  position: relative;
  text-align: center;
  margin-bottom: 30px;
  text {
    font-family: "niceFont";
    font-size: 30px;
    font-weight: 700;
    margin: auto;
  }
`;

const FixedText = styled.div`
  font-family: "descriptFont";
  font-size: 18px;
  font-weight: 100;
  color: #4A453A;
  margin-left: 35px;
  margin-bottom: 10px;
`;

const UserInputPart = styled.input`
  background-color: white;
  width: 310px;
  height: 60px;
  border: none;
  border-radius: 10px;
  opacity: 60%;
  margin-left: 35px;
  margin-bottom: 30px;
`;

const UserInputBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 310px;
  height: 60px;
  border: none;
  border-radius: 10px;
  opacity: 60%;
  margin-left: 35px;
  margin-bottom: 30px;
  position: relative;
  text-align: center;
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

const SelectWidgetWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
`;

export default AccountPage;
