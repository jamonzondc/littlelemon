import { Grid, Typography } from "@mui/material";
import React from "react";
import logoImg from "../images/logo2.png";
import Nav from "./Nav";
const FooterSection = () => {
  return (
    <>
      <Grid container justifyContent="space-evenly" alignItems="center">
        <Grid item xs={12} sm="auto">
          <img src={logoImg} alt="Little Lemon Logo" />
        </Grid>
        <Grid item xs={12} sm="auto">
          <h2>Doormat Navigation</h2>
          <Nav isVertical={true} />
        </Grid>
        <Grid item xs={12} sm="auto">
          <h2>Contacts</h2>
          <h4>
            <b>Adress:</b> 31 street, Bar
          </h4>
          <h4>
            <b>Phone:</b> 999999999
          </h4>
          <h4>
            <b>Email:</b> littlelemon@gmail.com
          </h4>
        </Grid>
        <Grid item xs={12} sm="auto">
          <h2>Social Media</h2>
          <h4>
            <b>Adress:</b> 31 street, Bar
          </h4>
          <h4>
            <b>Phone:</b> 333333333
          </h4>
          <h4>
            <b>Email:</b> marioandadrian@gmail.com
          </h4>
        </Grid>
      </Grid>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item>
          <h4>2024 Little Lemon © All rights reserved.</h4>
        </Grid>
      </Grid>
    </>
  );
};
export default FooterSection;
