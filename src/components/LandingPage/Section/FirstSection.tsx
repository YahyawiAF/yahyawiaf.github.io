import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import LandingImg from "../../../assets/images/LandingImg.png";
import Map from "../../../assets/images/Map.png";
import CustomizedDialogs from "./ModalStarted";
import { useState } from "react";

const Title = styled(Typography)(({ theme }) => ({
  fontFamily: "Josefin Sans",
  fontStyle: "normal",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  textTransform: "uppercase",
  padding: "40px",

  color: "#FFFFFF",
  fontSize: "52px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "32px",
  },
}));

const ButtonStart = styled(Button)(({ theme }) => ({
  width: "300px",
  height: "66px",
  fontSize: "24px",

  background: "#ED6A9E",
  boxShadow: "0px 27px 24px rgba(0, 0, 0, 0.3)",
  borderRadius: "55.5px",
  [theme.breakpoints.down("sm")]: {
    width: "170px",
    height: "35px",
    fontSize: "15px",
  },
}));
const FirstSection = () => {
  const [show, setShow] = useState<boolean>(false);

  const handleClose = () => {
    setShow(false);
  };

  return (
    <>
      <CustomizedDialogs show={show} onClose={handleClose} />

      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          paddingTop: "15% ",
          paddingRight: "20%",
          paddingLeft: "20%",

          background: `url(${Map}), linear-gradient(180deg, #0B6AB0 0%, rgba(11, 106, 176, 0) 100%)`,
          backgroundPositionY: "center !important",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          gap: "60px",
        }}
        id="home"
      >
        <Title>We help startups go faster</Title>
        <Typography
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ButtonStart variant="contained" onClick={() => setShow(true)}>
            Getting STARTED
          </ButtonStart>
        </Typography>
        <Typography
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={LandingImg} width="100%" />
        </Typography>
      </Box>
    </>
  );
};

export default FirstSection;
