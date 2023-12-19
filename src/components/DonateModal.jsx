import React, {useState, useEffect} from "react";
import Close from "@mui/icons-material/CloseRounded";
import {styled, Box, Grid, Button, Img, Modal} from "@mui/material";

function DonateModal({isOpen, onClose}) {
  return (
    <>
      <Modal open={isOpen} onClose={onClose}>
        <ModalGrid>google</ModalGrid>
      </Modal>
    </>
  );
}

const CloseButton = styled(Close)(() => ({
  display: "flex",
  justifyContent: "flex-end",

  cursor: "pointer",
  color: "grey",
  fontSize: 26,
  "&:hover": {
    color: "lightgrey",
  },
}));

const ModalGrid = styled(Grid)(() => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "340px",
  height: "270px",
  overflowX: "hidden",
  overflowY: "auto",
  backgroundColor: "white",
  borderRadius: "31px",
  boxShadow: "0 10px 50px rgb(70, 70, 70)",
  padding: "10px 20px 10px 20px",
}));
export default DonateModal;
