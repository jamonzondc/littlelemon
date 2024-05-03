

import { Button, Grid, Hidden } from "@mui/material";
import React from "react";
import restaurantFoodImage from "../../../images/restauranfood.jpg";
import { Link } from "react-router-dom";

const HeroSection = () => (
  <Grid
    className="hero-section"
    container
    justifyContent="space-evenly"
    alignItems="center"
  >
    <Grid item xs={12} sm="auto">
      <h1 className="title primary-color-2">Little Lemon</h1>
      <h3 className="subtitle secondary-color-3">Chicago</h3>
      <p className="description secondary-color-3">
        We are a family owned Mediterranean restaurant, focused on traditional
        recipes served with a modern twist.
      </p>

      <Button
        color="secondary"
        className="primary-color-2"
        variant="contained"
        component={Link}
        to="/booking"
      >
        Reserve a Table
      </Button>
    </Grid>
    <Hidden xsDown>
      <Grid item sm="auto">
        <img className="imgInXS" src={restaurantFoodImage} alt="Little Lemon" />
      </Grid>
    </Hidden>
  </Grid>
);

export default HeroSection;
