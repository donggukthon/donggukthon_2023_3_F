import React, {useState, useEffect} from "react";
import Close from "@mui/icons-material/CloseRounded";
import {styled, Box, Grid, Button, Img, Modal} from "@mui/material";

function BadgeModal({isOpen, onClose, badgeName, badgeImage}) {
  const acquiredDate = "2023년 01월 23일";

  return (
    <>
      <Modal open={isOpen} onClose={onClose}>
        <ModalGrid>
          <Grid sx={{padding: "10px", display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
            <Grid sx={{marginTop: "5px", color: "#F5D899", fontFamily: "titleFont", fontSize: "24px"}}>{badgeName}</Grid>
            <CloseButton onClick={onClose} title="닫기" />
          </Grid>
          <Grid sx={{display: "flex", justifyContent: "center", textAlign: "center", alignItems: "center", marginTop: "15px"}}>
            <div style={{color: "rgba(0, 0, 0, 0.45)", fontSize: "14px"}}>{acquiredDate}에 취득하신 뱃지입니다!</div>
          </Grid>
          <Box sx={{display: "flex", flexDirection: "row", justifyContent: "space-around", gap: "10px", padding: "40px 0px"}}>
            <img src={badgeImage} />
            <Grid>뱃지에대한설명입니다.</Grid>
          </Box>
        </ModalGrid>
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
  padding: "10px 30px 10px 30px",
}));

export default BadgeModal;
