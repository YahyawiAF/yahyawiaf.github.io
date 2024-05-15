// @mui material components
import Card from "@mui/material/Card";

// Material Kit 2 React components
import { Box, Grid } from "@mui/material";

// Material Kit 2 React examples

// Author page sections
import Profile from "./Part/profile";
import Posts from "./Part/posts";
import Contact from "./Part/contact";

import Footer from "./Part/Footer";

// Routes

// Images
import bgImage from "../../assets/images/city-profile.jpg";
import PartTwo from "./Part/PartTwo";

function Author(): JSX.Element {
  return (
    <Box width="100%">
      <Box width="100%">
        <Box
          minHeight="25rem"
          width="100%"
          sx={{
            backgroundImage: () =>
              `linear-gradient(195deg, rgba(66, 66, 74, 0.8), rgba(25, 25, 25, 0.8)),  url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "grid",
            placeItems: "center",
          }}
        />
        <Card
          sx={{
            p: 2,
            mx: { xs: 2, lg: 3 },
            mt: -8,
            mb: 4,
            backgroundColor: () => "saturate(200%) blur(30px)",
            boxShadow: () => "",
          }}
        >
          <Profile />
          <Posts />
        </Card>
        <Contact />
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
        <Footer />
      </Box>
    </Box>
  );
}

export default Author;
