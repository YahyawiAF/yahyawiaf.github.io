import { useState } from "react";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import { Box } from "@mui/material";

interface RotatingCardProps {
  children: React.ReactNode;
}

function RotatingCard({ children }: RotatingCardProps): JSX.Element {
  const [rotate, setRotate] = useState<boolean>(false);

  const rotate0 = () => setRotate(false);
  const rotate180 = () => setRotate(true);

  return (
    <Box
      sx={{ perspective: "50rem" }}
      onMouseEnter={rotate180}
      onMouseLeave={rotate0}
    >
      <Card
        sx={{
          boxShadow: "none",
          position: "relative",
          transform: rotate ? "rotateY(180deg)" : "rotateY(0)",
          transformStyle: "preserve-3d",
          transition: "all 0.8s cubic-bezier(0.34, 1.45, 0.7, 1)",
        }}
      >
        {children}
      </Card>
    </Box>
  );
}

RotatingCard.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RotatingCard;
