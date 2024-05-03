export class Reservation {
  date;
  time;
  occasion;
  numberOfGuests;

  constructor(date, time, occasion, numberOfGuests) {
    this.date = date;
    this.time = time;
    this.occasion = occasion;
    this.numberOfGuests = numberOfGuests;
  }
}
