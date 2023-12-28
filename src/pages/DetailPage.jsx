import { useLocation } from 'react-router-dom';
import { styled, Grid } from '@mui/material';
import Navbar from '../components/common/Navbar';
import Building from '../assets/images/building.png';
import instance from '../api/axios';

function DetailPage() {
  const location = useLocation();
  const { charityName, charityImage, charityNum } = location.state;
  const fishbreadAmount = 129;

  let charityDetail;

  // 단체 세부사항
  if (charityName === '어린이') {
    charityDetail = '위스타트';
  } else if (charityName === '난민') {
    charityDetail = '유엔 난민 기부';
  } else if (charityName === '저소득층') {
    charityDetail = '희망 조약돌';
  } else {
    charityDetail = '독거노인 종합지원센터';
  }

  // useEffect(() => {
  //   const fetchCharityData = async () => {
  //     try {
  //       const response = await instance.get(`/api/v1/charity/{charity_id}`);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  // });

  return (
    <>
      <Navbar />
      <Container>
        <Title>{charityName}</Title>
        <Content>
          <img width={120} alt="단체이미지" src={charityImage} />
          <ContentTxt>
            {charityDetail} 단체에 총 {fishbreadAmount}마리의
            <br />
            붕어빵이 기부되었어요!
          </ContentTxt>
          <div>모금된 붕어빵은 여러분의 이름으로</div>
          <div> {charityDetail} 단체에 기부됩니다</div>
          <div>연말동안 여러분의 따뜻한 마음을 전달해보세요!</div>
        </Content>
        <BackgroundGrid />
      </Container>
    </>
  );
}

const Container = styled(Grid)({
  textAlign: 'center',
  alignItems: 'center',
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

const Content = styled(Grid)({
  lineHeight: 1.5,
  marginBottom: '40px',
});

const ContentTxt = styled(Grid)({
  fontSize: 18,
  fontWeight: 800,
  margin: '20px 0px',
});

const BackgroundGrid = styled(Grid)({
  display: 'flex',
  paddingTop: '170px',
  justifyContent: 'flex-end',
  height: '325px',
  background: `URL(${Building})`,
  backgroundSize: '600px',
  backgroundPosition: 'bottom',
  backgroundRepeat: 'no-repeat',
});

export default DetailPage;
