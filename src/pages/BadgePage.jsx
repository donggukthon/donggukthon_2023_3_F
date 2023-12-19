import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { styled, Box, Grid, Button, Img } from "@mui/material";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

function BadgePage() {
  return (
    <>
      <Navbar />
      <Container sx={{ lineHeight: 1.5 }}>
        <Title>Badge</Title>
        <div>지금까지 기부한 붕어빵을 통해 획득한 뱃지예요!</div>
        <div>각각의 뱃지를 터치하면 상세한 설명을 확인할 수 있어요</div>
        <div style={{ marginBottom: "30px" }}>
          앞으로 또 어떤 붕어빵을 획득할 수 있을까요?
        </div>
        <BadgeContainer>
          <Badge>뱃지1</Badge>
          <Badge>뱃지2</Badge>
          <Badge>뱃지3</Badge>
        </BadgeContainer>
        <BadgeContainer>
          <Badge>뱃지1</Badge>
          <Badge>뱃지2</Badge>
          <Badge>뱃지3</Badge>
        </BadgeContainer>
        <BadgeContainer>
          <Badge>뱃지1</Badge>
          <Badge>뱃지2</Badge>
          <Badge>뱃지3</Badge>
        </BadgeContainer>
      </Container>
      <Footer />
    </>
  );
}

const Container = styled(Grid)({
  textAlign: "center",
  alignItems: "center",
});

const Title = styled(Grid)({
  margin: "40px 0px",
  textAlign: "center",
  alignItems: "center",
  color: "#312E26",
  fontSize: "28px",
  fontWeight: 700,
  fontFamily: "titleFont",
});

const BadgeContainer = styled(Box)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  margin: "20px 10px",
});

const Badge = styled(Button)({
  color: "#312e26",
  textAlign: "center",
  alignItems: "center",
  width: "100px",
  height: "120px",
  padding: "13px",
  borderRadius: "24px",
  border: "1px solid  var(--Blue-0, #EBECFD)",
  background: "var(--Offwhite, #FCFCFC)",
  boxShadow: "0px 1px 4px 0px rgba(110, 116, 134, 0.12)",
  "&:hover": {
    background: "rgba(252, 252, 252, 0.70)",
  },
});

export default BadgePage;
