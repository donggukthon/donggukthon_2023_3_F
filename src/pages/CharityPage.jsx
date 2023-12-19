import React from "react";
import {useNavigate} from "react-router-dom";
import {styled, Grid, Button} from "@mui/material";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import Charity1 from "../assets/images/children.png";
import Charity2 from "../assets/images/grandparents.png";
import Charity3 from "../assets/images/refugee.png";
import Charity4 from "../assets/images/lowIncome.png";

function CharityPage() {
  const navigate = useNavigate();

  const onClickedCharity = (charityName, charityImage) => {
    navigate("/detail", {state: {charityName, charityImage}});
  };
  return (
    <>
      <Navbar />
      <Container sx={{lineHeight: 1.5}}>
        <Title>Charity</Title>
        <div>마음을 나눌 수 있는 단체들</div>
        <div>단체를 클릭하여 각 단체별 누적 기부 금액을 확인하세요!</div>
        <CharityContainer>
          <Grid sx={{display: "flex", flexDirection: "column", textAlign: "center", alignItems: "center"}}>
            <Charity onClick={() => onClickedCharity("어린이", Charity1)}>
              <img style={{width: "100px", margin: "15px 0px 30px 10px"}} src={Charity1} />
            </Charity>
            <Text onClick={() => onClickedCharity("어린이", Charity1)}>어린이</Text>
          </Grid>
          <Grid sx={{display: "flex", flexDirection: "column", textAlign: "center", alignItems: "center"}}>
            <Charity onClick={() => onClickedCharity("독거노인", Charity2)}>
              <img style={{width: "200px", margin: "30px 30px 20px 40px"}} src={Charity2} />
            </Charity>
            <Text onClick={() => onClickedCharity("독거노인", Charity2)}>독거노인</Text>
          </Grid>
        </CharityContainer>

        <CharityContainer>
          <Grid sx={{display: "flex", flexDirection: "column", textAlign: "center", alignItems: "center"}}>
            <Charity onClick={() => onClickedCharity("난민", Charity3)}>
              <img style={{width: "160px", margin: "40px 40px 30px 40px"}} src={Charity3} />
            </Charity>
            <Text onClick={() => onClickedCharity("난민", Charity3)}>난민</Text>
          </Grid>
          <Grid sx={{display: "flex", flexDirection: "column", textAlign: "center", alignItems: "center"}}>
            <Charity onClick={() => onClickedCharity("저소득층", Charity4)}>
              <img style={{width: "450px", margin: "0px 10px 0px 10px"}} src={Charity4} />
            </Charity>
            <Text onClick={() => onClickedCharity("저소득층", Charity4)}>저소득층</Text>
          </Grid>
        </CharityContainer>
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
  margin: "20px 0px",
  textAlign: "center",
  alignItems: "center",
  color: "#312E26",
  fontSize: "28px",
  fontWeight: 700,
  fontFamily: "titleFont",
});

const CharityContainer = styled(Grid)({
  display: "flex",
  gap: 10,

  flexDirection: "row",
  justifyContent: "space-between",
  margin: "20px",
});

const Charity = styled(Button)({
  background: "rgba(255, 255, 255, 0.61)",
  textAlign: "center",
  alignItems: "center",
  width: "170px",
  height: "175px",
  marginBottom: "10px",
  borderRadius: "10px",
  "&:hover": {
    background: "rgba(255, 255, 255, 0.61)",
  },
});

const Text = styled(Button)({
  display: "flex",

  height: "30px",
  textAlign: "center",
  alignItems: "center",
  color: "#312e26",
  fontSize: "16px",
  fontWeight: 600,
  fontFamily: "basicFont",
});

export default CharityPage;
