import React from "react";
import { Box, Icon, Typography } from "@mui/material";

interface RotatingCardFrontProps {
  color?: string;
  image: string;
  icon?: React.ReactNode | string;
  title: React.ReactNode;
  description: React.ReactNode;
}

const RotatingCardFront: React.FC<RotatingCardFrontProps> = ({
  image,
  icon,
  title,
  description,
}) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignContent="center"
      borderRadius="lg"
      width="100%"
      position="relative"
      zIndex={2}
      sx={{
        backgroundImage: ({}) =>
          `linear-gradient(195deg, rgba(73, 163, 241, 0.85), rgba(73, 163, 241, 0.85)), url(${image})`,

        backgroundSize: "cover",
        backfaceVisibility: "hidden",
      }}
    >
      <Box py={12} px={3} textAlign="center" lineHeight={1}>
        {icon && (
          <Typography variant="h2" color="white" my={2}>
            {icon}
          </Typography>
        )}
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
      </Box>
    </Box>
  );
};

export default RotatingCardFront;
