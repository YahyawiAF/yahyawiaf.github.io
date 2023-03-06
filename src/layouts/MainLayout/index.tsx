import { FC, ReactNode, useContext } from "react";
import { alpha, lighten, useTheme } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import { ReactComponent as DropDown } from "../../assets/icons/DropDown.svg";
import { ReactComponent as Message } from "../../assets/icons/Message.svg";
import { Box, Popover } from "@mui/material";
import Discuttion from "../../components/LandingPage/Section/Discuttion";
import EmailSender from "~/components/LandingPage/Section/EmailSender";
import { useState, useRef } from "react";

interface SidebarLayoutProps {
  children?: ReactNode;
}

const SidebarLayout: FC<SidebarLayoutProps> = () => {
  const theme = useTheme();
  const [showMessage, setShowMessage] = useState<boolean>(false);
  const [showChat, setShowChat] = useState<boolean>(false);
  const ref = useRef<any>(null);

  const handleShowChat = () => {
    setShowChat(true);
  };

  const handleCloseMessage = () => {
    setShowMessage(false);
  };

  return (
    <>
      <Box
        sx={{
          flex: 1,
          height: "100%",
          display: "flex",

          ".MuiPageTitle-wrapper": {
            background: false ? theme.colors.alpha.trueWhite[5] : "white",
            marginBottom: `${theme.spacing(4)}`,
            boxShadow: false
              ? `0 1px 0 ${alpha(
                  lighten(theme.colors.primary.main, 0.7),
                  0.15
                )}, 0px 2px 4px -3px rgba(0, 0, 0, 0.2), 0px 5px 12px -4px rgba(0, 0, 0, .1)`
              : `0px 2px 4px -3px ${alpha(
                  theme.colors.alpha.black[100],
                  0.1
                )}, 0px 5px 12px -4px ${alpha(
                  theme.colors.alpha.black[100],
                  0.05
                )}`,
          },
        }}
      >
        <Box display="flex" width="100%">
          <Box
            display="flex"
            flexDirection="column"
            overflow={"hidden"}
            width="100%"
          >
            <Header />
            <Box
              sx={{ height: "100%", width: "100%", overflow: "auto" }}
              display="flex"
            >
              <Box sx={{ overflowX: "hidden" }}>
                <Outlet />
                <Box>
                  <Box onClick={() => setShowMessage(true)} ref={ref}>
                    {!showMessage ? (
                      <Message
                        style={{
                          position: "fixed",
                          bottom: "0",
                          right: "0",
                          width: "70px",
                          height: "70px",
                        }}
                      />
                    ) : (
                      <DropDown
                        style={{
                          position: "fixed",
                          bottom: "0",
                          right: "0",
                          width: "70px",
                          height: "70px",
                        }}
                      />
                    )}
                  </Box>
                  <Box>
                    {!showChat ? (
                      <Popover
                        anchorEl={ref.current}
                        onClose={handleCloseMessage}
                        open={showMessage}
                        anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "right",
                        }}
                        sx={{
                          right: "0",
                          top: "-70px",
                          boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.25)",
                        }}
                      >
                        <EmailSender
                          showChat={showChat}
                          onShowChat={handleShowChat}
                        />
                      </Popover>
                    ) : (
                      <Popover
                        anchorEl={ref.current}
                        onClose={handleCloseMessage}
                        open={showMessage}
                        anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "right",
                        }}
                        sx={{
                          right: "0",
                          top: "-70px",
                          boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.25)",
                        }}
                      >
                        <Discuttion />
                      </Popover>
                    )}
                    {/*
                     */}
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default SidebarLayout;
