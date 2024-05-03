import React from "react";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const StarRating = ({ value }) => {
  return (
    <>
      {[...Array(5)].map((_, index) => {
        if (index < value) return <StarIcon key={index} />;
        return <StarBorderIcon key={index} />;
      })}
    </>
  );
};
export default StarRating;
