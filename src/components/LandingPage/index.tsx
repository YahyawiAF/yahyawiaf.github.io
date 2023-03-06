import FirstSection from "./Section/FirstSection";
import SecondSection from "./Section/SecondSection";
import ThirdSection from "./Section/ThirdSection";
import FourthSection from "./Section/FourthSection";
import { Box } from "@mui/material";

import Footer from "~/layouts/MainLayout/Footer/Footer";

function HomePage() {
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
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "100px",
          }}
        >
          <FirstSection />
          <SecondSection />
          <ThirdSection />
          <FourthSection />
        </Box>

        <Footer />
      </Box>
    </>
  );
}

export default HomePage;
