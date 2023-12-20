import React, {useState, useEffect} from "react";
import {useNavigate, useLocation} from "react-router-dom";
import {styled, Grid, Button, Img} from "@mui/material";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import Progressbar from "../components/Progressbar";
import Mold from "../assets/images/mold.png";
import Bread from "../assets/images/bread.png";
import Ribbon from "../assets/images/ribbon_fishbread.png";
import DonateModal from "../components/DonateModal";

function Case1() {
  return (
    <>
      <Grid sx={{margin: "20px 0px"}}>
        <div>아직 반죽 상태의 붕어빵이예요</div>
      </Grid>
      <img src={Bread} />
    </>
  );
}

function Case2() {
  return (
    <>
      <Grid sx={{margin: "20px 0px"}}>
        <div>붕어빵이 구워지고 있어요!</div>
      </Grid>
      <img src={Mold} />
    </>
  );
}

function Case3() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const onClickDonate = () => {
    setIsModalOpen(true);
  };
  return (
    <>
      <Grid sx={{margin: "20px 0px"}}>
        <div>붕어빵이 완성되었네요!</div>
        <div>붕어빵을 선택하면 원하는 재단에 기부 할 수 있어요!</div>
        <div>마음을 전달하러 가볼까요?</div>
      </Grid>
      <Button onClick={onClickDonate}>
        <img src={Ribbon} />
      </Button>
      {isModalOpen && <DonateModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />}
    </>
  );
}

function HomePage() {
  const navigate = useNavigate();
  const day = 2;
  const totalAmount = 3000;
  const formattedTotalAmount = totalAmount.toLocaleString();
  const progress = 50;
  let container;

  if (totalAmount <= 1000) {
    container = <Case1 />;
  } else if (totalAmount < 3000) {
    container = <Case2 />;
  } else {
    container = <Case3 />;
  }

  const onClickBtn = () => {
    navigate("/history");
  };

  return (
    <>
      <Navbar />
      <Container>
        <div style={{margin: "0px 30px 40px 30px"}}>
          <Progressbar value={progress} />
        </div>
        <Title>{day}일차</Title>
        <div style={{margin: "20px 0px"}}>{container}</div>
        <Title>{formattedTotalAmount}원</Title>
        <Button
          onClick={onClickBtn}
          sx={{
            margin: "40px 0px",
            background: "#ED3333",
            width: "280px",
            height: "50px",
            padding: "12px 60px",
            color: "white",
            borderRadius: "16px",
            "&:hover": {
              background: "rgba(237, 51, 51, 0.50)",
            },
          }}
        >
          기부 내역 조회
        </Button>
      </Container>

      <Footer />
    </>
  );
}

const Container = styled(Grid)({
  textAlign: "center",
  alignItems: "center",
  marginTop: 20,
});

const Title = styled(Grid)({
  textAlign: "center",
  alignItems: "center",
  color: "#312E26",
  fontSize: "28px",
  fontWeight: 700,
  fontFamily: "titleFont",
});

export default HomePage;
