import React from "react";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const StarRating = ({ value }) => {
  const stars = [
    <StarBorderIcon />,
    <StarBorderIcon />,
    <StarBorderIcon />,
    <StarBorderIcon />,
    <StarBorderIcon />,
  ];

  return (
    <>
      {stars.map((star, index) => {
        if (index < value) return <StarIcon key={index} />;
        return star;
      })}
    </>
  );
};

export default StarRating;
