import "./App.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import "@fontsource/markazi-text";
import "@fontsource/markazi-text/400.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SpecialsSection from "./components/SpecialsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import AboutSection from "./components/AboutSection";
import FooterSection from "./components/Footer";

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
    <ThemeProvider theme={theme}>
      <nav>
        <Header />
      </nav>
      <main>
        <section className="primary-bcolor-1" style={{ position: "relative" }}>
          <HeroSection />
        </section>
        <section className="special-section">
          <SpecialsSection />
        </section>
        <section className="testimonials-section">
          <TestimonialsSection />
        </section>
        <section className="about-section">
          <AboutSection />
        </section>
        <footer className="footer">
          <FooterSection />
        </footer>
      </main>
    </ThemeProvider>
  );
}

export default App;
