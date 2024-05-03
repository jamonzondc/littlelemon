import "@fontsource/markazi-text";
import "@fontsource/markazi-text/400.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import FooterSection from "./components/Footer";
import Header from "./components/Header";
import { ReservationProvider } from "./hooks/context.hook";
import BookingPage from "./pages/booking/BookingPage";
import HomePage from "./pages/home/HomePage";
import ReservationsPage from "./pages/reservations/ReservationsPage";

const theme = createTheme({
  palette: {
    primary: {
      main: "#495e57",
    },
    secondary: {
      main: "#f4ce14",
    },
  },
});

function App() {
  return (
    <ReservationProvider>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <nav>
            <Header />
          </nav>
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/booking" element={<BookingPage />} />
              <Route path="/reservations" element={<ReservationsPage />} />
            </Routes>
          </main>
          <footer className="footer">
            <FooterSection />
          </footer>
        </ThemeProvider>
      </BrowserRouter>
    </ReservationProvider>
  );
}

export default App;
