import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import basicFont from './assets/fonts/NanumSquareRoundR.ttf';
import titleFont from './assets/fonts/netmarbleM.ttf';
import lineFont from './assets/fonts/RampartOne.ttf';
import niceFont from './assets/fonts/VollkornSCR.ttf';
import descriptFont from './assets/fonts/DMSans.ttf';
import MainPage from './pages/MainPage';
import HomePage from './pages/HomePage';
import CharityPage from './pages/CharityPage';
import BadgePage from './pages/BadgePage';
import MyPage from './pages/MyPage';
import HistoryPage from './pages/HistoryPage';
import DetailPage from './pages/DetailPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import AccountPage from './pages/AccountPage';
import ChooseDayPage from './pages/ChooseDayPage';

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'basicFont';
  src: local('basicFont'), url(${basicFont}) format('truetype');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'titleFont';
  src: local('titleFont'), url(${titleFont}) format('truetype');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'lineFont';
  src: local('lineFont'), url(${lineFont}) format('truetype');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'niceFont';
  src: local('niceFont'), url(${niceFont}) format('truetype');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'descriptFont';
  src: local('descriptFont'), url(${descriptFont}) format('truetype');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'descriptBoldFont';
  src: local('descriptBoldFont'), url(${descriptFont}) format('truetype');
  font-weight: bold;
  font-style: normal;
}

body {
  font-family: 'basicFont';
  background-color: black;
  letter-spacing: -0.1px;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

.layout{
  max-width: 390px;
  height: 720px;
  background-color: #F3EEE2;
  margin: 0 auto ;
  overflow-y: scroll;
  overflow-x: hidden;
}

.layout::-webkit-scrollbar {
  width: 0;
}

.layout::-webkit-scrollbar-thumb {
}

`;

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <div className="layout">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/day" element={<ChooseDayPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/charity" element={<CharityPage />} />
          <Route path="/badge" element={<BadgePage />} />
          <Route path="/profile" element={<MyPage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/detail" element={<DetailPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
