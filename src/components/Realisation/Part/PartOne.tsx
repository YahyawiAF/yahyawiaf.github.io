import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Template from "../../../assets/images/Template.png";
import Map from "../../../assets/images/Map.png";
const Title = styled(Typography)(({ theme }) => ({
  fontFamily: "Josefin Sans",
  fontStyle: "normal",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  textTransform: "uppercase",
  padding: "40px",
  [theme.breakpoints.down("md")]: {
    padding: "20px",
  },

  color: "#FFFFFF",
}));

const PartOne = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        paddingTop: "10% ",
        paddingRight: "20%",
        paddingLeft: "20%",

        background: `url(${Map}), linear-gradient(180deg, #0B6AB0 0%, rgba(11, 106, 176, 0) 100%)`,
        backgroundPositionY: "center !important",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        gap: "40px",
      }}
      id="realisation"
    >
      <Title variant="h1">Our Templates</Title>
      <Typography
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={Template} width={"100%"} />
      </Typography>
    </Box>
  );
};

export default PartOne;
