import React from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import IconButton from "../common/IconButton";

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

export default Navbar;
