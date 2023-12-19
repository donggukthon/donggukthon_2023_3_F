import React from "react";
import {useNavigate, useLocation} from "react-router-dom";
import {styled, Grid, Button, Img} from "@mui/material";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import Fishbread from "../assets/images/basic_fishbread.png";
import Building from "../assets/images/building.png";

function DetailPage() {
  const location = useLocation();
  const {charityName, charityImage} = location.state;
  const fishbreadAmount = 129;
  return (
    <>
      <Navbar />
      <Container>
        <Title>{charityName}</Title>
        <Grid sx={{lineHeight: 1.5, marginBottom: "40px"}}>
          <img src={Fishbread} />
          <div style={{fontSize: 18, fontWeight: 800, margin: "10px 0px 20px 0px"}}>
            {charityName} 단체에 총 {fishbreadAmount}마리의
            <br /> 붕어빵이 기부되었어요!
          </div>
          <div>
            모인 붕어빵은 여러분의 이름으로 <br />
            {charityName} 단체에 기부됩니다
          </div>
          <div>연말동안 여러분의 따뜻한 마음을 전달해보세요!</div>
        </Grid>
        <Grid
          sx={{
            display: "flex",
            paddingTop: "170px",
            justifyContent: "flex-end",
            height: "325px",
            background: `URL(${Building})`,
            backgroundSize: "600px",
            backgroundPosition: "bottom",
            backgroundRepeat: "no-repeat",
          }}
        >
          <img style={{marginRight: "10px"}} src={charityImage} />
        </Grid>
      </Container>
    </>
  );
}

const Container = styled(Grid)({
  textAlign: "center",
  alignItems: "center",
});

const Title = styled(Grid)({
  margin: "20px 0px",
  textAlign: "center",
  alignItems: "center",
  color: "#312E26",
  fontSize: "28px",
  fontWeight: 700,
  fontFamily: "titleFont",
});

export default DetailPage;
