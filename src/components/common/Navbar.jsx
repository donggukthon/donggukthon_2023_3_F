import React from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import {styled, Button} from "@mui/material";

function Navbar() {
  return (
    <>
      <div style={StyledNavbar}>
        <IconButton children={<ArrowBackIosNewIcon />} />
      </div>
    </>
  );
}

const StyledNavbar = {
  margin: "30px 0px",
};

const IconButton = styled(Button)({
  display: "flex",
  textAlign: "center",
  alignItems: "center",
  color: "#989898",
});

export default Navbar;
