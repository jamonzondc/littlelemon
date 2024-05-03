
import { Grid } from "@mui/material";
import React from "react";
import BookingSlot from "./components/BookingSlot";

const ReservationsPage = () => {
  return (
    <>
      <section className="booking-form-section">
        <Grid container justifyContent="center" alignItems="start" spacing={5}>
          <Grid item sm={12} md={6}>
            <BookingSlot />
          </Grid>
        </Grid>
      </section>
    </>
  );
};
export default ReservationsPage;
