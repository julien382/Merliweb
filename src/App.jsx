import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Header from "./components/Header/Header";
import MainPage from "./pages/MainPage/MainPage";
import ErrorPage from "./pages/Error/ErrorPage";
import Footer from "./components/Footer/Footer";
import ContactPage from "./pages/ContactPage/ContactPage";
import ServicesPage from "./pages/ServicesPage/ServicesPage";

function App() {
  const location = useLocation(); // Récupère les infos sur la route actuelle

  useEffect(() => {
    window.scrollTo(0, 0); // Définit le défilement en haut de la page
  }, [location.pathname]); // S'exécute chaque fois que l'URL change

  return (
    <div id="app">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </main>
      <Footer />

    </div>
  );
}

export default App;