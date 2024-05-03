import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useFormik } from "formik";
import React, { useContext, useEffect, useState } from "react";
import { ReservationContext } from "../../../hooks/context.hook";
import { FormApiService } from "../../../utility/FormApi.service";
import dayjs from "dayjs";
import { BookingFormUseCase } from "../../../utility/BookingFormUseCase.service";

const BookingForm = () => {
  const [availableTimes, setAvailableTimes] = useState([]);
  const appContext = useContext(ReservationContext);
  const bookingFormUseCase = new BookingFormUseCase(
    new FormApiService(),
    appContext
  );
  let formik = useFormik({
    initialValues: bookingFormUseCase.formInitialValues,
    validationSchema: bookingFormUseCase.validationSchema,
    onSubmit: async (values) => {
      await bookingFormUseCase.addReservation(values);
      formik.resetForm();
    },
  });
  const fetchData = async (date) => {
    const available = await bookingFormUseCase.getAvailableTimes(date);
    setAvailableTimes(available);
  };

  useEffect(() => {
    fetchData(dayjs().format("YYYY-MM-DD"));
  }, []);

  useEffect(() => {
    fetchData(formik.values.date.format("YYYY-MM-DD"));
  }, [formik.values.date]);

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container justifyContent="center">
        <Grid item>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Card className="card-booking" sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Reserve a table
                </Typography>
                <Grid
                  container
                  direction="column"
                  spacing={3}
                  justifyContent="center"
                >
                  <Grid item xs={12}>
                    <DatePicker
                      color="primary"
                      name="date"
                      value={formik.values.date}
                      onChange={(value) => formik.setFieldValue("date", value)}
                      onBlur={formik.handleBlur}
                      error={formik.touched.date && Boolean(formik.errors.date)}
                      helperText={formik.touched.date && formik.errors.date}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="outlined-select-occasion"
                      select
                      fullWidth
                      label="Select the hour"
                      helperText="Please select the hour"
                      name="time"
                      value={formik.values.time}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={formik.touched.time && Boolean(formik.errors.time)}
                    >
                      {availableTimes.map((time, index) => (
                        <MenuItem key={index} value={time}>
                          {time}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="outlined-select-occasion"
                      select
                      fullWidth
                      label="Select your occasion"
                      helperText="Please select your occasion"
                      name="occasion"
                      value={formik.values.occasion}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.occasion &&
                        Boolean(formik.errors.occasion)
                      }
                    >
                      <MenuItem value="Birthday">Birthday</MenuItem>
                      <MenuItem value="Anniversary">Anniversary</MenuItem>
                    </TextField>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Input with counter"
                      name="numberOfGuests"
                      value={formik.values.numberOfGuests}
                      onChange={formik.handleChange}
                      type="number"
                      InputProps={{ inputProps: { min: 1, max: 12 } }}
                      error={
                        formik.touched.numberOfGuests &&
                        Boolean(formik.errors.numberOfGuests)
                      }
                      helperText={
                        formik.touched.numberOfGuests &&
                        formik.errors.numberOfGuests
                      }
                    />
                  </Grid>
                </Grid>
              </CardContent>
              <CardActions>
                <Button color="secondary" variant="contained" type="submit">
                  Reseve
                </Button>
              </CardActions>
            </Card>
          </LocalizationProvider>
        </Grid>
      </Grid>
    </form>
  );
};
export default BookingForm;
