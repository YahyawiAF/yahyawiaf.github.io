import React, { useRef } from "react";
import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { ReactComponent as Logo } from "../../../../assets/icons/Logo.svg";
import { useNavigate } from "react-router-dom";

import { styled } from "@mui/material/styles";
import zIndex from "@mui/material/styles/zIndex";
import { useOnClickOutside } from "~/hooks/useOnClickOutside";
const NavContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "start",
  flexDirection: "column",
  gap: "40px",
  backgroundColor: "white",
  position: "absolute",
  height: "fit-content",
  top: "17px",
  borderRadius: "20px",
  zIndex: "8",
}));
const ListContainer = styled(List)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
}));
const ItemButton = styled(Box)(({ theme }) => ({
  fontSize: "22px",
  color: "#000000",

  lineHeight: "24px",
}));

const SideBar = ({
  showMenu,
  HandleMenu,
}: {
  showMenu: boolean;
  HandleMenu: () => void;
}) => {
  const navigate = useNavigate();
  const ref = useRef();
  useOnClickOutside(ref, HandleMenu);
  return (
    <NavContainer
      sx={{
        transition: "width 0.5s",
        width: showMenu ? "220px" : "0",
      }}
      ref={ref}
    >
      <Box
        sx={{
          display: showMenu ? "block" : "none",
        }}
      >
        <Logo
          onClick={() => {
            HandleMenu(), navigate("/");
          }}
          cursor={"pointer"}
          height={"80px"}
        />
      </Box>

      <Box
        sx={{
          display: showMenu ? "block" : "none",
        }}
      >
        <ListContainer>
          <ListItem>
            <ItemButton>
              <a
                href="#home"
                style={{ textDecoration: "none", color: "#000000" }}
                onClick={() => {
                  HandleMenu(), navigate("/");
                }}
              >
                Home
              </a>
            </ItemButton>
          </ListItem>
          <Divider sx={{ border: "0.8px solid #000000", width: "100%" }} />
          <ListItem>
            <ItemButton>
              <a
                href="#services"
                style={{ textDecoration: "none", color: "#000000" }}
                onClick={() => {
                  HandleMenu(), navigate("/");
                }}
              >
                Services
              </a>
            </ItemButton>
          </ListItem>
          <Divider sx={{ border: "0.8px solid #000000", width: "100%" }} />
          <ListItem>
            <ItemButton>
              <a
                href="#process"
                style={{ textDecoration: "none", color: "#000000" }}
                onClick={() => {
                  HandleMenu(), navigate("/");
                }}
              >
                Process
              </a>
            </ItemButton>
          </ListItem>
          <Divider sx={{ border: "0.8px solid #000000", width: "100%" }} />
          <ListItem>
            <ItemButton>
              <a
                href="#about"
                style={{ textDecoration: "none", color: "#000000" }}
                onClick={() => {
                  HandleMenu(), navigate("/");
                }}
              >
                About
              </a>
            </ItemButton>
          </ListItem>
          <Divider sx={{ border: "0.8px solid #000000", width: "100%" }} />
          <ListItem>
            <ItemButton
              onClick={() => {
                HandleMenu(), navigate("/");
              }}
            >
              <a
                href="#contact"
                style={{ textDecoration: "none", color: "#000000" }}
              >
                Contact
              </a>
            </ItemButton>
          </ListItem>
          <Divider sx={{ border: "0.8px solid #000000", width: "100%" }} />
          <ListItem>
            <ItemButton
              onClick={() => {
                HandleMenu(), navigate("/Realisation");
              }}
            >
              <a
                href="#realisation"
                style={{ textDecoration: "none", color: "#000000" }}
              >
                Realisations
              </a>
            </ItemButton>
          </ListItem>
        </ListContainer>
      </Box>
    </NavContainer>
  );
};

export default SideBar;
