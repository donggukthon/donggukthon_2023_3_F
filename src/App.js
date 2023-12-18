import {BrowserRouter, Routes, Route} from "react-router-dom";
import {createGlobalStyle} from "styled-components";
import basicFont from "./assets/fonts/NanumSquareRoundR.ttf";
import MainPage from "./pages/MainPage";

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'basicFont';
  src: local('basicFont'), url(${basicFont}) format('truetype');
  font-weight: normal;
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
    background-color: #F5E9CF;
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
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
