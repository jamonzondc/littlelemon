import TableRestaurantIcon from "@mui/icons-material/TableRestaurant";
import {
  Card,
  CardContent,
  Chip,
  Grid,
  List,
  ListItem,
  ListSubheader,
  Stack,
  Typography,
} from "@mui/material";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import { useContext } from "react";
import { ReservationContext } from "../../../hooks/context.hook";

dayjs.extend(localizedFormat);
const BookingSlot = () => {
  const { reservations, allTimes } = useContext(ReservationContext);
  // Agrupar las reservaciones por día
  const reservationsByDay = reservations.reduce((groups, reservation) => {
    const date = reservation.date.split("T")[0]; // Obtener solo la fecha, sin la hora
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(reservation);
    return groups;
  }, {});

  // Ordenar las reservaciones de cada día por hora
  for (const date in reservationsByDay) {
    reservationsByDay[date].sort((a, b) => a.time.localeCompare(b.time));
  }
  function getT(date) {
    console.log("---------p--------", {
      alltime: allTimes[date],
      reservations: reservations,
    });
    return allTimes.has(date) ? allTimes.get(date) : [];
  }

  return (
    <Card style={{ minWidth: "500px" }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Reservations
        </Typography>
        <Grid container justifyContent="center">
          <Grid item>
            <List
              sx={{
                width: "100%",
                bgcolor: "background.paper",
                position: "relative",
                overflow: "auto",
                maxHeight: 300,
                "& ul": { padding: 0 },
              }}
              subheader={<li />}
            >
              {Object.entries(reservationsByDay).map(
                ([date, reservations], indexDay) => (
                  <li key={indexDay}>
                    <ul>
                      <ListSubheader>
                        {dayjs(date).format("dddd, MMMM D")}
                      </ListSubheader>
                      <ListItem>
                        {getT(date).map((time, indexTime) => {
                          const isReserved = reservations.some(
                            (reservation) => reservation.time === time
                          );
                          return (
                            <Stack key={indexTime} edge="end" spacing={2}>
                              <Chip
                                label={time}
                                icon={<TableRestaurantIcon />}
                                color={isReserved ? "primary" : "secondary"}
                              />
                            </Stack>
                          );
                        })}
                      </ListItem>
                    </ul>
                  </li>
                )
              )}
            </List>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default BookingSlot;
