import SecondSection from "./Section/SecondSection";
import FourthSection from "./Section/FourthSection";
import { Box } from "@mui/material";

import Footer from "~/layouts/MainLayout/Footer/Footer";
import Download from "./Section/AvaibleTeech";
import { Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import space from "../../assets/images/bg-about-us.jpg";
import CustomizedDialogs from "./Section/ModalStarted";
import { useState } from "react";
import Information from "~/component/Card";

function HomePage() {
  const [show, setShow] = useState<boolean>(false);

  const handleClose = () => {
    setShow(false);
  };

  return (
    <>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          overflowX: "hidden",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "100px",
          }}
        >
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
              opacity: 0.8,
            }}
            id="home"
          >
            <Title>We help startups go faster</Title>
            <Typography
              color="white"
              mt={1}
              mb={3}
              sx={{
                margin: 0,
                fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
                fontSize: "1.25rem",
                fontWeight: "400",
                lineHeight: "1.625",
                letterSpacing: "0.00938em",
                marginTop: "8px",
                marginBottom: "24px",
                opacity: 0.8,
                textTransform: "none",
                verticalAlign: "unset",
                textDecoration: "none",
                color: "#ffffff",
              }}
            >
              We&apos;re constantly trying to express ourselves and actualize
              our dreams. If you have the opportunity to play this game
            </Typography>
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
          <MKContainer>
            <SecondSection />

            <Information />
            <FourthSection />
            <Download />
          </MKContainer>
        </Box>
        <Footer />
      </Box>
    </>
  );
}
const Title = styled(Typography)(({ theme }) => ({
  fontFamily: "Roboto",
  fontSize: "27px",
  fontWeight: "600",
  textTransform: "uppercase",
  textAlign: "justify",
  color: "#FFFFFF",
  [theme.breakpoints.down("sm")]: {
    fontSize: "32px",
  },
}));
const ButtonStarts = styled(Button)(({}) => ({
  position: "relative",
  boxSizing: "border-box",
  outline: 0,
  border: 0,
  margin: 0,
  cursor: "pointer",
  textDecoration: "none",
  fontFamily: "Roboto,Helvetica,Arial, sans-serif",
  letterSpacing: "0.02857em",
  minWidth: "64px",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "0.75rem",
  fontWeight: 700,
  borderRadius: "0.5rem",
  lineHeight: 1.4,
  textAlign: "justify",
  textTransform: "uppercase",
  backgroundSize: "150% !important",
  backgroundColor: "#ffffff",
  minHeight: "2.5rem",
  color: "#7b809a",
  padding: "0.625rem 1.5rem",
  background: "#ffffff",
  /* color: #7b809a; */
  boxShadow: "none",
}));
const MKContainer = styled("section")(({}) => ({
  textTransform: "uppercase",
  fontFamily: "unset",
}));
export default HomePage;
