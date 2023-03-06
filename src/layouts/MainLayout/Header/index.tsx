import { useContext, useState } from "react";
import useResponsive from "~/hooks/useResponsive";
import { Box, alpha, styled } from "@mui/material";
import { ReactComponent as Menu } from "../../../assets/icons/Menu.svg";
import AlgosamaWhite from "../../../assets/images/AlgosamaWhite.png";
import Navbar from "./Navbar/Navbar";
import SideBar from "./SideBar/SideBar";

const HeaderWrapper = styled(Box)(
  ({ theme }) => `
        height: ${theme.header.height};
        color: ${theme.header.textColor};
        padding:${theme.typography.pxToRem(14)};
        right: 0;
        z-index: 6;
        background-color: ${alpha(theme.header.background, 0.95)};
        backdrop-filter: blur(3px);
        justify-content: space-between;
        box-shadow: 0px 5px 50px rgb(0 0 0 / 15%);
`
);

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const smUp = useResponsive("down", "md");
  const HandleMenu = () => {
    setShowMenu(false);
  };
  return (
    <>
      {!smUp ? (
        <HeaderWrapper
          display="flex"
          alignItems="center"
          sx={{
            backgroundColor: "white",
          }}
        >
          <Navbar />
        </HeaderWrapper>
      ) : (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            backgroundColor: "#0B6AB0",
            padding: "15px",
          }}
        >
          <>
            <Menu
              width={"70px"}
              height={"70px"}
              onClick={() => setShowMenu(true)}
            />
            <SideBar showMenu={showMenu} HandleMenu={HandleMenu} />
          </>

          <Box>
            {/* <LogoWhite width={"90px"} height={"70px"} /> */}
            <img
              src={AlgosamaWhite}
              alt="algosama"
              // width={"90px"}
              // height={"70px"}
            />
          </Box>
        </Box>
      )}

      {/* <Box display="flex" alignItems="center"> */}
      {/* <Box
          component="span"
          sx={{
            ml: 2,
            display: { lg: "none", xs: "inline-block" },
          }}
        > */}
      {/* <Tooltip arrow title="Toggle Menu">
            <IconButton color="primary" onClick={toggleSidebar}>
              {!sidebarToggle ? (
                <MenuTwoToneIcon fontSize="small" />
              ) : (
                <CloseTwoToneIcon fontSize="small" />
              )}
            </IconButton>
          </Tooltip> */}
      {/* </Box> */}
      {/* </Box> */}
    </>
  );
}

export default Header;
