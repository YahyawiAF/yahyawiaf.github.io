/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

==========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Card from "@mui/material/Card";

// Material Kit 2 React components
import { Box } from "@mui/material";

// Material Kit 2 React examples
import DefaultNavbar from "./Part/profile";

// Author page sections
import Profile from "./Part/profile";
import Posts from "./Part/posts";
import Contact from "./Part/contact";

import Footer from "./Part/Footer";

// Routes

// Images
import bgImage from "../../assets/images/city-profile.jpg";

function Author(): JSX.Element {
  return (
    <Box width="100%">
      {/*     <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "https://www.creative-tim.com/product/material-kit-react",
          label: "free download",
          color: "info",
        }}
        transparent
        light
      />*/}
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
        <Footer />
      </Box>
    </Box>
  );
}

export default Author;
