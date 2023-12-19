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
  const [selectedBadge, setSelectedBadge] = useState({name: "", image: null, explain: ""});

  const onClickBadge = (badgeName, badgeImage, badgeExplain) => {
    setSelectedBadge({name: badgeName, image: badgeImage, explain: badgeExplain});
    setIsModalOpen(true);
  };

  return (
    <>
      <Navbar />
      <Container sx={{lineHeight: 1.5}}>
        <Title>Badge</Title>
        <div>지금까지 기부한 붕어빵을 통해 획득한 뱃지예요!</div>
        <div>뱃지를 터치하면 상세한 설명을 확인할 수 있어요</div>
        <div style={{marginBottom: "30px"}}>앞으로 또 어떤 붕어빵을 획득할 수 있을까요?</div>
        <BadgeContainer>
          <Badge onClick={() => onClickBadge("달콤한 슈크림 붕어빵", Badge1, "따뜻한 슈크림과 바삭한 반죽의 조화로움으로 모두의 입맛을 사로잡습니다")}>
            <img src={Badge1} />
            <BadgeNameGrid>
              달콤한 <br />
              슈크림 붕어빵
            </BadgeNameGrid>
          </Badge>
          <Badge onClick={() => onClickBadge("부드러운 팥 붕어빵", Badge2, "붕어빵의 원조는 역시 팥 붕어빵! 사람들에게 환한 에너지를 전해줍니다")}>
            <img src={Badge2} />
            <BadgeNameGrid>
              부드러운 <br />팥 붕어빵
            </BadgeNameGrid>
          </Badge>
          <Badge onClick={() => onClickBadge("새콤한 블루베리 붕어빵", Badge3, "신선한 블루베리로 만든 붕어빵은 특유의 상큼한 맛으로 즐거운 경험을 선물해줍니다")}>
            <img src={Badge3} />
            <BadgeNameGrid>
              새콤한 블루베리 <br />
              붕어빵
            </BadgeNameGrid>
          </Badge>
        </BadgeContainer>
        <BadgeContainer>
          <Badge onClick={() => onClickBadge("깔끔한 꿀 붕어빵", Badge4, "깊은 꿀의 풍미가 적절히 녹아들어가 한 입 먹는 순간 입안 가득 향기가 퍼집니다")}>
            <img src={Badge4} />
            <BadgeNameGrid>깔끔한 꿀 붕어빵</BadgeNameGrid>
          </Badge>
          <Badge onClick={() => onClickBadge("향긋한 고구마 붕어빵", Badge5, "따뜻한 감성이 들어간 고구마 붕어빵은 먹는 순간 마음까지 따뜻해집니다")}>
            <img src={Badge5} />
            <BadgeNameGrid>향긋한 고구마 붕어빵</BadgeNameGrid>
          </Badge>
          <Badge onClick={() => onClickBadge("촉촉한 첫눈 붕어빵", Badge6, "겨울의 첫눈처럼 순수하고 행복한 느낌을 담은 첫눈 붕어빵을 사랑하는 사람과 나누어보세요")}>
            <img src={Badge6} />
            <BadgeNameGrid>
              촉촉한 첫눈 <br />
              붕어빵
            </BadgeNameGrid>
          </Badge>
        </BadgeContainer>
        <BadgeContainer>
          <Badge onClick={() => onClickBadge("포근한 산타 붕어빵", Badge7, "고요한 겨울 밤에 사랑과 기쁨을 전하는 특별한 붕어빵입니다")}>
            <img src={Badge7} />
            <BadgeNameGrid>포근한 산타 붕어빵</BadgeNameGrid>
          </Badge>
          <Badge onClick={() => onClickBadge("담백한 루돌프 붕어빵", Badge8, "담백한 견과류가 들어간 루돌프 붕어빵은 따뜻한 붕어빵 내부에 겨울의 마법을 담고 있습니다")}>
            <img src={Badge8} />
            <BadgeNameGrid>담백한 루돌프 붕어빵</BadgeNameGrid>
          </Badge>
          <Badge onClick={() => onClickBadge("고소한 눈사람 붕어빵", Badge9, "눈 내리는 날과 잘 어울리는 눈사람 붕어빵으로 그 날의 추억을 기억 해 보세요")}>
            <img src={Badge9} />
            <BadgeNameGrid>고소한 눈사람 붕어빵</BadgeNameGrid>
          </Badge>
        </BadgeContainer>
      </Container>
      <Footer />
      {isModalOpen && <BadgeModal isOpen={isModalOpen} badgeName={selectedBadge.name} badgeImage={selectedBadge.image} badgeExplain={selectedBadge.explain} onClose={() => setIsModalOpen(false)} />}
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
  gap: 10,
  color: "#312e26",
  textAlign: "center",
  alignItems: "center",
  width: "110px",
  height: "125px",
  padding: "13px 8px",
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
  fontSize: "13px",
  fontWeight: 700,
  fontFamily: "basicFont",
});

export default BadgePage;
