{
  /*import { Box } from "@mui/system";
import React from "react";
import Header from "~/layouts/MainLayout/Header";
import Footer from "~/layouts/MainLayout/Footer/Footer";
import PartOne from "./Part/PartOne";
import PartTwo from "./Part/PartTwo";
import { styled } from "@mui/material/styles";

const RealisationWarper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "120px",
  [theme.breakpoints.down("md")]: {
    gap: "60px",
  },
}));

const Realisation = () => {
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
        <RealisationWarper>
          <PartOne />
          <PartTwo />
        </RealisationWarper>
        <Footer />
      </Box>
    </>
  );
};

export default Realisation;
*/
}

/**
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

==========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState } from "react";

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
import Grid from "@mui/material/Grid";
import MuiLink from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";
import { Box } from "@mui/system";
import React from "react";
import Header from "~/layouts/MainLayout/Header";
import Footer from "~/layouts/MainLayout/Footer/Footer";
import PartOne from "./Part/PartOne";
import PartTwo from "./Part/PartTwo";
import { styled } from "@mui/material/styles";

// Material Kit 2 React components

// Material Kit 2 React example components
//import DefaultNavbar from "examples/Navbars/DefaultNavbar";
//import SimpleFooter from "examples/Footers/SimpleFooter";

// Material Kit 2 React page layout routes

// Images
import bgImage from "../../assets/images/bg-sign-in-basic.jpeg";

const RealisationWarper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "120px",
  [theme.breakpoints.down("md")]: {
    gap: "60px",
  },
}));

function SignInBasic(): JSX.Element {
  const [rememberMe, setRememberMe] = useState<boolean>(false);

  const handleSetRememberMe = (): void => setRememberMe(!rememberMe);

  return (
    <Box width="100%">
      {/*     <DefaultNavbar 
        action={{
          type: "external",
          route: "https://www.creative-tim.com/product/material-kit-react",
          placeholder: "free download",
          color: "info",
        }}
        transparent
        light
      />*/}
      <Box
        position="absolute"
        top={0}
        left={0}
        zIndex={1}
        width="100%"
        minHeight="100vh"
        sx={{
          backgroundImage: () => `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Box
          px={1}
          width="100%"
          height="100vh"
          mx="auto"
          position="relative"
          zIndex={2}
        >
          <Grid
            container
            spacing={1}
            justifyContent="center"
            alignItems="center"
            height="100%"
          >
            <Grid item xs={11} sm={9} md={5} lg={4} xl={3}>
              <Card>
                <Box mx={2} mt={-3} p={2} mb={1} textAlign="center">
                  <Box
                    component="main"
                    sx={{
                      flexGrow: 1,
                      display: "flex",
                      flexDirection: "column",
                      overflowX: "hidden",
                    }}
                  >
                    <PartTwo />
                  </Box>
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Box width="100%" position="absolute" zIndex={2} bottom="1.625rem"></Box>
    </Box>
  );
}

export default SignInBasic;
