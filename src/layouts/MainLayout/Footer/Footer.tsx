import { Box, Divider, IconButton, List, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ReactComponent as Facebook } from "../../../assets/icons/Facebook.svg";
import { ReactComponent as Instagram } from "../../../assets/icons/Instagram.svg";
import { ReactComponent as Linkedin } from "../../../assets/icons/Linkedin.svg";
import { ReactComponent as Mail } from "../../../assets/icons/Mail.svg";
import { ReactComponent as Phone } from "../../../assets/icons/Phone.svg";
import React from "react";
const FooterContent = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  gap: "400px",

  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    gap: "20px",
    paddingTop: "20px",
    paddingBottom: "20px",
  },
}));

const Footer = () => {
  return (
    <Box
      sx={{
        background: "#0B6AB0",
        width: "100%",
        height: "100%",
      }}
    >
      <Divider sx={{ border: "2px solid #FFFFFF", width: "100%" }} />
      <FooterContent
        sx={
          {
            // display: "flex",
            // alignItems: "center",
            // justifyContent: "center",
          }
        }
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",

            // justifyContent: "start",
            // paddingLeft: "300px",
            // paddingBottom: "50px",
            // paddingTop: "90px",
            gap: "20px",
          }}
        >
          <IconButton href="https://www.facebook.com/AlgoSama-102888506041022">
            <Facebook />
          </IconButton>

          {/* <IconButton >
            <Instagram />
          </IconButton> */}
          <IconButton href="https://www.linkedin.com/in/yahyawi-abdel-fatteh-675468141/">
            <Linkedin />
          </IconButton>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            padding: "20px",
            // paddingRight: "300px",
          }}
        >
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",

              gap: "20px",
            }}
          >
            <Mail />
            <Typography fontSize={"32p"} color={"#FFFFFF"}>
              abdelftt@gmail.com
            </Typography>
          </Typography>
          <Divider sx={{ border: "2px solid #FFFFFF", width: "250px" }} />
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <Phone />
            <Typography fontSize={"32p"} color={"#FFFFFF"}>
              +216 27 802 073
            </Typography>
          </Typography>
        </Box>
      </FooterContent>
    </Box>
  );
};

export default Footer;
