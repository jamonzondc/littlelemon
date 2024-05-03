//This codeis becouse the API is not working
//<script src="https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js"></script>

const availableTimesByDate = {
  "2024-08-29": ["10:00", "11:00", "12:00"],
  "2024-05-01": ["10:00", "11:00", "12:00"],
  "2024-05-02": ["14:00", "15:00", "16:00"],
  "2024-05-03": ["10:00", "11:00", "12:00"],
  "2024-05-04": ["14:00", "15:00", "16:00"],
  "2024-05-05": ["10:00", "11:00", "12:00"],
  "2024-05-06": ["14:00", "15:00", "16:00"],
  "2024-05-07": ["10:00", "11:00", "12:00"],
  "2024-05-08": ["14:00", "15:00", "16:00"],
  "2024-05-09": ["10:00", "11:00", "12:00"],
  "2024-05-10": ["14:00", "15:00", "16:00"],
  "2024-05-11": ["10:00", "11:00", "12:00"],
  "2024-05-12": ["14:00", "15:00", "16:00"],
  "2024-05-13": ["10:00", "11:00", "12:00"],
  "2024-05-14": ["14:00", "15:00", "16:00"],
  "2024-05-15": ["10:00", "11:00", "12:00"],
  "2024-05-16": ["14:00", "15:00", "16:00"],
  "2024-05-17": ["10:00", "11:00", "12:00"],
  "2024-05-18": ["14:00", "15:00", "16:00"],
  "2024-05-19": ["10:00", "11:00", "12:00"],
  "2024-05-20": ["14:00", "15:00", "16:00"],
};

export const fetchAPI = (date) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (availableTimesByDate[date]) {
        resolve(availableTimesByDate[date]);
      } else {
        resolve([]); // Simulate no available times
      }
    }, 1000);
  });
};

export const submitAPI = (formData) => {
  availableTimesByDate[formData.date] = availableTimesByDate[
    formData.date
  ].filter((time) => time !== formData.time);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (formData) {
        resolve(true); // Simulate successful submission
      } else {
        reject(new Error("Form submission failed."));
      }
    }, 1000); // Simulate API delay
  });
};
