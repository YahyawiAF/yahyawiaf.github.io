import { Grid, Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

import { ReactComponent as Metting } from "../../../assets/icons/Meeting.svg";
import { ReactComponent as Design } from "../../../assets/icons/Design.svg";
import { ReactComponent as Dev } from "../../../assets/icons/Dev.svg";
import { ReactComponent as Cloud } from "../../../assets/icons/Cloud.svg";
import { ReactComponent as Job } from "../../../assets/icons/Job.svg";
import { ReactComponent as Support } from "../../../assets/icons/Support.svg";

const ItemPaper = styled(Paper)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  boxShadow: "none",
  gap: "10px",
}));

const ThirdSectionMobile = () => {
  return (
    <Grid
      container
      rowSpacing={1}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      sx={{ padding: "20px" }}
    >
      {/* <ItemBox> */}
      <Grid item xs={6}>
        <ItemPaper
          sx={{
            background:
              "linear-gradient(180deg, #297CBA 45.8%, rgba(255, 255, 255, 0) 100%)",

            borderRadius: "10px 10px 10px 10px",
          }}
        >
          <Typography>
            <Metting width={"35px"} />
          </Typography>
          <Typography fontSize={"15px"} color={"#000000"}>
            Product Management
          </Typography>
        </ItemPaper>
      </Grid>
      <Grid item xs={6}>
        <ItemPaper
          sx={{
            background:
              "linear-gradient(180deg, #EF86B0 45.8%, rgba(239, 134, 176, 0) 100%)",

            borderRadius: "10px 10px 10px 10px",
          }}
        >
          <Typography fontSize={"15px"} color={"#000000"}>
            UX/UI Design
          </Typography>
          <Typography>
            <Design width={"35px"} />
          </Typography>
        </ItemPaper>
      </Grid>
      {/* </ItemBox> */}
      {/* <ItemBox> */}
      <Grid item xs={6}>
        <ItemPaper
          sx={{
            background:
              "linear-gradient(357deg, #EF86B0 45.8%, rgba(239, 134, 176, 0) 100%)",

            borderRadius: "10px 10px 10px 10px",
          }}
        >
          <Typography>
            <Cloud width={"35px"} />
          </Typography>
          <Typography fontSize={"15px"} color={"#000000"}>
            Cloud & DevOps
          </Typography>
        </ItemPaper>
      </Grid>
      <Grid item xs={6}>
        <ItemPaper
          sx={{
            background:
              "linear-gradient(180deg, #297CBA 45.8%, rgba(255, 255, 255, 0) 100%)",

            borderRadius: "10px 10px 10px 10px",
          }}
        >
          <Typography>
            <Dev width={"35px"} />
          </Typography>
          <Typography fontSize={"15px"} color={"#000000"}>
            Development
          </Typography>
        </ItemPaper>
      </Grid>
      {/* </ItemBox> */}
      <Grid item xs={6}>
        {/* <ItemBox> */}
        <ItemPaper
          sx={{
            background:
              "linear-gradient(2deg, #297CBA 45.8%, rgba(255, 255, 255, 0) 100%)",

            borderRadius: "10px 10px 10px 10px",
          }}
        >
          <Typography fontSize={"15px"} color={"#000000"}>
            Staff Augumentation
          </Typography>
          <Typography>
            <Job width={"35px"} />
          </Typography>
        </ItemPaper>
      </Grid>
      <Grid item xs={6}>
        <ItemPaper
          sx={{
            background:
              "linear-gradient(357deg, #EF86B0 45.8%, rgba(239, 134, 176, 0) 100%)",

            borderRadius: "10px 10px 10px 10px",
          }}
        >
          <Typography>
            <Support width={"35px"} />
          </Typography>
          <Typography fontSize={"15px"} color={"#000000"}>
            Support
          </Typography>
        </ItemPaper>
      </Grid>
      {/* </ItemBox> */}
    </Grid>
  );
};

export default ThirdSectionMobile;
