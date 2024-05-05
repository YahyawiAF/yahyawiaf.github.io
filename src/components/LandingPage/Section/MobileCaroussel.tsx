import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useTheme, styled } from "@mui/material/styles";

import ImageA from "../../../assets/images/ImageA.png";
import ImageB from "~/assets/images/imageB.png";
import ImageC from "../../../assets/images/ImageC.png";
import ImageD from "../../../assets/images/ImageD.png";
import ImageE from "../../../assets/images/ImageE.png";
import ImageF from "../../../assets/images/ImageF.png";

import { ReactComponent as RightArrow } from "../../../assets/icons/RightArrow.svg";
import { ReactComponent as LeftArrow } from "../../../assets/icons/LeftArrow.svg";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const TitleImage = styled(Typography)(({ theme }) => ({
  fontSize: "1.5rem",
  color: "#000000",
  //   [theme.breakpoints.between("md", "lg")]: {
  //     fontSize: "26px",
  //   },
}));
const TextImage = styled(Typography)(({ theme }) => ({
  fontSize: "1rem",
  color: "#000000",
  //   [theme.breakpoints.between("md", "lg")]: {
  //     fontSize: "22px",
  //   },
}));
const Caroussel = styled(Box)(({ theme }) => ({
  maxWidth: "680px",
  flexGrow: 1,
  maxHeight: "500px",
  padding: "20px",
  //   paddingTop: "40px",
  //   paddingRight: "40px",
  //   paddingLeft: "40px",
}));

const images = [
  {
    label: "Analyze",
    imgPath: ImageA,
    text: "and collect data and develop your idea into a concept of a digital product .",

    content: (
      <Box>
        <Box
          component="img"
          sx={{
            height: 398,
            display: "block",
            overflow: "hidden",
            width: "100%",
          }}
          src={ImageB}
          alt="Prototype"
        />
        <TitleImage>Prototype</TitleImage>
        <TextImage>
          We draft your functional specifications and sketch your digital
          solution for early business validation.
        </TextImage>
      </Box>
    ),
  },
  {
    label: "Prototype",
    imgPath: ImageB,
    text: "We draft your functional specifications and sketch your digital solution for early business validation.",
    content: (
      <Box>
        <Box
          component="img"
          sx={{
            height: 398,
            display: "block",
            overflow: "hidden",
            width: "100%",
          }}
          src={ImageA}
          alt="Analyze"
        />
        <TitleImage>Analyze</TitleImage>
        <TextImage>
          and collect data and develop your idea into a concept of a digital
          product .
        </TextImage>
      </Box>
    ),
  },
  {
    label: "Design",
    imgPath: ImageC,
    text: "We develop your brand identity and deliver wireframes and high-fidelity mock-ups that meet your expectations.",
    content: (
      <Box>
        <Box
          component="img"
          sx={{
            height: 398,
            display: "block",
            overflow: "hidden",
            width: "100%",
          }}
          src={ImageC}
          alt="Design"
        />
        <TitleImage>Design</TitleImage>
        <TextImage>
          We develop your brand identity and deliver wireframes and
          high-fidelity mock-ups that meet your expectations.
        </TextImage>
      </Box>
    ),
  },
  {
    label: "Devolop",
    imgPath: ImageD,
    text: "We determine the ideal technology stack and develop your cutting edge product using modern technologies.",
    content: (
      <Box>
        <Box
          component="img"
          sx={{
            height: 398,
            display: "block",
            overflow: "hidden",
            width: "100%",
          }}
          src={ImageD}
          alt="Devolop"
        />
        <TitleImage>Devolop</TitleImage>
        <TextImage>
          We determine the ideal technology stack and develop your cutting edge
          product using modern technologies.
        </TextImage>
      </Box>
    ),
  },
  {
    label: "Deliver",
    imgPath: ImageE,
    text: "We will help you launch your product and migrate your software and systems to the cloud to ensure scalability.",
    content: (
      <Box>
        <Box
          component="img"
          sx={{
            height: 398,
            display: "block",
            overflow: "hidden",
            width: "100%",
          }}
          src={ImageE}
          alt="Deliver"
        />
        <TitleImage>Deliver</TitleImage>
        <TextImage>
          We will help you launch your product and migrate your software and
          systems to the cloud to ensure scalability.
        </TextImage>
      </Box>
    ),
  },
  {
    label: "Support",
    imgPath: ImageF,
    text: "needed. Operations Support, Application Support and Staff Augmentation.",
    content: (
      <Box>
        <Box
          component="img"
          sx={{
            height: 398,
            display: "block",
            overflow: "hidden",
            width: "100%",
          }}
          src={ImageF}
          alt="Support"
        />
        <TitleImage>Support</TitleImage>
        <TextImage>
          needed. Operations Support, Application Support and Staff
          Augmentation.
        </TextImage>
      </Box>
    ),
  },
];

const MobileCaroussel = () => {
  const theme = useTheme();
  //   maxSteps = images.length;
  const [activeStep, setActiveStep] = React.useState(0);

  const maxSteps = images.length;

  const handleNext = () => {
    console.log("activeStep", activeStep);

    activeStep + 1 === maxSteps
      ? setActiveStep(0)
      : setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    activeStep === 0
      ? setActiveStep(0)
      : setActiveStep(prevActiveStep => prevActiveStep - 1);
  };
  return (
    <>
      <Caroussel>
        <AutoPlaySwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          enableMouseEvents
        >
          {images.map((step, index) => (
            <div key={step.label}>{step.content}</div>
          ))}
        </AutoPlaySwipeableViews>
      </Caroussel>
      <Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
            paddingLeft: "30px",
          }}
        >
          <Button>
            <LeftArrow onClick={handleBack} width={"70px"} height={"70px"} />
          </Button>
          <Button>
            <RightArrow onClick={handleNext} width={"70px"} height={"70px"} />
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default MobileCaroussel;
