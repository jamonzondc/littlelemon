import { Grid } from "@mui/material";
import React from "react";
import logoImg from "../images/Logo.svg";
import Nav from "./Nav";

const Header = () => {
  return (
    <Grid container justifyContent="space-evenly" alignItems="center">
      <Grid item xs={12} sm="auto">
        <img src={logoImg} alt="Little Leamon Logo" />
      </Grid>
      <Grid item xs={12} sm="auto">
        <Nav />
      </Grid>
    </Grid>
  );
};
export default Header;
