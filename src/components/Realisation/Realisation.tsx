import { Box } from "@mui/system";
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
