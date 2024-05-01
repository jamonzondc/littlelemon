import "@fontsource/markazi-text";
import "@fontsource/markazi-text/400.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import FooterSection from "./components/Footer";
import Header from "./components/Header";
import BookingPage from "./pages/BookingPage";
import HomePage from "./pages/HomePage";

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
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <nav>
          <Header />
        </nav>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/booking" element={<BookingPage />} />
          </Routes>
        </main>
        <footer className="footer">
          <FooterSection />
        </footer>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
