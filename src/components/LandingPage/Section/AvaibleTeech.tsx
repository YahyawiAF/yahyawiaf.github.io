// @mui material components
import { styled } from "@mui/material/styles";
import { Box, Button, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Tooltip from "@mui/material/Tooltip";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import PinterestIcon from "@mui/icons-material/Pinterest";

function Download() {
  return (
    <Box component="section" py={{ xs: 0, sm: 12 }}>
      <Container>
        <Grid container item xs={6} mx="auto">
          <Box textAlign="center">
            <Typography color={"#344767"} variant="h3" mt={6} mb={3}>
              Available on these technologies
            </Typography>
            <Grid container spacing={3} justifyContent="center">
              <Grid item xs={4} lg={2}>
                <Tooltip title="Bootstrap 5 - Most popular front-end component library">
                  <Box
                    component="a"
                    href="https://www.creative-tim.com/product/material-kit"
                    target="_blank"
                  >
                    <Box
                      component="img"
                      src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/bootstrap5.jpg"
                      width="100%"
                    />
                  </Box>
                </Tooltip>
              </Grid>
              <Grid item xs={4} lg={2}>
                <Tooltip title="Comming soon">
                  <Box
                    component="a"
                    href="#"
                    target="_blank"
                    onClick={e => e.preventDefault()}
                  >
                    <Box
                      component="img"
                      src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/icon-tailwind.jpg"
                      width="100%"
                    />
                  </Box>
                </Tooltip>
              </Grid>
              <Grid item xs={4} lg={2}>
                <Tooltip title="Comming soon">
                  <Box
                    component="a"
                    href="#"
                    target="_blank"
                    onClick={e => e.preventDefault()}
                  >
                    <Box
                      component="img"
                      src="https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/vue.jpg"
                      width="100%"
                    />
                  </Box>
                </Tooltip>
              </Grid>
              <Grid item xs={4} lg={2}>
                <Tooltip title="Comming soon">
                  <Box
                    component="a"
                    href="#"
                    target="_blank"
                    onClick={e => e.preventDefault()}
                  >
                    <Box
                      component="img"
                      src="https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/angular.jpg"
                      width="100%"
                    />
                  </Box>
                </Tooltip>
              </Grid>
              <Grid item xs={4} lg={2}>
                <Tooltip title="Comming soon">
                  <Box
                    component="a"
                    href="https://www.creative-tim.com/product/material-kit-react"
                    target="_blank"
                  >
                    <Box
                      component="img"
                      src="https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/react.jpg"
                      width="100%"
                    />
                  </Box>
                </Tooltip>
              </Grid>
              <Grid item xs={4} lg={2}>
                <Tooltip title="Comming soon">
                  <Box
                    component="a"
                    href="#"
                    target="_blank"
                    onClick={e => e.preventDefault()}
                  >
                    <Box
                      component="img"
                      src="https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/sketch.jpg"
                      width="100%"
                    />
                  </Box>
                </Tooltip>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Container>
      <Container>
        <Grid container spacing={3}>
          <Grid
            item
            xs={12}
            lg={5}
            ml="auto"
            sx={{ textAlign: { xs: "center", lg: "left" } }}
          >
            <Typography
              color={"#344767"}
              variant="h4"
              fontWeight="bold"
              mb={0.5}
            >
              Thank you for your support!
            </Typography>
            <Typography color={"#344767"} variant="body1">
              We deliver the best web products
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            lg={5}
            my={{ xs: 5, lg: "auto" }}
            mr={{ xs: 0, lg: "auto" }}
            sx={{ textAlign: { xs: "center", lg: "right" } }}
          >
            <ButtonStarts
              href="https://twitter.com/intent/tweet?text=Check%20Material%20Design%20System%20made%20by%20%40CreativeTim%20%23webdesign%20%23designsystem%20%23mui5&amp;url=https%3A%2F%2Fwww.creative-tim.com%2Fproduct%2Fmaterial-kit-react"
              sx={{ mr: 1 }}
            >
              <XIcon />
              <i className="fab fa-twitter" />
              &nbsp;Tweet
            </ButtonStarts>
            <ButtonStarts
              href="https://www.facebook.com/sharer/sharer.php?u=https://www.creative-tim.com/product/material-kit-react"
              sx={{ mr: 1, background: "#3b5998" }}
            >
              <i className="fab fa-facebook" />
              <FacebookIcon />
              &nbsp;Share
            </ButtonStarts>
            <ButtonStarts
              sx={{
                background: "#e91e63",
              }}
              href="https://www.pinterest.com/pin/create/button/?url=https://www.creative-tim.com/product/material-kit-react"
            >
              <PinterestIcon />
              <i className="fab fa-pinterest" />
              &nbsp;Pin it
            </ButtonStarts>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
const ButtonStarts = styled(Button)(({ theme }) => ({
  textTransform: "uppercase",
  fontFamily: "unset",
  borderRadius: "4px",
  fontWeight: "600",
  fontSize: "14px",
  letterSpacing: "0.03em",
  color: "white",
  background: "#55acee",
  [theme.breakpoints.down("sm")]: {
    width: "170px",
    height: "35px",
    fontSize: "11px",
  },
}));
export default Download;
