import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { styled, Grid, Button } from '@mui/material';
import ParkIcon from '@mui/icons-material/Park';
import ApartmentIcon from '@mui/icons-material/Apartment';
import VerifiedIcon from '@mui/icons-material/Verified';
import PersonIcon from '@mui/icons-material/Person';
import { GpsFixed } from '@mui/icons-material';

function Footer() {
  const navigate = useNavigate();
  const location = useLocation();
  const onClickedIcon = path => {
    navigate(path);
  };

  const iconColor = path => {
    return location.pathname === path ? '#ED3333' : '#989898';
  };

  return (
    <>
      <div style={StyledFooter}>
        <IconButton
          onClick={() => onClickedIcon('/home')}
          sx={{ color: iconColor('/home') }}
        >
          <span>
            <ParkIcon />
            <Grid>Home</Grid>
          </span>
        </IconButton>
        <IconButton
          onClick={() => onClickedIcon('/charity')}
          sx={{ color: iconColor('/charity') }}
        >
          <span>
            <ApartmentIcon />
            <Grid>Charity</Grid>
          </span>
        </IconButton>
        <IconButton
          onClick={() => onClickedIcon('/badge')}
          sx={{ color: iconColor('/badge') }}
        >
          <span>
            <VerifiedIcon />
            <Grid>Badge</Grid>
          </span>
        </IconButton>
        <IconButton
          onClick={() => onClickedIcon('/profile')}
          sx={{ color: iconColor('/profile') }}
        >
          <span>
            <PersonIcon />
            <Grid>Profile</Grid>
          </span>
        </IconButton>
      </div>
    </>
  );
}

const StyledFooter = {
  background: '#f8efdd',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  padding: '10px  0px',
  position: 'fixed',
  bottom: 0,
  maxWidth: '390px',
  margin: '0 auto',
  width: '100%',
};

const IconButton = styled(Button)({
  display: 'flex',
  textAlign: 'center',
  alignItems: 'center',
  color: '#989898',
  textTransform: 'none',
});

export default Footer;
