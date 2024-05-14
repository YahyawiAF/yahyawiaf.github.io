import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import space from "../../../assets/images/bg-about-us.jpg";
import CustomizedDialogs from "./ModalStarted";
import { useState } from "react";

const Title = styled(Typography)(({ theme }) => ({
  fontFamily: "Poetsen One",
  fontSize: "27px",
  fontWeight: "600",
  textTransform: "uppercase",
  textAlign: "center",
  color: "#FFFFFF",
  [theme.breakpoints.down("sm")]: {
    fontSize: "32px",
  },
}));
const ButtonStarts = styled(Button)(({ theme }) => ({
  textTransform: "uppercase",
  fontFamily: "unset",
  borderRadius: "4px",
  fontWeight: "600",
  fontSize: "14px",
  letterSpacing: "0.03em",
  color: "white",
  background: "transparent",
  border: "2px solid #f736f8",
  [theme.breakpoints.down("sm")]: {
    width: "170px",
    height: "35px",
    fontSize: "11px",
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
          backgroundImage: `url(${space}), linear-gradient(180deg, #000 0%, rgba(11, 106, 176, 0) 100%)`,
          backgroundRepeat: " no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "680px",
          justifyContent: "space-between",
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
          <ButtonStarts variant="contained" onClick={() => setShow(true)}>
            Getting Started
          </ButtonStarts>
        </Typography>
        <Typography
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        ></Typography>
      </Box>
    </>
  );
};

export default FirstSection;
