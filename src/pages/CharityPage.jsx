import React from 'react';
import { useNavigate } from 'react-router-dom';
import { styled, Grid, Button } from '@mui/material';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import Charity1 from '../assets/images/children.png';
import Charity2 from '../assets/images/grandparents.png';
import Charity3 from '../assets/images/refugee.png';
import Charity4 from '../assets/images/lowIncome.png';

function CharityPage() {
  const navigate = useNavigate();

  const getCharityNum = charityName => {
    const charityMap = {
      어린이: 1,
      독거노인: 2,
      난민: 3,
      저소득층: 4,
    };

    return charityMap[charityName] || 0;
  };

  const onClickedCharity = (charityName, charityImage) => {
    const charityNum = getCharityNum(charityName);
    navigate(`/detail?charityNum=${charityNum}`, {
      state: { charityName, charityImage, charityNum },
    });
  };

  return (
    <>
      <Navbar />
      <Container>
        <Title>Charity</Title>
        <div>마음을 나눌 수 있는 단체들</div>
        <div>단체를 클릭하여 각 단체별 누적 기부 금액을 확인하세요!</div>

        <CharityContainer>
          <Box>
            <DetailBtn onClick={() => onClickedCharity('어린이', Charity1)}>
              <img height={150} alt="어린이" src={Charity1} />
            </DetailBtn>
            <TextBtn onClick={() => onClickedCharity('어린이', Charity1)}>
              어린이
            </TextBtn>
          </Box>

          <Box>
            <DetailBtn onClick={() => onClickedCharity('독거노인', Charity2)}>
              <img alt="독거노인" src={Charity2} />
            </DetailBtn>
            <TextBtn onClick={() => onClickedCharity('독거노인', Charity2)}>
              독거노인
            </TextBtn>
          </Box>
        </CharityContainer>

        <CharityContainer>
          <Box>
            <DetailBtn onClick={() => onClickedCharity('난민', Charity3)}>
              <img height={100} alt="난민" src={Charity3} />
            </DetailBtn>
            <TextBtn onClick={() => onClickedCharity('난민', Charity3)}>
              난민
            </TextBtn>
          </Box>

          <Box>
            <DetailBtn onClick={() => onClickedCharity('저소득층', Charity4)}>
              <img alt="저소득층" src={Charity4} />
            </DetailBtn>
            <TextBtn onClick={() => onClickedCharity('저소득층', Charity4)}>
              저소득층
            </TextBtn>
          </Box>
        </CharityContainer>
      </Container>
      <Footer />
    </>
  );
}

const Container = styled(Grid)({
  textAlign: 'center',
  alignItems: 'center',
  lineHeight: 1.5,
});

const Title = styled(Grid)({
  margin: '20px 0px',
  textAlign: 'center',
  alignItems: 'center',
  color: '#312E26',
  fontSize: '28px',
  fontWeight: 700,
  fontFamily: 'titleFont',
});

const CharityContainer = styled(Grid)({
  display: 'flex',
  gap: 10,

  flexDirection: 'row',
  justifyContent: 'space-between',
  margin: '20px',
});

const Box = styled(Grid)({
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
  alignItems: 'center',
});

const DetailBtn = styled(Button)({
  background: 'rgba(255, 255, 255, 0.61)',
  textAlign: 'center',
  alignItems: 'center',
  width: '170px',
  height: '175px',
  marginBottom: '10px',
  borderRadius: '10px',
  '&:hover': {
    background: 'rgba(255, 255, 255, 0.61)',
  },
});

const TextBtn = styled(Button)({
  display: 'flex',
  height: '30px',
  textAlign: 'center',
  alignItems: 'center',
  color: '#312e26',
  fontSize: '16px',
  fontWeight: 600,
  fontFamily: 'basicFont',
});

export default CharityPage;
