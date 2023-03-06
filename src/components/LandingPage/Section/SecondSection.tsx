import { Box, Paper, Typography } from "@mui/material";
import { ReactComponent as Cheese } from "../../../assets/icons/chesse.svg";
import { ReactComponent as Roket } from "../../../assets/icons/Roket.svg";
import { ReactComponent as Lampe } from "../../../assets/icons/Lampe.svg";
import { styled } from "@mui/material/styles";

const ElementBox = styled(Box)(({ theme }) => ({
  paddingLeft: "40px",
  [theme.breakpoints.down("md")]: {
    paddingLeft: "30px",
  },

  [theme.breakpoints.down("sm")]: {
    paddingLeft: "20px",
  },
}));
const PaperWarper = styled(Paper)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexDirection: "row",

  width: "100%",
  height: "354px",
  boxShadow: "none",
  borderRadius: "0",

  [theme.breakpoints.down("md")]: {
    height: "300px",
  },

  [theme.breakpoints.down("sm")]: {
    height: "250px",
  },
}));

const Text = styled(Typography)(({ theme }) => ({
  fontSize: "36px",
  color: "#000000",
  [theme.breakpoints.down("md")]: {
    fontSize: "28px",
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: "12px",
  },
}));
const TitleText = styled(Typography)(({ theme }) => ({
  fontSize: "40px",
  color: "#000000",
  [theme.breakpoints.down("md")]: {
    fontSize: "32px",
  },

  [theme.breakpoints.down("sm")]: {
    fontSize: "15px",
  },
}));

const SecondSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        flexDirection: "column",
        gap: "20px",
      }}
    >
      <PaperWarper
        sx={{
          background:
            "linear-gradient(89.9deg, #0B6AB0 -13.11%, rgba(11, 106, 176, 0) 101.41%)",
        }}
      >
        <Box>
          <Typography>
            <Cheese width={"140px"} />
          </Typography>
        </Box>
        <ElementBox>
          <TitleText>Product Strategy </TitleText>
          <Text>
            We assist you with your product definition, MVP roadmap and
            planning, while making sure it is aligned with your business
            strategy and vision.
          </Text>
        </ElementBox>
      </PaperWarper>
      <PaperWarper
        sx={{
          background:
            "linear-gradient(268deg, #0B6AB0 -13.11%, rgba(11, 106, 176, 0) 101.41%)",
        }}
      >
        <ElementBox>
          <TitleText>Product Design </TitleText>
          <Text>
            Designing a digital product is more than creating wireframes and
            UIs. It is the iterative process of research, creative and technical
            thinking and validation.
          </Text>
        </ElementBox>
        <Box>
          <Typography>
            <Roket width={"140px"} />
          </Typography>
        </Box>
      </PaperWarper>
      <PaperWarper
        sx={{
          background:
            "linear-gradient(89.9deg, #0B6AB0 -13.11%, rgba(11, 106, 176, 0) 101.41%)",
        }}
      >
        <Box>
          <Typography>
            <Lampe width={"140px"} />
          </Typography>
        </Box>
        <ElementBox>
          <TitleText>Innovative Solutions </TitleText>
          <Text>
            Our team follows the agile methodology and delivers product
            incrementally and efficiently. We ensure your product is implemented
            to perfection.
          </Text>
        </ElementBox>
      </PaperWarper>
    </Box>
  );
};

export default SecondSection;
