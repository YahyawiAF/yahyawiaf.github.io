import React from "react";
import { Box, Typography } from "@mui/material";

interface DefaultInfoCardProps {
  color?: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  direction?: "left" | "right" | "center";
  small?: boolean;
}

const DefaultInfoCard: React.FC<DefaultInfoCardProps> = ({
  icon,
  title,
  description,
  direction = "left",
  small = false,
}) => {
  return (
    <Box
      lineHeight={1}
      p={direction === "center" ? 2 : 0}
      textAlign={direction}
    >
      {typeof icon === "string" ? (
        <Typography display="block"> {icon}</Typography>
      ) : (
        icon
      )}
      <Typography
        display="block"
        fontWeight="bold"
        mt={direction === "center" ? 1 : 2}
        mb={1.5}
      >
        {title}
      </Typography>
      <Typography
        display="block"
        variant={small ? "button" : "body2"}
        color="text"
        pr={direction === "left" ? 6 : 0}
        pl={direction === "right" ? 6 : 0}
      >
        {description}
      </Typography>
    </Box>
  );
};

export default DefaultInfoCard;
