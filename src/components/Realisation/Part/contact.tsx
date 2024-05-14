/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import { Box, Button, Container, Grid, Typography } from "@mui/material";

// Material Kit 2 React components

// Images
import bgImage from "../../../assets/images/examples/blog2.jpg";
// icons
import MailIcon from "@mui/icons-material/Mail";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

function Contact() {
  return (
    <Box component="section" py={{ xs: 0, lg: 6 }}>
      <Container>
        <Grid container item>
          <Box
            width="100%"
            borderRadius="xl"
            mb={6}
            sx={{
              overflow: "hidden",
              width: "100%",
              marginBottom: "48px",
              opacity: 1,
              background: "#ffffff",
              color: "#344767",
              borderRadius: "0.75rem",
              boxShadow:
                "0rem 1.25rem 1.5625rem -0.3125rem rgba(0, 0, 0, 0.1), 0rem 0.625rem 0.625rem -0.3125rem rgba(0, 0, 0, 0.04)",
            }}
          >
            <Grid container spacing={2}>
              <Grid
                item
                xs={12}
                lg={5}
                position="relative"
                px={0}
                sx={{
                  backgroundImage: () =>
                    `linear-gradient(195deg, rgba(66, 66, 74, 0.8), rgba(25, 25, 25, 0.8)),  url(${bgImage})`,
                  backgroundSize: "cover",
                }}
              >
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  width="100%"
                  height="100%"
                >
                  <Box py={6} pr={6} pl={{ xs: 6, sm: 12 }} my="auto">
                    <Typography variant="h3" color="white" mb={1}>
                      Contact Information
                    </Typography>
                    <Typography variant="body2" color="white" mb={3}>
                      Fill up the form and our Team will get back to you within
                      24 hours.
                    </Typography>
                    <Box display="flex" p={1}>
                      <Typography variant="button" color="white">
                        <i className="fas fa-phone" />
                        <LocalPhoneIcon />
                      </Typography>
                      <Typography
                        component="span"
                        variant="button"
                        color="white"
                        ml={2}
                        fontWeight="regular"
                      >
                        (+216) 95830164
                      </Typography>
                    </Box>
                    <Box display="flex" color="white" p={1}>
                      <Typography variant="button" color="white">
                        <MailIcon />
                      </Typography>
                      <Typography
                        component="span"
                        variant="button"
                        color="white"
                        ml={2}
                        fontWeight="regular"
                      >
                        hello@creative-tim.com
                      </Typography>
                    </Box>
                    <Box display="flex" color="white" p={1}>
                      <Typography variant="button" color="white">
                        <i className="fas fa-map-marker-alt" />
                        <FmdGoodIcon />
                      </Typography>
                      <Typography
                        component="span"
                        variant="button"
                        color="white"
                        ml={2}
                        fontWeight="regular"
                      >
                        Dyonisie Wolf Bucharest, RO 010458
                      </Typography>
                    </Box>
                    <Box mt={3}>
                      <Button
                        variant="text"
                        sx={{
                          color: "white",
                        }}
                        size="large"
                      >
                        <i
                          className="fab fa-facebook"
                          style={{ fontSize: "1.25rem" }}
                        />
                        <FacebookIcon sx={{ fontSize: "1.25rem" }} />
                      </Button>
                      <Button
                        variant="text"
                        sx={{
                          color: "white",
                        }}
                        size="large"
                      >
                        <i
                          className="fab fa-twitter"
                          style={{ fontSize: "1.25rem" }}
                        />
                        <MailIcon sx={{ fontSize: "1.25rem" }} />
                      </Button>
                      <Button
                        variant="text"
                        sx={{
                          color: "white",
                        }}
                        size="large"
                      >
                        <i
                          className="fab fa-dribbble"
                          style={{ fontSize: "1.25rem" }}
                        />
                        <SportsBasketballIcon sx={{ fontSize: "1.25rem" }} />
                      </Button>
                      <Button
                        variant="text"
                        sx={{
                          color: "white",
                        }}
                        size="large"
                      >
                        <i
                          className="fab fa-instagram"
                          style={{ fontSize: "1.25rem" }}
                        />
                        <InstagramIcon sx={{ fontSize: "1.25rem" }} />
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} lg={7}>
                <Box component="form" p={2} method="post">
                  <Box px={3} py={{ xs: 2, sm: 6 }}>
                    <Typography variant="h2" mb={1}>
                      Say Hi!
                    </Typography>
                    <Typography variant="body1" color="text" mb={2}>
                      We&apos;d like to talk with you.
                    </Typography>
                  </Box>
                  <Box pt={0.5} pb={3} px={3}>
                    <Grid
                      container
                      item
                      xs={12}
                      md={6}
                      justifyContent="flex-end"
                      textAlign="right"
                      ml="auto"
                    ></Grid>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
}

export default Contact;
