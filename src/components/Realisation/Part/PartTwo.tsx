import React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, CardActionArea } from "@mui/material";
import ProjectOne from "../../../assets/images/ProjectOne.gif";
import ProjectTwo from "../../../assets/images/ProjectTwo.gif";
import ProjectThree from "../../../assets/images/ProjectThree.gif";
import { ReactComponent as GoldStar } from "../../../assets/icons/GoldStar.svg";
import { ReactComponent as GrisStar } from "../../../assets/icons/GrisStar.svg";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { styled, useTheme } from "@mui/material/styles";
import { ReactComponent as RightArrow } from "../../../assets/icons/RightArrow.svg";
import { ReactComponent as LeftArrow } from "../../../assets/icons/LeftArrow.svg";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const ArrowButtonRight = styled(Button)(({ theme }) => ({}));
const ArrowButtonLeft = styled(Button)(({ theme }) => ({}));
const CardContainer = styled(Card)(({ theme }) => ({
  // maxWidth: "40%",
  // height: "100%",
  borderRadius: "20px",
  width: "60%",
  filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.1))",

  [theme.breakpoints.down("md")]: {
    // height: "100%",
    // maxWidth: "80%",
    width: "100%",
  },
}));
const ProjectTitle = styled(Typography)(({ theme }) => ({
  fontSize: "40px",
  color: "#000000",
  [theme.breakpoints.down("md")]: {
    fontSize: "30px",
  },
}));
const Title = styled(Typography)(({ theme }) => ({
  fontSize: "36px",
  color: "#000000",
  [theme.breakpoints.down("md")]: {
    fontSize: "20px",
  },
}));
const SubTitle = styled(Typography)(({ theme }) => ({
  fontSize: "30px",
  color: "#000000",
  [theme.breakpoints.down("md")]: {
    fontSize: "20px",
  },
}));
const Text = styled(Typography)(({ theme }) => ({
  fontSize: "18px",
  color: "#000000",
  [theme.breakpoints.down("md")]: {
    fontSize: "15px",
  },
}));
const StarContainer = styled(Typography)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    width: "100px",
  },
}));

const images = [
  {
    label: "Grambel",
    content: (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          flexDirection: "column",
          paddingBottom: "60px",
        }}
      >
        <ProjectTitle>GRAMBELL</ProjectTitle>
        <CardContainer>
          <CardActionArea>
            <CardMedia
              component="img"
              height="280"
              image={ProjectOne}
              alt="Project one"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                objectFit: "fill",
              }}
            />
            <CardContent sx={{ gap: "30px" }}>
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Title gutterBottom>Elon</Title>
                <StarContainer>
                  <GoldStar />
                  <GoldStar />
                  <GoldStar />
                  <GoldStar />
                  <GrisStar />
                </StarContainer>
              </Typography>

              <SubTitle gutterBottom>Comment</SubTitle>
              <Text>
                WeaveLines knowledge of the startup world and their dedication
                to us prospering in it was incredible. I can t imagine another
                company being better for startup developments. I am very
                impressed with their knowledge of the user experiences and their
                ability to predict future problems.
              </Text>
            </CardContent>
          </CardActionArea>
        </CardContainer>
      </Box>
    ),
  },
  {
    label: "YOUR LIFE CARD",
    content: (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          flexDirection: "column",
          paddingBottom: "60px",
        }}
      >
        <ProjectTitle>YOUR LIFE CARD</ProjectTitle>
        <CardContainer>
          <CardActionArea>
            <CardMedia
              component="img"
              height="280"
              image={ProjectTwo}
              alt="Project two"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                objectFit: "fill",
              }}
            />
            <CardContent sx={{ gap: "30px" }}>
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Title gutterBottom>Elon</Title>
                <StarContainer>
                  <GoldStar />
                  <GoldStar />
                  <GoldStar />
                  <GoldStar />
                  <GrisStar />
                </StarContainer>
              </Typography>

              <SubTitle gutterBottom>Comment</SubTitle>
              <Text>
                WeaveLines knowledge of the startup world and their dedication
                to us prospering in it was incredible. I can t imagine another
                company being better for startup developments. I am very
                impressed with their knowledge of the user experiences and their
                ability to predict future problems.
              </Text>
            </CardContent>
          </CardActionArea>
        </CardContainer>
      </Box>
    ),
  },
  {
    label: "Progect three",
    content: (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          flexDirection: "column",
          paddingBottom: "60px",
        }}
      >
        <ProjectTitle>GRAMBELL</ProjectTitle>
        <CardContainer>
          <CardActionArea>
            <CardMedia
              component="img"
              height="280"
              image={ProjectThree}
              alt="Project Three"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                objectFit: "fill",
              }}
            />
            <CardContent sx={{ gap: "30px" }}>
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Title gutterBottom>Elon</Title>
                <StarContainer>
                  <GoldStar />
                  <GoldStar />
                  <GoldStar />
                  <GoldStar />
                  <GrisStar />
                </StarContainer>
              </Typography>

              <SubTitle gutterBottom>Comment</SubTitle>
              <Text>
                WeaveLines knowledge of the startup world and their dedication
                to us prospering in it was incredible. I can t imagine another
                company being better for startup developments. I am very
                impressed with their knowledge of the user experiences and their
                ability to predict future problems.
              </Text>
            </CardContent>
          </CardActionArea>
        </CardContainer>
      </Box>
    ),
  },
];

const PartTwo = () => {
  const theme = useTheme();
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
  //   const handleStepChange = (step: number) => {
  //     setActiveStep(step);
  //   };

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ArrowButtonLeft>
        <LeftArrow onClick={handleBack} width={"100%"} height={"100%"} />
      </ArrowButtonLeft>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        enableMouseEvents
        //   onChangeIndex={handleStepChange}
      >
        {images.map((step, index) => (
          <div key={step.label}>{step.content}</div>
        ))}
      </AutoPlaySwipeableViews>
      <ArrowButtonRight>
        <RightArrow onClick={handleNext} width={"100%"} height={"100%"} />
      </ArrowButtonRight>
    </Box>
  );
};

export default PartTwo;
