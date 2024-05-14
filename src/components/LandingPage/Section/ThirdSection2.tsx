/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { Icon } from "@mui/material";
import { Box, Typography, Avatar } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";

interface DefaultReviewCardProps {
  color?: string;
  image?: string;
  name: string;
  date: string;
  review: string;
  rating: 1 | 2 | 3 | 4 | 5;
}

const DefaultReviewCard: React.FC<DefaultReviewCardProps> = ({
  color = "transparent",
  image,
  name,
  date,
  review,
  rating,
}) => {
  const ratings = {
    0.5: [
      <Icon key={1}>star_outline</Icon>,
      <Icon key={2}>star_outline</Icon>,
      <Icon key={3}>star_outline</Icon>,
      <Icon key={4}>star_outline</Icon>,
      <Icon key={5}>star_outline</Icon>,
    ],
    // Rest of the ratings...
  };

  return (
    <Box
      //variant={color === "transparent" ? "contained" : "gradient"}
      // bgColor={color}
      borderRadius="xl"
      // shadow={color === "transparent" ? "none" : "md"}
      p={3}
    >
      {image && (
        <Avatar
          src={image}
          alt={name}
          variant="rounded"
          //size="lg"
          // shadow="md"
          sx={{ mt: -5, mb: 1 }}
        />
      )}
      <Box lineHeight={1}>
        <Typography
          display="block"
          variant={image ? "button" : "h6"}
          fontWeight="bold"
          color={
            color === "transparent" || color === "light" ? "dark" : "white"
          }
          mb={0.5}
        >
          {name}
        </Typography>
        <Typography
          variant={image ? "caption" : "button"}
          fontWeight="regular"
          lineHeight={1}
          color={
            color === "transparent" || color === "light" ? "text" : "white"
          }
          sx={{ display: "flex", alignItems: "center" }}
        >
          <Icon>schedule</Icon>&nbsp;
          {date}
        </Typography>
      </Box>
      <Typography
        variant="body2"
        color={color === "transparent" || color === "light" ? "text" : "white"}
        my={4}
      >
        &quot;{review}&quot;
      </Typography>
      <Typography
        variant="h4"
        color={color === "transparent" || color === "light" ? "text" : "white"}
        sx={{
          display: "flex",
          alignItems: "center",
          ml: 0.375,

          "& .material-icons-round": {
            ml: -0.375,
          },
        }}
      >
        {ratings["0.5"]}
      </Typography>
    </Box>
  );
};

// Typechecking props for the DefaultReviewCard
DefaultReviewCard.propTypes = {
  color: PropTypes.oneOf([
    "transparent",
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "dark",
    "light",
  ]),
  image: PropTypes.string,
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  review: PropTypes.string.isRequired,
  // rating: PropTypes.oneOf([1, 2, 3, 4, 5]).isRequired,
};

export default DefaultReviewCard;
