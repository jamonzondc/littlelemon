import { Button, Grid } from "@mui/material";
import React from "react";
import cardImage2 from "../../../images/bruchetta.svg";
import cardImage1 from "../../../images/greek salad.jpg";
import cardImage3 from "../../../images/lemon dessert.jpg";
import SpecialCard from "./SpecialCard";

const projects = [
  {
    title: "Greek salad",
    price: "$12.99",
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    image: cardImage1,
  },
  {
    title: "Bruchetta",
    price: "$5.99",
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    image: cardImage2,
  },
  {
    title: "Lemon Dessert",
    price: "$5.00",
    description:
      "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    image: cardImage3,
  },
];

const SpecialsSection = () => {
  return (
    <>
      <Grid
        className="specials"
        container
        justifyContent="space-evenly"
        alignItems="center"
      >
        <Grid item xs={12} sm="auto">
          <h2 className="title">This weeks specials!</h2>
        </Grid>
        <Grid item xs={12} sm="auto">
          <Button variant="contained" color="secondary">
            Online Menu
          </Button>
        </Grid>
      </Grid>
      <Grid container spacing={3} justifyContent="center">
        {projects.map((project) => (
          <Grid item xs={12} sm="auto" key={project.title}>
            <article className="specials-section-article">
              <SpecialCard
                title={project.title}
                price={project.price}
                description={project.description}
                image={project.image}
              />
            </article>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default SpecialsSection;
