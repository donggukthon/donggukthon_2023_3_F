import Navbar from '../components/common/Navbar';
import { styled, Grid } from '@mui/material';
import logo from '../assets/images/logo.png';

function HistoryPage() {
  const userName = '김혜연';
  const totalDonateAmount = 3290;
  const formattedTotalDonateAmount = totalDonateAmount.toLocaleString();
  const donateData = [
    { donateDate: '2023-12-18', donatePrice: 300 },
    { donateDate: '2023-11-24', donatePrice: 50 },
    { donateDate: '2023-12-10', donatePrice: 406 },
    { donateDate: '2023-12-08', donatePrice: 302 },
    { donateDate: '2023-12-06', donatePrice: 150 },
    { donateDate: '2023-12-04', donatePrice: 30 },
    { donateDate: '2023-12-02', donatePrice: 300 },
    { donateDate: '2023-11-31', donatePrice: 24 },
    { donateDate: '2023-11-29', donatePrice: 400 },
    { donateDate: '2023-06-30', donatePrice: 560 },
    { donateDate: '2023-12-01', donatePrice: 450 },
    { donateDate: '2023-11-24', donatePrice: 50 },
    { donateDate: '2023-11-10', donatePrice: 406 },
    { donateDate: '2023-10-21', donatePrice: 62 },
    { donateDate: '2023-10-11', donatePrice: 150 },
    { donateDate: '2023-09-30', donatePrice: 260 },
    { donateDate: '2023-09-15', donatePrice: 970 },
    { donateDate: '2023-08-20', donatePrice: 304 },
    { donateDate: '2023-07-19', donatePrice: 400 },
    { donateDate: '2023-06-30', donatePrice: 560 },
  ];

  return (
    <>
      <Navbar />
      <TopContainer>
        {userName}님이
        <br />
        지금까지 전달한 마음이에요!
        <Title>{formattedTotalDonateAmount}원</Title>
        <img src={logo} width="100px" alt="Fishbread" />
      </TopContainer>

      <Grid sx={{ marginLeft: '30px' }}>모금 내역</Grid>
      <Container>
        <Grid
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginBottom: '20px',
          }}
        >
          <Grid
            sx={{
              fontFamily: 'titleFont',
              fontSize: '18px',
              padding: '0px 10px',
            }}
          >
            날짜
          </Grid>
          <Grid
            sx={{
              fontFamily: 'titleFont',
              fontSize: '18px',
              padding: '0px 0px',
              marginLeft: '10px',
            }}
          >
            모금 금액
          </Grid>
        </Grid>
        {donateData.map((data, index) => (
          <Grid
            sx={{
              display: 'flex',
              flexDirection: 'row',
              gap: '40px',
              marginBottom: '10px',
            }}
            key={index}
          >
            <Grid
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                width: '165px',
                paddingLeft: '30px',
              }}
            >
              {data.donateDate}
            </Grid>
            <Grid sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              {data.donatePrice.toLocaleString()}원
            </Grid>
          </Grid>
        ))}
      </Container>
    </>
  );
}

const TopContainer = styled(Grid)({
  lineHeight: 1.5,
  fontSize: '22px',
  color: '#312E26',
  textAlign: 'center',
  margin: '20px 0',
});

const Title = styled(Grid)({
  fontFamily: 'titleFont',
  marginTop: '30px',
  fontWeight: 700,
  fontSize: '28px',
});

const Container = styled(Grid)({
  height: '320px',
  fontSize: '14px',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: 'white',
  opacity: '60%',
  borderRadius: '15px',
  margin: '7px 20px',
  overflowY: 'scroll',
  padding: '20px 20px 10px 20px',
});

export default HistoryPage;
