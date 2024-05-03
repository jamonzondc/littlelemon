import { fetchAPI, submitAPI } from "./api";

export class FormApiService {
  async getAvailableTimes(date) {
    try {
      console.log("Fetching available times for date:", date);
      return fetchAPI(date);
    } catch (error) {
      // Maneja cualquier error
      console.error("Error:", error);
    }
  }

  async addReservation(formData) {
    try {
      return submitAPI(formData);
    } catch (error) {
      console.error("Error:", error);
      return false;
    }
  }
}
