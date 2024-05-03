import { Grid } from "@mui/material";
import React from "react";
import RatingCard from "./RatingCard";

const ratings = [
  {
    name: "John Doe",
    rating: "5",
    review: "The food was amazing.",
  },
  {
    name: "Pepa Sullivan",
    rating: "4",
    review: "The food was amazing.",
  },
  {
    name: "Jane Ives",
    rating: "5",
    review: "he food was amazing.",
  },
  {
    name: "Sam",
    rating: "3",
    review: "he food was amazing.",
  },
];
const TestimonialsSection = () => {
  return (
    <>
      <Grid container justifyContent="space-evenly" alignItems="center">
        <Grid item xs={12} sm="auto">
          <h2 className="title">Testimonials</h2>
        </Grid>
      </Grid>
      <Grid container spacing={3} justifyContent="center">
        {ratings.map((project, index) => (
          <Grid item xs={12} sm="auto" key={index}>
            <article className="specials-section-article">
              <RatingCard
                name={project.name}
                review={project.review}
                rating={project.rating}
                image={project.image}
              />
            </article>
          </Grid>
        ))}
      </Grid>
    </>
  );
};
export default TestimonialsSection;
