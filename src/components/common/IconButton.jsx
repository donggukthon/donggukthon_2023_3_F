import React from "react";
import {styled, Button} from "@mui/material";

const IconButton = ({onClick, children}) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

const StyledButton = styled(Button)({
  display: "flex",
  textAlign: "center",
  alignItems: "center",
  color: "#989898",
  textTransform: "none",
});

export default IconButton;
