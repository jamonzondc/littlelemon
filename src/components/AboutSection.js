import { Grid } from "@mui/material";
import React from "react";
import marioAdrian1 from "../images/Mario-and-Adrian1.jpg";
import marioAdrian2 from "../images/Mario-and-Adrian2.jpg";

const AboutSection = () => {
  return (
    <>
      <Grid
        className="about-section"
        container
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12} sm={12} md="4">
          <h1 className="title">Little Lemon</h1>
          <h3 className="subtitle">Chicago</h3>
          <p className="description">
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
        </Grid>

        <Grid item xs={12} sm={12} md="auto">
          <div>
            <img
              className="marioAndrianImg1"
              src={marioAdrian1}
              alt="Mario an Adrian"
            />
            <img
              className="marioAndrianImg2"
              src={marioAdrian2}
              alt="Mario an Adrian"
            />
          </div>
        </Grid>
      </Grid>
    </>
  );
};
export default AboutSection;
