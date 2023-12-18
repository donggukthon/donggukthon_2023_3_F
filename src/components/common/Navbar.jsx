import React from "react";
import {styled, Button} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

function Navbar() {
  return (
    <>
      <NavButton>
        <ArrowBackIosIcon />
      </NavButton>
    </>
  );
}

const NavButton = styled(Button)({
  display: "flex",
  justifyContent: "center",
  margin: "30px 10px",
  color: "#989898",
  cursor: "pointer",
});

export default Navbar;
