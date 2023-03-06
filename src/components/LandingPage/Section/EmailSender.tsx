import React, { useRef } from "react";
import {
  Avatar,
  Box,
  Button,
  ListItem,
  ListItemAvatar,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";

import { ReactComponent as Send } from "../../../assets/icons/Send.svg";

import emailjs from "@emailjs/browser";

const EmailSender = ({
  showChat,
  onShowChat,
}: {
  showChat: boolean;
  onShowChat: () => void;
}) => {
  const form = useRef<any>(null);
  const HandleSubmit = (event: any) => {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_fmpomjh",
        "template_qocsk2u",
        form.current,
        "i5fJ9iqi4a9bX4TWH"
      )
      .then(
        result => {
          console.log(result.text);
        },
        error => {
          console.log(error.text);
        }
      );
    onShowChat();
  };

  return (
    <Box
      width={"300px"}
      height={"400px"}
      sx={{
        boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.25)",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "25%",
          background:
            "linear-gradient(180deg, #ED6A9E 55.21%, rgba(237, 106, 158, 0) 71.35%)",
          alignItems: "flex-start",
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
      <form ref={form} onSubmit={HandleSubmit}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: "80%",
            paddingRight: "10px",
            paddingLeft: "10px",
          }}
        >
          <Typography>
            Please Send Your Email
            <TextField
              id="standard-multiline-flexible"
              placeholder="Write here..."
              multiline
              maxRows={4}
              variant="standard"
              name="user_email"
              type="email"
            />
          </Typography>
          <Button type="submit">
            <Send />
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default EmailSender;
