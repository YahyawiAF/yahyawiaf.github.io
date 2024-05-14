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
import { Container, Grid, Link, Stack, Typography, Box } from "@mui/material";

// Material Kit 2 React components

function Footer() {
  return (
    <Box component="footer" py={6}>
      <Container>
        <Grid container>
          <Grid
            item
            xs={12}
            lg={4}
            textAlign={{ xs: "center", lg: "left" }}
            mr="auto"
            mb={{ xs: 3, lg: 0 }}
          >
            <Typography
              variant="h6"
              textTransform="uppercase"
              mb={{ xs: 2, lg: 3 }}
            >
              Material Design
            </Typography>
            <Stack
              component="ul"
              direction="row"
              flexWrap="wrap"
              spacing={3}
              justifyContent={{ xs: "center", lg: "flex-start" }}
              pl={0}
              mb={3}
              sx={{ listStyle: "none" }}
            >
              <Box component="li">
                <Typography
                  variant="button"
                  fontWeight="regular"
                  sx={{ opacity: 0.8 }}
                  component={Link}
                  href="https://www.creative-tim.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Home
                </Typography>
              </Box>
              <Box component="li">
                <Typography
                  variant="button"
                  fontWeight="regular"
                  sx={{ opacity: 0.8 }}
                  component={Link}
                  href="https://www.creative-tim.com/presentation"
                  target="_blank"
                  rel="noreferrer"
                >
                  About
                </Typography>
              </Box>
              <Box component="li">
                <Typography
                  variant="button"
                  fontWeight="regular"
                  sx={{ opacity: 0.8 }}
                  component={Link}
                  href="https://www.creative-tim.com/blog"
                  target="_blank"
                  rel="noreferrer"
                >
                  Blog
                </Typography>
              </Box>
              <Box component="li">
                <Typography
                  variant="button"
                  fontWeight="regular"
                  sx={{ opacity: 0.8 }}
                  component={Link}
                  href="https://www.creative-tim.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Services
                </Typography>
              </Box>
            </Stack>
            <Typography variant="button" sx={{ opacity: 0.8 }}>
              Copyright © {new Date().getFullYear()} Material Design Algo Sama.
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            lg={6}
            ml="auto"
            textAlign={{ xs: "center", lg: "right" }}
          >
            <Typography
              variant="body1"
              fontWeight="bold"
              mb={6}
              sx={{ fontSize: "1.125rem" }}
            >
              The reward for getting on the stage is fame. The price of fame is
              you can&apos;t get off the stage.
            </Typography>
            <Typography
              component={Link}
              href="#dribbble"
              target="_blank"
              rel="noreferrer"
              variant="body2"
              color="dark"
              sx={{ opacity: 0.5 }}
              mr={3}
            >
              <i className="fab fa-dribbble" />
            </Typography>
            <Typography
              component={Link}
              href="#twitter"
              target="_blank"
              rel="noreferrer"
              variant="body2"
              color="dark"
              sx={{ opacity: 0.5 }}
              mr={3}
            >
              <i className="fab fa-twitter" />
            </Typography>
            <Typography
              component={Link}
              href="#pinterest"
              target="_blank"
              rel="noreferrer"
              variant="body2"
              color="dark"
              sx={{ opacity: 0.5 }}
              mr={3}
            >
              <i className="fab fa-pinterest" />
            </Typography>
            <Typography
              component={Link}
              href="#github"
              target="_blank"
              rel="noreferrer"
              variant="body2"
              color="dark"
              sx={{ opacity: 0.5 }}
            >
              <i className="fab fa-github" />
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;
