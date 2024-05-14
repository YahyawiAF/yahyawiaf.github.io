import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography, Button, Link as MuiLink } from "@mui/material";

interface RotatingCardProps {
  color?:
    | "primary"
    | "secondary"
    | "info"
    | "success"
    | "warning"
    | "error"
    | "dark"
    | "light";
  image: string;
  title: React.ReactNode;
  description: React.ReactNode;
  action:
    | boolean
    | { type: "external" | "internal"; route: string; label: string };
}

const RotatingCard: React.FC<RotatingCardProps> = ({
  title,
  description,
  action,
}) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      borderRadius="lg"
      position="absolute"
      width="100%"
      height="100%"
      top={0}
      left={0}
      zIndex={5}
      sx={{
        backgroundSize: "cover",
        backfaceVisibility: "hidden",
        transform: "rotateY(180deg)",
      }}
    >
      <Box pt={12} pb={2} px={2} textAlign="center" lineHeight={1}>
        <Typography variant="h3" color="white" gutterBottom>
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="white"
          sx={{
            opacity: 0.8,
          }}
        >
          {description}
        </Typography>
        {action && (
          <Box width="50%" mt={4} mb={2} mx="auto">
            {typeof action === "object" ? (
              action.type === "external" ? (
                <Button
                  component={MuiLink}
                  href={action.route}
                  target="_blank"
                  rel="noreferrer"
                  size="small"
                  fullWidth
                >
                  {action.label}
                </Button>
              ) : (
                <Button
                  component={Link}
                  to={action.route}
                  size="small"
                  fullWidth
                >
                  {action.label}
                </Button>
              )
            ) : null}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default RotatingCard;
