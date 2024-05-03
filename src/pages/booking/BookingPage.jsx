import { Grid } from "@mui/material";
import React from "react";
import BookingForm from "./components/BookingForm";

const BookingPage = () => {
  return (
    <>
      <section className="booking-form-section">
        <Grid container justifyContent="center" alignItems="start" spacing={5}>
          <Grid item sm={12} md={6}>
            <BookingForm />
          </Grid>
        </Grid>
      </section>
    </>
  );
};
export default BookingPage;
