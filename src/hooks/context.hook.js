import { createContext, useState } from "react";

// Crear el Contexto
export const ReservationContext = createContext();

// Crear el Proveedor de Contexto
export const ReservationProvider = ({ children }) => {
  const [reservations, setReservations] = useState([]);
  const [allTimes, setAllTimes] = useState(new Map());

  const addReservation = (reservation) => {
    setReservations((prevReservations) => [...prevReservations, reservation]);
  };

  const addTime = (key, value) => {
    setAllTimes((prevMap) => new Map(prevMap.set(key, value)));
  };

  return (
    <ReservationContext.Provider
      value={{ reservations, addReservation, allTimes, addTime }}
    >
      {children}
    </ReservationContext.Provider>
  );
};
