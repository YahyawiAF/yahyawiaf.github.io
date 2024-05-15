// @mui material components
import { Container, Grid, Link, Stack, Typography, Box } from "@mui/material";

// Material Kit 2 React componentsc
import PinterestIcon from "@mui/icons-material/Pinterest";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";

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
              <SportsBasketballIcon />
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
              <InstagramIcon />
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
              <PinterestIcon />
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
              <GitHubIcon />
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;
