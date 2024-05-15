// react-router components
import { Link } from "react-router-dom";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import MuiLink from "@mui/material/Link";

// Material Kit 2 React components

import { Box, Typography } from "@mui/material";

interface ActionProps {
  type: "external" | "internal";
  route: string;
}

interface BackgroundBlogCardProps {
  image: string;
  title: string;
  description: string;
  action: ActionProps;
}

function BackgroundBlogCard({
  image,
  title,
  description,
  action,
}: BackgroundBlogCardProps): JSX.Element {
  const cardActionStyles = {
    display: "flex",
    alignItems: "center",
    width: "max-content",

    "& .material-icons, .material-icons-round,": {
      transform: `translateX(2px)`,
      transition: "transform 0.2s cubic-bezier(0.34,1.61,0.7,1.3)",
    },

    "&:hover .material-icons, &:focus .material-icons, &:hover .material-icons-round, &:focus .material-icons-round":
      {
        transform: `translateX(6px)`,
      },
  };

  return (
    <Card
      sx={{
        backgroundImage: ({}) =>
          `linear-gradient(195deg, rgba(66, 66, 74, 0.8), rgba(25, 25, 25, 0.8)),  url(${image})`,
        backgroundSize: "cover",
      }}
    >
      <Box p={3}>
        <Box minHeight="20.625rem" my="auto" py={3}>
          <Typography variant="h2" color="white" mb={1}>
            {title}
          </Typography>
          <Typography variant="body2" color="white" my={3}>
            {description}
          </Typography>
          {action.type === "internal" ? (
            <Typography
              component={Link}
              to={action.route}
              variant="body2"
              fontWeight="regular"
              color="white"
              textTransform="capitalize"
              sx={cardActionStyles}
            ></Typography>
          ) : (
            <Typography
              component={MuiLink}
              href={action.route}
              target="_blank"
              rel="noreferrer"
              variant="body2"
              fontWeight="regular"
              color="white"
              textTransform="capitalize"
              sx={cardActionStyles}
            ></Typography>
          )}
        </Box>
      </Box>
    </Card>
  );
}

// Typechecking props for the BackgroundBlogCard
BackgroundBlogCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  action: PropTypes.shape({
    type: PropTypes.oneOf(["external", "internal"]).isRequired,
    route: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
};

export default BackgroundBlogCard;
