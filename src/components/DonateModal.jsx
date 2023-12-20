import React, {useState, useEffect} from "react";
import Close from "@mui/icons-material/CloseRounded";
import {styled, Box, Grid, Button, Img, Modal} from "@mui/material";
import fishbread from "../assets/images/badge1.png";

function DonateModal({isOpen, onClose}) {
  const [isYes, setIsYes] = useState(false);

  const IsYesButtonClicked = () => {
    setIsYes(true);
  };

  return (
    <>
      <Modal open={isOpen} onClose={onClose}>
        <ModalGrid>
          <CloseButton
            onClick={onClose}
          />
          <CommentPart>
            <text>{!isYes ? "기부하시겠습니까 ?" : "배지를 획득하셨습니다."}</text>
            <ImagePart>
              <img src={fishbread} alt='logo' width='60px'/>
            </ImagePart>
            {!isYes 
            // 예 버튼을 클릭하지 않았을 떄
              ? <ButtonPart>
              <Button
                onClick={IsYesButtonClicked}
                sx={{
                  margin: "20px 0px",
                  background: "#ED3333",
                  width: "130px",
                  height: "50px",
                  padding: "12px 20px",
                  color: "white",
                  borderRadius: "16px",
                  fontSize: "15px",
                  "&:hover": {
                    background: "rgba(237, 51, 51, 0.50)",
                  },
                }}
              >
                예
              </Button>
              <Button
                onClick={onClose}
                sx={{
                  margin: "20px 0px",
                  background: "#ED3333",
                  width: "130px",
                  height: "50px",
                  padding: "12px 20px",
                  color: "white",
                  borderRadius: "16px",
                  fontSize: "15px",
                  "&:hover": {
                    background: "rgba(237, 51, 51, 0.50)",
                  },
                }}
              >
                아니오
              </Button>
            </ButtonPart>
            // 예 버튼을 클릭했을 때
              : <ButtonPart>
              <Button
                onClick={onClose}
                sx={{
                  margin: "20px 0px",
                  background: "#ED3333",
                  width: "260px",
                  height: "50px",
                  padding: "12px 20px",
                  color: "white",
                  borderRadius: "16px",
                  fontSize: "15px",
                  "&:hover": {
                    background: "rgba(237, 51, 51, 0.50)",
                  },
                }}
              >
                확인
              </Button>
            </ButtonPart>
            }
          </CommentPart>
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
  margin: "10px 0 20px 0",
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

const CommentPart = styled(Grid)`
  border: none;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  text {
    font-family: "descriptBoldFont";
    font-size: 20px;
    font-weight: 700;
    margin: 10 auto;
  }
`;

const ButtonPart = styled(Grid)`
  border: none;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  text-align: center;
`;

const ImagePart = styled(Grid)`
  border: none;
  position: relative;
  display: flex;
  justify-content: center;
  margin: 10px 0;
`;
export default DonateModal;
