import React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, CardActionArea } from "@mui/material";
import ProjectOne from "../../../assets/images/ProjectOne.gif";
import ProjectTwo from "../../../assets/images/ProjectTwo.gif";
import ProjectThree from "../../../assets/images/ProjectThree.gif";
import MedSolution from "../../../assets/images/MedSolution.png";
import endstategif from "../../../assets/images/endstategif.gif";
import instaDrinkPro from "../../../assets/images/instaDrinkPro.gif";

import { ReactComponent as GoldStar } from "../../../assets/icons/GoldStar.svg";
import { ReactComponent as GrisStar } from "../../../assets/icons/GrisStar.svg";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { styled, useTheme } from "@mui/material/styles";
import { ReactComponent as RightArrow } from "../../../assets/icons/RightArrow.svg";
import { ReactComponent as LeftArrow } from "../../../assets/icons/LeftArrow.svg";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const ArrowButtonRight = styled(Button)(() => ({}));
const ArrowButtonLeft = styled(Button)(() => ({}));

const CardContainer = styled(Card)(({ theme }) => ({
  borderRadius: "20px",
  width: "60%",
  filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.1))",

  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));
const ProjectTitle = styled(Typography)(({ theme }) => ({
  fontFamily: "Roboto",
  fontSize: "32px",
  color: "#000000",
  [theme.breakpoints.down("md")]: {
    fontSize: "30px",
  },
}));
const Title = styled(Typography)(({ theme }) => ({
  fontSize: "26px",
  fontFamily: "Roboto",
  color: "#000000",
  [theme.breakpoints.down("md")]: {
    fontSize: "20px",
  },
}));
const SubTitle = styled(Typography)(({ theme }) => ({
  fontSize: "25px",
  fontFamily: "Roboto",
  color: "#000000",
  [theme.breakpoints.down("md")]: {
    fontSize: "20px",
  },
}));
const Text = styled(Typography)(({ theme }) => ({
  fontSize: "16px",
  fontFamily: "Roboto",
  textAlign: "justify",
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
                <Title gutterBottom>GRAMBELL</Title>
                <StarContainer>
                  <GoldStar />
                  <GoldStar />
                  <GoldStar />
                  <GoldStar />
                  <GrisStar />
                </StarContainer>
              </Typography>

              <SubTitle gutterBottom></SubTitle>
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
                <Title gutterBottom>Your Life Card</Title>
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
        <ProjectTitle>Strategic</ProjectTitle>
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
                <Title gutterBottom>Strategic Solution</Title>
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
                The system is built using React, Material-UI, and TypeScript,
                providing a modern and user-friendly interface. The system
                includes features such as the ability to view, add, and edit
                patient information, view and manage appointment schedules, and
                view and manage billing information. The system also includes an
                advanced search and filtering feature, making it easy to find
                specific patients and appointments.
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
        <ProjectTitle>Medecal Solution</ProjectTitle>
        <CardContainer>
          <CardActionArea>
            <CardMedia
              component="img"
              height="280"
              image={MedSolution}
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
                <Title gutterBottom>Medecal Solution</Title>
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
                the platform is designed to be easily expandable and
                customizable, allowing it to be tailored to the specific needs
                of different medical facilities. The platform also includes
                inventory management and order tracking features, making it easy
                for customers to keep track of their orders. Our goal with this
                project is to provide an easy and efficient way for customers to
                purchase medical assets online. The platform is built using the
                latest technologies.
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
        <ProjectTitle>EndState MarketPlace</ProjectTitle>
        <CardContainer>
          <CardActionArea>
            <CardMedia
              component="img"
              height="280"
              image={endstategif}
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
                <Title gutterBottom>EndState MarketPlace</Title>
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
                Endstate Marketplace ensures authenticity like no other
                platform. Every listing is backed by a dual-proof system:
                sellers must verify ownership through both a physical NFC chip
                scan and the corresponding NFT. With this innovative approach,
                we guarantee that every item you find on our platform is
                genuine, providing peace of mind for buyers and sellers alike.
                Join Endstate Marketplace and experience trust and authenticity
                in every transaction.
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
        <ProjectTitle>Insta Drink Pro</ProjectTitle>
        <CardContainer>
          <CardActionArea>
            <CardMedia
              component="img"
              height="280"
              image={instaDrinkPro}
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
                <Title gutterBottom>Insta Drink Pro</Title>
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
                Introducing our cutting-edge mobile app, crafted with React
                Native and Material UI for an unparalleled user experience.
                Seamlessly blending the power of React cross-platform
                capabilities with the sleek design principles of Material UI,
                our app delivers a seamless, intuitive interface across iOS and
                Android devices. With fluid animations, responsive layouts, and
                a rich array of customizable components, navigating our app
                feels effortless. exploring content, or connecting with others,
                our app offers a polished, modern solution that as beautiful as
                it is functional. Experience the future of mobile app
                development with React Native and Material UI – download now!
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
        {images.map(step => (
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
