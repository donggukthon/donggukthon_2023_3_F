import React, {useState, useEffect} from "react";
import {styled, Box, Grid, Button, Img} from "@mui/material";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import BadgeModal from "../components/BadgeModal";
import Badge1 from "../assets/images/badge1.png";
import Badge3 from "../assets/images/badge2.png";
import Badge2 from "../assets/images/badge3.png";
import Badge4 from "../assets/images/badge4.png";
import Badge5 from "../assets/images/badge5.png";
import Badge6 from "../assets/images/badge6.png";
import Badge7 from "../assets/images/badge7.png";
import Badge8 from "../assets/images/badge8.png";
import Badge9 from "../assets/images/badge9.png";

function BadgePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBadge, setSelectedBadge] = useState({name: "", image: null});

  const onClickBadge = (badgeName, badgeImage) => {
    setSelectedBadge({name: badgeName, image: badgeImage});
    setIsModalOpen(true);
  };

  return (
    <>
      <Navbar />
      <Container sx={{lineHeight: 1.5}}>
        <Title>Badge</Title>
        <div>지금까지 기부한 붕어빵을 통해 획득한 뱃지예요!</div>
        <div>각각의 뱃지를 터치하면 상세한 설명을 확인할 수 있어요</div>
        <div style={{marginBottom: "30px"}}>앞으로 또 어떤 붕어빵을 획득할 수 있을까요?</div>
        <BadgeContainer>
          <Badge onClick={() => onClickBadge("뱃지1", Badge1)}>
            <img src={Badge1} />
            <BadgeNameGrid>뱃지1</BadgeNameGrid>
          </Badge>
          <Badge onClick={() => onClickBadge("뱃지2", Badge2)}>
            <img src={Badge2} />
            <BadgeNameGrid>뱃지2</BadgeNameGrid>
          </Badge>
          <Badge onClick={() => onClickBadge("뱃지3", Badge3)}>
            <img src={Badge3} />
            <BadgeNameGrid>뱃지3</BadgeNameGrid>
          </Badge>
        </BadgeContainer>
        <BadgeContainer>
          <Badge onClick={() => onClickBadge("뱃지4", Badge4)}>
            <img src={Badge4} />
            <BadgeNameGrid>뱃지4</BadgeNameGrid>
          </Badge>
          <Badge onClick={() => onClickBadge("뱃지5", Badge5)}>
            <img src={Badge5} />
            <BadgeNameGrid>뱃지5</BadgeNameGrid>
          </Badge>
          <Badge onClick={() => onClickBadge("뱃지6", Badge6)}>
            <img src={Badge6} />
            <BadgeNameGrid>뱃지6</BadgeNameGrid>
          </Badge>
        </BadgeContainer>
        <BadgeContainer>
          <Badge onClick={() => onClickBadge("뱃지7", Badge7)}>
            <img src={Badge7} />
            <BadgeNameGrid>뱃지7</BadgeNameGrid>
          </Badge>
          <Badge onClick={() => onClickBadge("뱃지8", Badge8)}>
            <img src={Badge8} />
            <BadgeNameGrid>뱃지8</BadgeNameGrid>
          </Badge>
          <Badge onClick={() => onClickBadge("뱃지9", Badge9)}>
            <img src={Badge9} />
            <BadgeNameGrid>뱃지9</BadgeNameGrid>
          </Badge>
        </BadgeContainer>
      </Container>
      <Footer />
      {isModalOpen && <BadgeModal isOpen={isModalOpen} badgeName={selectedBadge.name} badgeImage={selectedBadge.image} onClose={() => setIsModalOpen(false)} />}
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

const BadgeContainer = styled(Box)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  margin: "20px 10px",
});

const Badge = styled(Button)({
  display: "flex",
  flexDirection: "column",
  gap: 15,
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

const BadgeNameGrid = styled(Grid)({
  color: "#312E26",
  fontSize: "14px",
  fontWeight: 500,
  fontFamily: "titleFont",
});

export default BadgePage;
