import { Container, Grid, Link, Box, Typography } from "@mui/material";
import XIcon from "@mui/icons-material/X";
import PinterestIcon from "@mui/icons-material/Pinterest";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";

const currentYear = new Date().getFullYear();
document.write(currentYear.toString());

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
            <Typography
              variant="button"
              sx={{
                opacity: 0.8,
              }}
            >
              Copyright ©{" "}
              <script>document.write(new Date().getFullYear())</script>
              {currentYear} Material Design by Algo Sama.
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
              sx={{
                opacity: 0.5,
              }}
              mr={3}
            >
              <YouTubeIcon />
              <i className="fab fa-dribbble" />
            </Typography>
            <Typography
              component={Link}
              href="#twitter"
              target="_blank"
              rel="noreferrer"
              variant="body2"
              color="dark"
              sx={{
                opacity: 0.5,
              }}
              mr={3}
            >
              <XIcon />
              <i className="fab fa-twitter" />
            </Typography>
            <Typography
              component={Link}
              href="#pinterest"
              target="_blank"
              rel="noreferrer"
              variant="body2"
              color="dark"
              sx={{
                opacity: 0.5,
              }}
              mr={3}
            >
              <PinterestIcon />
              <i className="fab fa-pinterest" />
            </Typography>
            <Typography
              component={Link}
              href="#github"
              target="_blank"
              rel="noreferrer"
              variant="body2"
              color="dark"
              sx={{
                opacity: 0.5,
              }}
            >
              <GitHubIcon />
              <i className="fab fa-github" />
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;
