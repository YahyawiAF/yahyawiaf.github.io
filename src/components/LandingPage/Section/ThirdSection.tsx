import { Box } from "@mui/system";
import { Paper, Typography } from "@mui/material";
import useResponsive from "~/hooks/useResponsive";

import { ReactComponent as Metting } from "../../../assets/icons/Meeting.svg";
import { ReactComponent as Design } from "../../../assets/icons/Design.svg";
import { ReactComponent as Dev } from "../../../assets/icons/Dev.svg";
import { ReactComponent as Cloud } from "../../../assets/icons/Cloud.svg";
import { ReactComponent as Job } from "../../../assets/icons/Job.svg";
import { ReactComponent as Support } from "../../../assets/icons/Support.svg";
import ThirdSectionMobile from "./ThirdSectionMobile";

const ThirdSection = () => {
  const smUp = useResponsive("down", "md");
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
      }}
      id="services"
    >
      <Box
        sx={{ display: "flex", flexDirection: "column", paddingLeft: "20px" }}
      >
        <Typography variant="h3" color={"#fff"}>
          Our Services
        </Typography>
        <Typography fontSize={"24px"} color={"#777777"}>
          YOUR PARTNER FROM IDEATION TO DELIVERY
        </Typography>
      </Box>
      {!smUp ? (
        <Box
          sx={{
            flexGrow: 1,
            height: "620px",
            margin: "83px",
            display: "flex",
            flexDirection: "row",
            gap: "88px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              gap: "49px",
            }}
          >
            <Box sx={{ height: "75%", display: "grid" }}>
              <Paper
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  background:
                    "linear-gradient(180deg, #3484ee 90%, rgba(11, 106, 176, 0) 100%)",

                  alignItems: "center",
                  justifyContent: "space-between",

                  boxShadow: "none",
                  padding: "20px",
                  borderRadius: "10px 10px 0px 0px",
                }}
              >
                <Typography>
                  <Metting width={"70px"} />
                </Typography>
                <Typography
                  fontFamily={"Roboto"}
                  fontSize={"24px"}
                  color={"#fff"}
                >
                  Product Management
                </Typography>
              </Paper>
            </Box>
            <Box>
              <Paper
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  background:
                    "linear-gradient(180deg,rgba(11, 106, 176, 0) 0% , #3484ee 10%)",
                  alignItems: "center",
                  justifyContent: "space-between",

                  boxShadow: "none",
                  padding: "20px",
                  borderRadius: "0px 0px 10px 10px",
                }}
              >
                <Typography>
                  <Cloud width={"70px"} />
                </Typography>
                <Typography
                  fontFamily={"Roboto"}
                  fontSize={"24px"}
                  color={"#fff"}
                >
                  Cloud & DevOps
                </Typography>
              </Paper>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",

              width: "100%",
              gap: "49px",
            }}
          >
            <Box>
              <Paper
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  background:
                    "linear-gradient(180deg, #3484ee 90%, rgba(11, 106, 176, 0) 100%)",
                  alignItems: "center",
                  justifyContent: "space-between",

                  boxShadow: "none",
                  padding: "20px",
                  borderRadius: "10px 10px 0px 0px",
                }}
              >
                <Typography
                  fontFamily={"Roboto"}
                  fontSize={"24px"}
                  color={"#fff"}
                >
                  UX/UI Design
                </Typography>
                <Typography>
                  <Design width={"70px"} />
                </Typography>
              </Paper>
            </Box>
            <Box sx={{ height: "75%", display: "grid" }}>
              <Paper
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  background:
                    "linear-gradient(180deg, rgba(11, 106, 176, 0) 0% ,  #3484ee 10%)",
                  alignItems: "center",
                  justifyContent: "space-between",

                  boxShadow: "none",
                  padding: "20px",
                  borderRadius: "0px 0px 10px 10px",
                }}
              >
                <Typography
                  fontFamily={"Roboto"}
                  fontSize={"24px"}
                  color={"#fff"}
                >
                  Staff Augumentation
                </Typography>
                <Typography>
                  <Job width={"70px"} />
                </Typography>
              </Paper>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",

              width: "100%",

              gap: "49px",
            }}
          >
            <Box sx={{ height: "75%", display: "grid" }}>
              <Paper
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  background:
                    "linear-gradient(180deg, #3484ee 90%, rgba(11, 106, 176, 0) 100%)",
                  alignItems: "center",
                  justifyContent: "space-between",

                  boxShadow: "none",
                  padding: "20px",
                  borderRadius: "10px 10px 0px 0px",
                }}
              >
                <Typography>
                  <Dev width={"70px"} />
                </Typography>
                <Typography fontSize={"24px"} color={"#fff"}>
                  Development
                </Typography>
              </Paper>
            </Box>

            <Box>
              <Paper
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  background:
                    "linear-gradient(180deg,rgba(11, 106, 176, 0) 0% , #3484ee 10%)",
                  alignItems: "center",
                  justifyContent: "space-between",
                  boxShadow: "none",
                  padding: "20px",
                  borderRadius: "0px 0px 10px 10px",
                }}
              >
                <Typography>
                  <Support width={"70px"} />
                </Typography>
                <Typography
                  fontFamily={"Roboto"}
                  fontSize={"24px"}
                  color={"#fff"}
                >
                  Support
                </Typography>
              </Paper>
            </Box>
          </Box>
        </Box>
      ) : (
        <ThirdSectionMobile />
      )}
    </Box>
  );
};

export default ThirdSection;
