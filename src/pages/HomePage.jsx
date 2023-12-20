import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { styled, Grid, Button } from "@mui/material";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import Progressbar from "../components/Progressbar";
import Mold from "../assets/images/mold.png";
import Bread from "../assets/images/bread.png";
import Ribbon from "../assets/images/ribbon_fishbread.png";
import DonateModal from "../components/DonateModal";
import instance from "../api/axios";

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
  let container;
  
  // API 연결 -> 체크 필요
  const handleMainSuccess = async () => {
    try {
      const response = await instance.get("/api/v1/fishbread");
      console.log(response.data);

    } catch (err) {
      console.error("Error: ", err);
    }
  };

  // 상태 관리
  const [mainScreenData, setmainScreenData] = useState({
    "fishbreads": {
      "id": 1,
      "price": 2550,
      "since": 3,
      "image": null,
    }
  });

  useEffect(() => {
		handleMainSuccess();
	}, []);

  const day = mainScreenData.fishbreads.since;
  const totalAmount = mainScreenData.fishbreads.price;
  const formattedTotalAmount = totalAmount.toLocaleString();
  const progress = (mainScreenData.fishbreads.price / 3000) * 100;

  if (totalAmount <= 1000) {
    container = <Case1 />;
  } else if (totalAmount <= 2000) {
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
        <div style={{ margin: "0px 30px 40px 30px" }}>
          <Progressbar value={progress} />
          <CommentPart>
            <text>+{formattedTotalAmount}</text>
            <text>+3,000</text>
          </CommentPart>
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

const CommentPart = styled(Grid)`
  border: none;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  text {
    font-family: "titleFont";
    font-size: 12px;
    font-weight: 700;
    margin-top: 5px;
  }
`;

export default HomePage;
