import React from "react";
import {
  Avatar,
  Box,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";

export default function Discuttion() {
  return (
    <Box
      width={"300px"}
      height={"400px"}
      sx={{
        boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.25)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "25%",
          background:
            "linear-gradient(180deg, #ED6A9E 55.21%, rgba(237, 106, 158, 0) 71.35%)",
        }}
      >
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" />
          </ListItemAvatar>
          <ListItemText
            primary="Algosama"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline", fontSize: "12px" }}
                  color="text.primary"
                >
                  We typically reply in a few minutes
                </Typography>
              </React.Fragment>
            }
          />
        </ListItem>
      </Box>
      <Box paddingTop={"10px"} height={"60%"}>
        <ListItem
          alignItems="flex-start"
          sx={{
            top: "-40px",
            display: "flex",
            gap: "10px",
            alignItems: "center",
          }}
        >
          <Typography>
            <Avatar
              alt="Remy Sharp"
              sx={{ width: "30px", height: "30px", right: "0px" }}
            />
          </Typography>

          <Typography
            fontSize={"12px"}
            right={"0px"}
            sx={{ background: "#F3F3F3", height: "50px", padding: "5px" }}
          >
            Check your E-mail we will contact you as soon as possible
          </Typography>
        </ListItem>
        <ListItem
          alignItems="flex-start"
          sx={{
            top: "-40px",
            display: "flex",
            gap: "10px",
            alignItems: "center",
          }}
        >
          <Typography>
            <Avatar
              alt="Remy Sharp"
              sx={{ width: "30px", height: "30px", right: "0px" }}
            />
          </Typography>

          <Typography
            fontSize={"12px"}
            right={"0px"}
            sx={{ background: "#F3F3F3", height: "50px", padding: "5px" }}
          >
            You can send an email directly to AlgoSama@outlook.com
          </Typography>
        </ListItem>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingLeft: "10px",
          paddingTop: "10px",
        }}
      ></Box>
    </Box>
  );
}
