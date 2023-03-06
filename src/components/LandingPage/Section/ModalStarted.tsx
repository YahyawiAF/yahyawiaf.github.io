import React, { useRef, useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import { ReactComponent as CloseModal } from "../../../assets/icons/CloseModal.svg";
// import emailjs from "@emailjs/browser";

const Modal = styled(DialogContent)(({ theme }) => ({
  width: "450px",
  height: "1100px",
  borderRadius: "30px",
  padding: "10px",
  [theme.breakpoints.down("md")]: {
    width: "100%",
    height: "100%",
  },
}));

const ButtonStart = styled(Button)(
  () => `
  position: absolute;
  width: 150px;
  height: 35px;
 
  
  background: #ED6A9E;
  box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.3);
  border-radius: 55.5px;
      `
);

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: "30px",
  },
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

export default function CustomizedDialogs({
  show,
  onClose,
}: {
  show: boolean;
  onClose: () => void;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");
  const form = useRef<any>(null);
  const handleName = (event: any) => {
    setName(event.target.value);
  };

  const handleEmail = (event: any) => {
    setEmail(event.target.value);
  };
  const handleSubject = (event: any) => {
    setSubject(event.target.value);
  };
  const handleContent = (event: any) => {
    setContent(event.target.value);
  };
  const HandleSubmit = (event: any) => {
    event.preventDefault();
    const contact = {
      name: name,
      email: email,
      subject: subject,
      content: content,
    };
    const contents = `${form.current}`;
    // emailjs
    //   .sendForm(
    //     "service_fmpomjh",
    //     "template_rvilwpi",
    //     form.current,
    //     "i5fJ9iqi4a9bX4TWH"
    //   )
    //   .then(
    //     result => {
    //       console.log(result.text);
    //     },
    //     error => {
    //       console.log(error.text);
    //     }
    //   );
  };

  return (
    <BootstrapDialog
      onClose={onClose}
      aria-labelledby="customized-dialog-title"
      open={show}
    >
      <Modal>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography sx={{ fontSize: "22px", color: "#000000" }}>
                Let’s Talk?
              </Typography>
              <Typography sx={{ cursor: "pointer" }} onClick={onClose}>
                <IconButton>
                  {" "}
                  <CloseModal height={"18px"} width={"20px"} />
                </IconButton>
              </Typography>
            </Box>

            <Box>
              <Typography sx={{ fontSize: "18px", color: "#868686" }}>
                Let’s make something awesome together
              </Typography>
            </Box>
          </Box>
          <form ref={form} onSubmit={HandleSubmit}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "15px" }}>
              <Typography sx={{ fontSize: "15px" }}>
                YOUR NAME
                <TextField
                  id="outlined-size-small"
                  size="small"
                  placeholder="Write here"
                  sx={{ width: "100%" }}
                  // value={name}
                  name="user_name"
                  onChange={handleName}
                />
              </Typography>

              <Typography sx={{ fontSize: "15px" }}>
                YOUR Email
                <TextField
                  id="outlined-size-small"
                  size="small"
                  placeholder="Write here"
                  sx={{ width: "100%" }}
                  // value={email}
                  name="user_email"
                  onChange={handleEmail}
                />
              </Typography>
              <Typography sx={{ fontSize: "15px" }}>
                SUBJECT
                <TextField
                  id="outlined-size-small"
                  size="small"
                  placeholder="Write here"
                  sx={{ width: "100%" }}
                  // value={subject}
                  name="subject"
                  onChange={handleSubject}
                />
              </Typography>
              <Typography sx={{ fontSize: "15px" }}>
                Content
                <TextField
                  id="outlined-multiline-static"
                  // label="Multiline"
                  multiline
                  rows={4}
                  placeholder="Write here"
                  sx={{ width: "100%" }}
                  name="content"
                  // value={content}
                  onChange={handleContent}
                />
              </Typography>
              <Typography sx={{ height: "35px" }}>
                <ButtonStart
                  sx={{ fontSize: "18px", color: "#FFFFFF" }}
                  type={"submit"}
                  // onClick={onClose}
                >
                  Submit
                </ButtonStart>
              </Typography>
            </Box>
          </form>
        </Box>
      </Modal>
      {/* <DialogActions></DialogActions> */}
    </BootstrapDialog>
  );
}
