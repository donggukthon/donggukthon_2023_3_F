import Navbar from '../components/common/Navbar';
import styled from 'styled-components';
import Footer from "../components/common/Footer";
import logo from '../assets/images/logo.png';

function HistoryPage() {
	return (
		<>
			<Navbar />
			<UserTextPart>김혜연 님이<br/>지금까지 전달한 마음이에요!</UserTextPart>
			<TotalMoneyPart>
				3,290 원
				<br/>
				<img src={logo} width='100px' alt='Fishbread' />
			</TotalMoneyPart>
			<WhiteBox>
				<HistoryTitle>전체내역</HistoryTitle>
				<br/>
				<HistoryContent>2023-12-01 ㅇㅇㅇㅇ재단 ㅇㅇㅇㅇ원<br/><br/>2023-11-31  ㅁㅁㅁㅁ재단  ㅁㅁㅁㅁ원<br/><br/>...<br/><br/>...</HistoryContent>
			</WhiteBox>
			<Footer />
		</>
	);
}

const UserTextPart = styled.div`
  font-family: "descriptFont";
  font-size: 25px;
  font-weight: 100;
  color: #4A453A;
	text-align: center;
	margin: 20px 0;
`;

const TotalMoneyPart = styled.div`
  font-family: "descriptBoldFont";
  font-size: 30px;
  font-weight: 100;
  color: #4A453A;
	text-align: center;
`;

const WhiteBox = styled.div`
  width: 250px;
  height: 250px;
  background-color: white;
  opacity: 60%;
  border-radius: 15px;
  margin: 15px auto;
  position: relative;
  overflow-x: auto;
  padding: 30px;
	opacity: 40%;
`;

const HistoryTitle = styled.div`
  font-family: "descriptFont";
  font-size: 21px;
  font-weight: 100;
  color: black;
	margin: 20px 0;
`;

const HistoryContent = styled.div`
	font-family: "descriptFont";
  font-size: 16px;
  font-weight: 100;
  color: #4A453A;
	margin: 15px 0;
`;

export default HistoryPage;
