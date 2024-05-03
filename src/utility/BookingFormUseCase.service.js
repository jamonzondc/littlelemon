import dayjs from "dayjs";
import { Reservation } from "../models/reservation.model";
import * as Yup from "yup";

export class BookingFormUseCase {
  formApiService;
  appContext;
  formInitialValues = {
    date: dayjs(),
    time: "",
    occasion: "",
    numberOfGuests: "1",
  };
  validationSchema = Yup.object({
    date: Yup.date().required("Required"),
    time: Yup.string().required("Required"),
    occasion: Yup.string().required("Required"),
    numberOfGuests: Yup.string().required("Required"),
  });

  constructor(formApiService, appContext) {
    this.formApiService = formApiService;
    this.appContext = appContext;
  }

  async getAvailableTimes(date) {
    const availableTimes = await this.formApiService.getAvailableTimes(date);
    if (!this.appContext.allTimes.has(date)) {
      this.appContext.addTime(date, availableTimes);
    }

    return availableTimes;
  }

  async addReservation(values) {
    const reservation = new Reservation(
      values.date.format("YYYY-MM-DD"),
      values.time,
      values.occasion,
      values.numberOfGuests
    );
    const isSaved = await this.formApiService.addReservation(reservation);
    if (!isSaved) return;
    this.appContext.addReservation(reservation);
  }
}
