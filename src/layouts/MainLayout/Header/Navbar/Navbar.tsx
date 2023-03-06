import { List, ListItem, ListItemButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { ReactComponent as Logo } from "../../../../assets/icons/Logo.svg";
import { useNavigate } from "react-router-dom";
import React from "react";
import { styled } from "@mui/material/styles";

const NavContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexGrow: 1,
  width: "100%",
  gap: "100px",
}));
const ListContainer = styled(List)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  // [theme.breakpoints.between("md", "lg")]: {
  //   // paddingLeft: "150px",
  // },
}));
const ItemButton = styled(Box)(({ theme }) => ({
  fontSize: "22px",
  color: "#000000",
  // fontFamily: "Josefin Sans",
  // fontStyle: "normal",
  // fontWeight: " 700",
  lineHeight: "24px",
}));

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <NavContainer>
      <Box>
        <Logo
          onClick={() => {
            navigate("/");
          }}
          cursor={"pointer"}
          height={"80px"}
        />
      </Box>

      <Box>
        <ListContainer>
          <ListItem>
            <ItemButton>
              <a
                href="#home"
                style={{ textDecoration: "none", color: "#000000" }}
                onClick={() => {
                  navigate("/");
                }}
              >
                Home
              </a>
            </ItemButton>
          </ListItem>
          <ListItem>
            <ItemButton>
              <a
                href="#services"
                style={{ textDecoration: "none", color: "#000000" }}
                onClick={() => {
                  navigate("/");
                }}
              >
                Services
              </a>
            </ItemButton>
          </ListItem>
          <ListItem>
            <ItemButton>
              <a
                href="#process"
                style={{ textDecoration: "none", color: "#000000" }}
                onClick={() => {
                  navigate("/");
                }}
              >
                Process
              </a>
            </ItemButton>
          </ListItem>
          <ListItem>
            <ItemButton>
              <a
                href="#about"
                style={{ textDecoration: "none", color: "#000000" }}
                onClick={() => {
                  navigate("/");
                }}
              >
                About
              </a>
            </ItemButton>
          </ListItem>
          <ListItem>
            <ItemButton
              onClick={() => {
                navigate("/");
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
          <ListItem>
            <ItemButton
              onClick={() => {
                navigate("/Realisation");
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

export default Navbar;
