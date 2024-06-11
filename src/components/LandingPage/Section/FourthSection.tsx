/* eslint-disable react/no-unescaped-entities */
import { Box, Button, styled, Typography } from "@mui/material";

import { useTheme } from "@mui/material/styles";

import ImageA from "../../../assets/images/ImageA.png";
import ImageB from "~/assets/images/imageB.png";
import ImageC from "../../../assets/images/ImageC.png";
import ImageD from "../../../assets/images/ImageD.png";
import ImageE from "../../../assets/images/ImageE.png";
import ImageF from "../../../assets/images/ImageF.png";
import useResponsive from "~/hooks/useResponsive";
import { ReactComponent as RightArrow } from "../../../assets/icons/RightArrow.svg";
import { ReactComponent as LeftArrow } from "../../../assets/icons/LeftArrow.svg";
import Question from "../../../assets/images/Question.png";
import YinYang from "../../../assets/images/YinYang.png";
import Bag from "../../../assets/images/Bag.png";
import Chopper from "../../../assets/images/Chopper.png";
import React from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import CustomizedDialogs from "./ModalStarted";
import MobileCaroussel from "./MobileCaroussel";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const Title = styled(Typography)(({ theme }) => ({
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "34px",
  fontFamily: "Roboto",
  color: "#000000",
  [theme.breakpoints.between("md", "lg")]: {
    fontSize: "36px",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "28px",
  },
}));
const SubTitle = styled(Typography)(({ theme }) => ({
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "28px",

  color: "#777777",
  [theme.breakpoints.between("md", "lg")]: {
    fontSize: "20px",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "16px",
  },
}));
const TextDescription = styled(Typography)(({ theme }) => ({
  fontSize: "1rem",
  color: "#000000",
  fontFamily: "Roboto",
  padding: "20px 0",
  [theme.breakpoints.between("md", "lg")]: {
    fontSize: "24px",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "18px",
    width: "100%",
  },
}));

const TextAppear = styled(Typography)(({ theme }) => ({
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "1.5rem",
  fontFamily: "Roboto",
  textAlign: "justify",

  lineHeight: "117.5%",
  color: "#000000",
  [theme.breakpoints.between("md", "lg")]: {
    fontSize: "28px",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "18px",
    textAlign: "justify",
    display: "flex",
    alignItems: "center",
  },
}));
const TitleAppear = styled(Typography)(({ theme }) => ({
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "28px",
  fontFamily: "Roboto",
  color: "#000000",
  [theme.breakpoints.between("md", "lg")]: {
    fontSize: "14px",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "24px",
    textAlign: "justify",
    display: "flex",
    alignItems: "center",
  },
}));
const TitleImage = styled(Typography)(({ theme }) => ({
  fontSize: "1.5rem",
  color: "#000000",
  [theme.breakpoints.between("md", "lg")]: {
    fontSize: "16px",
  },
}));
const TextImage = styled(Typography)(({ theme }) => ({
  fontSize: "16px",
  color: "#000000",
  [theme.breakpoints.between("md", "lg")]: {
    fontSize: "22px",
  },
}));
const Caroussel = styled(Box)(({ theme }) => ({
  maxWidth: "1080px",
  flexGrow: 1,
  [theme.breakpoints.between("md", "lg")]: {
    maxWidth: "880px",
    maxHeight: "500px",
  },
}));
const ContentBox = styled(Box)(({ theme }) => ({
  display: "flex",

  width: "100%",

  justifyContent: "space-between",
  gap: "60px",

  [theme.breakpoints.between("md", "lg")]: {},
}));
const AboutBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  paddingTop: "60px",
  gap: "30px",

  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "flex-start",
    paddingLeft: "30px",
    gap: "30px",
  },
}));
const AboutContent = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "40px",
  padding: "40px",

  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    width: "100%",
    gap: "20px",
  },
}));
const AboutItem = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  backgroundRepeat: "no-repeat",

  justifyContent: "end",
  backgroundPosition: "top",

  [theme.breakpoints.down("md")]: {
    minHeight: "247px",
    maxWidth: "350px",
    justifyContent: "center",
  },
}));
const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",

  width: "100%",
  gap: "30px",
  background: "linear-gradient(180deg,rgba(11, 106, 176, 0) 0% , #3484ee 10%)",

  [theme.breakpoints.down("md")]: {
    gap: "80px",
  },
}));
const ContactContent = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    justifyContent: "center",
    gap: "40px",
  },
}));
const ButtonStart = styled(Button)(({ theme }) => ({
  width: "200px",
  height: "55px",
  borderRadius: "4px",
  fontWeight: "600",
  fontSize: "19px",
  letterSpacing: "0.03em",
  color: "white",
  fontFamily: "Roboto",
  background: "transparent",
  border: "2px solid #f736f8",
  [theme.breakpoints.down("md")]: {
    width: "170px",
    height: "40px",
    fontSize: "15px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));
const ContactTitle = styled(Typography)(({ theme }) => ({
  fontSize: "3rem",
  fontFamily: "Roboto ",
  textAlign: "justify",
  color: "#FFFFFF",
  [theme.breakpoints.down("md")]: {
    fontSize: "36px",
  },
}));
const ContactContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  paddingTop: "100px",
  paddingBottom: "100px",
  [theme.breakpoints.down("md")]: {
    gap: "50px",
    paddingTop: "0",
    paddingBottom: "0",
    justifyContent: "center",
  },
}));
const ContactText = styled(Typography)(({ theme }) => ({
  display: "flex",
  fontSize: "32px",
  fontFamily: "Roboto",
  justifyContent: "start",
  color: "#FFFFFF",
  [theme.breakpoints.down("md")]: {
    display: "flex",
    fontSize: "24px",
    textAlign: "justify",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  },
}));
const ContactSubContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "30px",
  paddingLeft: "60px",
  [theme.breakpoints.down("md")]: {
    paddingLeft: "0px",
    gap: "50px",
  },
}));

const images = [
  {
    label: "Analyze",
    imgPath: ImageA,
    text: "and collect data and develop your idea into a concept of a digital product .",
    label2: "Prototype",
    imgPath2: ImageB,
    text2:
      "We draft your functional specifications and sketch your digital solution for early business validation.",
    content: (
      <ContentBox>
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
      </ContentBox>
    ),
  },
  {
    label: "Design",
    imgPath: ImageC,
    text: "We develop your brand identity and deliver wireframes and high-fidelity mock-ups that meet your expectations.",
    label2: "Devolop",
    imgPath2: ImageD,
    text2:
      "We determine the ideal technology stack and develop your cutting edge product using modern technologies.",
    content: (
      <ContentBox>
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
            We determine the ideal technology stack and develop your cutting
            edge product using modern technologies.
          </TextImage>
        </Box>
      </ContentBox>
    ),
  },
  {
    label: "Deliver",
    imgPath: ImageE,
    text: "We will help you launch your product and migrate your software and systems to the cloud to ensure scalability.",
    label2: "Support",
    imgPath2: ImageF,
    text2:
      "needed. Operations Support, Application Support and Staff Augmentation.",
    content: (
      <ContentBox>
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
      </ContentBox>
    ),
  },
];

const FourthSection = () => {
  const smUp = useResponsive("down", "md");
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const [show, setShow] = React.useState(false);
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

  const handleClose = () => {
    setShow(false);
  };

  return (
    <>
      <CustomizedDialogs show={show} onClose={handleClose} />
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",

          width: "100%",
          background:
            "linear-gradient(180deg,rgba(11, 106, 176, 0) 0% , #3484ee 90%)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: "20px",
          }}
          id="process"
        >
          <Title>Our Process</Title>
          <SubTitle>The magic is in the details</SubTitle>
          <TextDescription>
            We love crafting unique products tailored to our clients’
            requirements, using a customer-centric Agile product delivery
            approach. This ensures the delivery of a continuous flow of valuable
            products and services to clients and users. We do this across
            multiple touch points to help startups and companies achieve their
            goals fast and effectively.
          </TextDescription>
        </Box>
        {!smUp ? (
          <>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: "40px",
                // paddingLeft: "100px",

                margin: "30px",
              }}
            >
              <Caroussel>
                <AutoPlaySwipeableViews
                  axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                  index={activeStep}
                  enableMouseEvents
                >
                  {images.map(step => (
                    <div key={step.label}>{step.content}</div>
                  ))}
                </AutoPlaySwipeableViews>
              </Caroussel>
            </Box>

            <Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "40px",
                  paddingLeft: "40px",
                }}
              >
                <Button>
                  <LeftArrow onClick={handleBack} />
                </Button>
                <Button>
                  <RightArrow onClick={handleNext} />
                </Button>
              </Box>
            </Box>
          </>
        ) : (
          <MobileCaroussel />
        )}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <AboutBox>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                padding: "0 20px",
              }}
              id="about"
            >
              <Title>About</Title>
              <SubTitle>WE BRING YOUR IDEAS TO LIFE</SubTitle>
              <TextDescription>
                We love crafting unique products tailored to our clients’
                requirements, using a customer-centric Agile product delivery
                approach. This ensures the delivery of a continuous flow of
                valuable products and services to clients and users. We do this
                across multiple touch points to help startups and companies
                achieve their goals fast and effectively.
              </TextDescription>
            </Box>
          </AboutBox>
        </Box>
        <AboutContent>
          <AboutItem
            sx={{
              backgroundImage: `url(${Question})`,
              backgroundPosition: "center",
              backgroundSize: "contain",
            }}
          >
            <TitleAppear>WHO WE ARE</TitleAppear>
            <TextAppear>
              We are a boutique software development company based in Tunis. We
              offer product consulting services and build innovative digital
              products for startups and companies.
            </TextAppear>
          </AboutItem>
          <AboutItem
            sx={{
              backgroundImage: `url(${YinYang})`,
              backgroundPosition: "center",
              backgroundSize: "contain",
            }}
          >
            <TitleAppear>OUR PHILOSOPHY</TitleAppear>
            <TextAppear>
              We are a boutique software development company based in Tunis. We
              offer product consulting services and build innovative digital
              products for startups and companies.
            </TextAppear>
          </AboutItem>
          <AboutItem
            sx={{
              backgroundImage: `url(${Bag})`,
              backgroundPosition: "center",
              backgroundSize: "contain",
            }}
          >
            <TitleAppear>HOW WE WORK</TitleAppear>
            <TextAppear>
              We put the end-users product experience at the heart of our
              thinking process while taking into consideration competition and
              industry trends.
            </TextAppear>
          </AboutItem>
        </AboutContent>
        <ContactContainer id="contact">
          <Box>
            <ContactTitle> Let’s Work Together</ContactTitle>
          </Box>
          <ContactContent>
            <ContactSubContainer>
              <ContactText>
                Get in touch to let us know what you’re looking for and we will
                get back to you soon.
              </ContactText>
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "start",
                }}
              >
                <ButtonStart
                  variant="contained"
                  onClick={() => {
                    setShow(true);
                  }}
                >
                  let's talk
                </ButtonStart>
              </Typography>
            </ContactSubContainer>
            <Box>
              <img src={Chopper} width={"100%"} />
            </Box>
          </ContactContent>
        </ContactContainer>
      </Container>
    </>
  );
};

export default FourthSection;
