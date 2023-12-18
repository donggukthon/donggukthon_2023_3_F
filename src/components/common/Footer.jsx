import React from "react";
import {styled, Grid} from "@mui/material";
import ParkIcon from "@mui/icons-material/Park";
import ApartmentIcon from "@mui/icons-material/Apartment";
import VerifiedIcon from "@mui/icons-material/Verified";
import PersonIcon from "@mui/icons-material/Person";
import IconButton from "../common/IconButton";

function Footer() {
  return (
    <>
      <div style={StyledFooter}>
        <IconButton>
          <span>
            <ParkIcon />
            <Grid>Home</Grid>
          </span>
        </IconButton>
        <IconButton>
          <span>
            <ApartmentIcon />
            <Grid>Charity</Grid>
          </span>
        </IconButton>
        <IconButton>
          <span>
            <VerifiedIcon />
            <Grid>Badge</Grid>
          </span>
        </IconButton>
        <IconButton>
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
  background: "rgba(255, 255, 255, 0.30)",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  padding: "10px 30px",
};

export default Footer;
