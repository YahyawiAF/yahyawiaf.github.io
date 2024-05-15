// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components

// Images
import profilePicture from "../../../assets/images/bruce-mars.jpg";
import { Box, Typography, Button, Avatar } from "@mui/material";

function Profile(): JSX.Element {
  return (
    <Box component="section" py={{ xs: 6, sm: 12 }}>
      <Container>
        <Grid container item xs={12} justifyContent="center" mx="auto">
          <Box mt={{ xs: -16, md: -20 }} textAlign="center">
            <Avatar src={profilePicture} alt="Burce Mars" />
          </Box>
          <Grid container justifyContent="center" py={6}>
            <Grid item xs={12} md={7} mx={{ xs: "auto", sm: 6, md: 1 }}>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                mb={1}
              >
                <Typography variant="h3">Algo Sama</Typography>
                <Button variant="outlined" color="info" size="small">
                  Follow
                </Button>
              </Box>
              <Grid container spacing={3} mb={3}>
                <Grid item>
                  <Typography
                    component="span"
                    variant="body2"
                    fontWeight="bold"
                  >
                    323&nbsp;
                  </Typography>
                  <Typography component="span" variant="body2" color="text">
                    Posts
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    component="span"
                    variant="body2"
                    fontWeight="bold"
                  >
                    3.5k&nbsp;
                  </Typography>
                  <Typography component="span" variant="body2" color="text">
                    Followers
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    component="span"
                    variant="body2"
                    fontWeight="bold"
                  >
                    260&nbsp;
                  </Typography>
                  <Typography component="span" variant="body2" color="text">
                    Following
                  </Typography>
                </Grid>
              </Grid>
              <Typography variant="body1" fontWeight="light" color="text">
                Decisions: If you can&apos;t decide, the answer is no. If two
                equally difficult paths, choose the one more painful in the
                short term (pain avoidance is creating an illusion of equality).
                Choose the path that leaves you more equanimous. <br />
                <Typography
                  component="a"
                  href="#"
                  variant="body1"
                  fontWeight="light"
                  color="info"
                  mt={3}
                  sx={{
                    width: "max-content",
                    display: "flex",
                    alignItems: "center",

                    "& .material-icons-round": {
                      transform: `translateX(3px)`,
                      transition:
                        "transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)",
                    },

                    "&:hover .material-icons-round, &:focus .material-icons-round":
                      {
                        transform: `translateX(6px)`,
                      },
                  }}
                ></Typography>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Profile;
