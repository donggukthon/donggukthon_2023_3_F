import React, { useState, useMemo } from 'react';
import styled from 'styled-components';
import Navbar from '../components/common/Navbar';
import { InputLabel, MenuItem, FormControl, Select } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import instance from '../api/axios';

// 은행 선택 dropdown
// component 바깥으로 옮겨서 리렌더링 방지
const StyledFormControl = styled(FormControl)`
  .MuiInputBase-root {
    border: none;
  }
`;

function AccountPage() {
  const [bank, setBank] = useState('');

  // 요일 선택 페이지로 이동
  const navigate = useNavigate();
  const onClickNext = () => {
    // api 연결
    handleAccountSuccess();
    // 화면 이동
    navigate('/day');
  };
  // 선택한 은행 값으로 변경
  const handleBankChange = event => {
    setBank(event.target.value);
  };

  // 예금주명 input 칸 문자열 설정
  const [accountHolderName, setAccountHolderName] =
    useState('예금주명을 입력하세요');
  // 계좌번호 input 칸 문자열 설정
  const [accountNumber, setAccountNumber] = useState('계좌번호를 입력하세요');
  // 은행 선택 칸 값 설정
  const [bankValue, setBankValue] = useState('');

  // 예금주명 input 클릭 시 값을 초기화하는 함수
  const HolderNameInputClick = e => {
    e.preventDefault();
    console.log(e.target.value);
    setAccountHolderName(''); // 현재 입력값을 초기화
  };

  // 계좌번호 input 클릭 시 값을 초기화하는 함수
  const AccountNameInputClick = e => {
    e.preventDefault();
    console.log(e.target.value);
    setAccountNumber(''); // 현재 입력값을 초기화
  };

  const handleAccountSuccess = async () => {
    try {
      const response = await instance.put('/api/v1/bank', {
        bankname: bankValue,
        holder: accountHolderName,
        account_num: accountNumber,
      });
      console.log(response.data);
    } catch (err) {
      console.error('Error: ', err);
    }
  };

  const memoizedValues = useMemo(
    () => ({
      accountHolderName,
      accountNumber,
      bankValue,
    }),
    [accountHolderName, accountNumber, bankValue],
  );

  return (
    <>
      <Navbar />
      <PageState>
        <CommentPart>
          <text>Share your warmth</text>
          <br />
          <text>With our app</text>
        </CommentPart>

        <FixedText>예금주명</FixedText>
        <UserInputPart
          value={memoizedValues.accountHolderName}
          onChange={e => setAccountHolderName(e.target.value)}
          onClick={HolderNameInputClick}
        />

        <FixedText>은행 선택</FixedText>
        <UserInputBox>
          <StyledFormControl fullWidth>
            <InputLabel id="select-bank">은행명</InputLabel>
            <Select
              labelId="select-bank"
              id="select-user-bank"
              value={bank}
              onChange={handleBankChange}
            >
              <MenuItem value={'하나'}>하나은행</MenuItem>
              <MenuItem value={'카카오뱅크'}>카카오뱅크</MenuItem>
              <MenuItem value={'수협'}>수협은행</MenuItem>
            </Select>
          </StyledFormControl>
        </UserInputBox>

        <FixedText>계좌번호</FixedText>
        <UserInputPart
          value={memoizedValues.accountNumber}
          onChange={e => setAccountNumber(e.target.value)}
          onClick={AccountNameInputClick}
        />
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
  margin-top: 20px;
  margin-bottom: 30px;
  text {
    font-family: 'niceFont';
    font-size: 30px;
    font-weight: 700;
    margin: auto;
  }
`;

const FixedText = styled.div`
  font-family: 'descriptFont';
  font-size: 18px;
  font-weight: 100;
  color: #4a453a;
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
  width: 315px;
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
  font-family: 'Godo', sans-serif;
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
    font-family: 'Godo';
    font-style: normal;
    font-weight: 700;
    src:
      url('//cdn.jsdelivr.net/korean-webfonts/1/corps/godo/Godo/GodoB.woff2')
        format('woff2'),
      url('//cdn.jsdelivr.net/korean-webfonts/1/corps/godo/Godo/GodoB.woff')
        format('woff');
  }
`;

export default AccountPage;
