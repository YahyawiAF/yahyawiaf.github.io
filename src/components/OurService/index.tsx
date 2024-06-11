import * as React from "react";
import Box from "@mui/material/Box";
import image1 from "../../assets/images/ImageD.png";
import image from "../../assets/images/ImageE.png";
import { Container, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import LaptopChromebookIcon from "@mui/icons-material/LaptopChromebook";
import PublicSharpIcon from "@mui/icons-material/PublicSharp";
import Diversity2SharpIcon from "@mui/icons-material/Diversity2Sharp";
import MonetizationOnSharpIcon from "@mui/icons-material/MonetizationOnSharp";
import { IoCloudUploadOutline } from "react-icons/io5";
import { WiCloudUp } from "react-icons/wi";
import bgImage from "../../assets/images/servicesImage.jpeg";

interface CardProps {
  icon?: React.ReactNode;
  title?: string;
  typography: string;
}
interface SkillCardProps {
  //icon?: React.ReactNode;
  title?: string;
  icon?: React.ReactNode;
  typography?: string;
}

const ServiceCard: React.FC<CardProps> = ({ icon, title, typography }) => {
  return (
    <ButtonStarts
      sx={{
        display: "flex",
        width: "100%",
        gap: "20px",
        ["&hover"]: {
          background: "black",
        },
      }}
    >
      {icon}
      <Box>
        <Typography variant="h5" color="#040e56" gutterBottom>
          {title}
        </Typography>
        <Typography color="#9b9b9b" gutterBottom>
          {typography}
        </Typography>
      </Box>
    </ButtonStarts>
  );
};
const SkillsCard: React.FC<SkillCardProps> = ({ title, typography, icon }) => {
  return (
    <Box
      sx={{
        width: 250,
        height: 280,
        position: "relative",
        backgroundColor: "#56ffbd",
        h5: {
          fontFamily: "Roboto, sans-serif",
          fontSize: "16px",
          fontWeight: 400,
        },
        "&:hover": {
          div: {
            width: 250,

            backgroundColor: "#40d6ff",
            svg: {
              fontSize: 50,
              color: "white",
              width: 150,
              height: 150,
              textAlign: "center",

              bottom: "-40px",
              left: "5px",
              transition: "opacity 0.4s, transform 1s",
              transform: "translateY(-10%)",
              opacity: 0.7,
              position: "absolute",
            },
          },
          h5: {
            color: "#FFF",
          },
          h3: {
            color: "#FFF",
          },
          span: {
            transition: "color 0.4s",
          },
        },
      }}
    >
      <span
        style={{
          position: "absolute",
          color: "black",
          zIndex: 2,
          width: "100%",
          height: "100%",
          fontFamily: "Blinker, sans-serif",
          padding: "2rem",
        }}
      >
        <h3>{title}</h3>
        <h5>{typography}</h5>
      </span>
      <Box
        sx={{
          width: 10,
          height: 280,
          transition: "all .4s ease",
          position: "absolute",

          svg: {
            opacity: 0,
            position: "absolute",
            color: "#fff",
            fontSize: 50,
          },
          div: {
            background: "none",
          },
        }}
      >
        {icon}
      </Box>
    </Box>
  );
};
export default function MasonryImageList() {
  return (
    <>
      <Box
        component="footer"
        py={6}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ContainerBlock sx={{ display: "flex", alignItems: "center" }}>
          <ImageBlock
            sx={{
              position: "relative",
              width: "50%",
              height: 450,
            }}
          >
            <img
              srcSet={image1}
              src={image1}
              alt={"image algo"}
              loading="lazy"
              style={{
                position: "absolute",
                right: 0,
                width: "70%",
              }}
            />
            <img
              srcSet={image}
              src={image}
              alt={"image algo"}
              loading="lazy"
              style={{
                position: "absolute",
                left: 0,
                width: "70%",
                bottom: 0,
              }}
            />
          </ImageBlock>
          <Box
            sx={{
              padding: "1rem",
            }}
          >
            <Typography variant="h5" color="#497dff" gutterBottom>
              Wellcome to Virtu company
            </Typography>
            <Typography variant="h3" color="#040e56" gutterBottom>
              The best tech company
            </Typography>
            <Typography color="#9b9b9b" gutterBottom>
              Phasellus odio dolor, tincidunt sed rutrum at, <br /> condimentum
              ac ipsum. Nullam congue pretium nisl. Curabitur <br />
              at sem et leo dictum pretium. <br /> Morbi in rutrum tellus. Donec
              interdum ut felis et rutrum.
            </Typography>
            <Typography color="#9b9b9b" gutterBottom>
              {" "}
              Proin vitae venenatis sem. Aenean mattis malesuada dolor eget
              aliquam.
            </Typography>
          </Box>
        </ContainerBlock>
      </Box>

      <Box sx={{}}>
        <Grid sx={{ flexGrow: 1 }} container spacing={0}>
          <Grid item xs={12}>
            <Grid
              sx={theme => ({
                [theme.breakpoints.down(1100)]: {
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)", // Corrected property name and string value
                  gridTemplateRows: "repeat(2, 1fr)", // Corrected property name and string value
                  gap: "10px", // Corrected property value
                },
                [theme.breakpoints.down(500)]: {
                  display: "contents",
                },
              })}
              container
              justifyContent="center"
              spacing={0.5}
            >
              {itemData.map(value => (
                <Grid
                  sx={theme => ({
                    width: "20%",
                    cursor: "pointer",
                    [theme.breakpoints.down(1100)]: {
                      width: "100%",
                      fontSize: "11px",
                    },
                  })}
                  key={value.index}
                  item
                >
                  <ServiceCard
                    icon={value.icon}
                    title={value.title}
                    typography={value.typography}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Box
          minHeight="43rem"
          width="100%"
          sx={{
            backgroundImage: () =>
              `linear-gradient(195deg, rgba(66, 66, 74, 0.8), rgba(25, 25, 25, 0.8)),  url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "grid",
            placeItems: "center",
          }}
        >
          <SkilsBox sx={{ width: "100%", display: "flex", padding: "0 3rem" }}>
            <Box className="hover-box" sx={{ width: "40%" }}>
              <Typography variant="h4" color="#56ffbd" gutterBottom>
                Why Choose us
              </Typography>
              <Typography variant="h2" color="#FFF" gutterBottom>
                What we do ?
              </Typography>
              <Typography variant="h6" color="#fff" gutterBottom>
                Nulla ac eros vel neque mattis maximus. In et feugiat neque, vel
                porta ante. Morbi at justo justo. Etiam eget eros ac enim
                iaculis sagittis. Maecenas eget sapien purus. Phasellus gravida
                viverra convallis. Ut vitae mauris tincidunt, pharetra turpis
                condimentum, eleifend ipsum. Proin mollis bibendum odio, eu
                scelerisque lacus fermentum in.
              </Typography>
            </Box>
            <Box
              sx={{
                width: "60%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Grid
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                {itemDataSkills.map(value => (
                  <Grid item key={value.index}>
                    <SkillsCard
                      icon={value.icon}
                      title={value.title}
                      typography={value.typography}
                    />
                  </Grid>
                ))}
              </Grid>
            </Box>
          </SkilsBox>
        </Box>
      </Box>
    </>
  );
}

const itemData = [
  {
    icon: <LaptopChromebookIcon />,
    index: 1,
    title: "17 Project Completed ",
    typography: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  },
  {
    icon: <PublicSharpIcon />,
    index: 2,
    title: "862 world wide client",
    typography: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  },
  {
    icon: <Diversity2SharpIcon />,
    index: 3,
    title: "More than 100 company project",
    typography: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  },
  {
    icon: <MonetizationOnSharpIcon />,
    index: 4,
    title: "More than $5 M raised capital",
    typography: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  },
];

const itemDataSkills = [
  {
    icon: <WiCloudUp />,
    index: 1,
    title: "Data Driven",
    typography:
      "We bring the right people together to challenge established thinking  and drive transform in 2020",
  },
  {
    icon: <IoCloudUploadOutline />,
    index: 2,
    title: "Market Analys ",
    typography:
      "We bring the right people together to challenge established thinking  and drive transform in 2020",
  },
  {
    icon: <IoCloudUploadOutline />,
    index: 3,
    title: "Tech Support",
    typography:
      "We bring the right people together to challenge established thinking  and drive transform in 2020",
  },
  {
    icon: <IoCloudUploadOutline />,
    index: 4,
    title: "Data Secure",
    typography:
      "We bring the right people together to challenge established thinking  and drive transform in 2020",
  },
];

const SkilsBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down(1190)]: {
    flexDirection: "column",
    ".hover-box": {
      width: "100%",
    },
  },
}));

const ButtonStarts = styled(Box)(({ theme }) => ({
  height: "145px",
  "&:hover": {
    boxShadow: "-7px 6px 7px -4px rgba(44, 25, 9, 0.1)",
  },
  [theme.breakpoints.down(1190)]: {
    height: "200px",
    fontSize: "11px",
  },
  [theme.breakpoints.down(1100)]: {
    height: "145px",
    fontSize: "11px",
  },
}));
const ImageBlock = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down(1100)]: {
    width: "500px",
    height: "350px",
    fontSize: "11px",
  },
  [theme.breakpoints.down(600)]: {
    width: "430px",
    height: "330px",
  },
  [theme.breakpoints.down(450)]: {
    width: "370px",
    height: "280px",
  },
  [theme.breakpoints.down(450)]: {
    width: "330px",
    height: "250px",
  },
}));
const ContainerBlock = styled(Container)(({ theme }) => ({
  [theme.breakpoints.down(1100)]: {
    flexDirection: "column",
  },
  [theme.breakpoints.down(650)]: {},
}));
