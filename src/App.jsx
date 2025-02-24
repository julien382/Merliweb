import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import Header from "./components/Header/Header";
import MainPage from "./pages/MainPage/MainPage";
import ErrorPage from "./pages/Error/ErrorPage";
import Footer from "./components/Footer/Footer";
import ContactPage from "./pages/ContactPage/ContactPage";
import ServicesPage from "./pages/ServicesPage/ServicesPage";
import ProjetsPage from "./pages/ProjetsPage/ProjetsPage";
import MentionsLegales from "./pages/MentionsLegales/MentionsLegales";
import ConfidentialitePage from "./pages/confidentialitePage/confidentialitePage";
import Cookies from "./pages/Cookies/Cookies";


function App() {
  const location = useLocation();
  const [showButton, setShowButton] = useState(false);

  // Remonter en haut lorsqu'on change de page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Gérer l'affichage du bouton "Retour en haut"
  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > window.innerHeight); // Affiche si on dépasse l'écran
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fonction pour remonter en haut
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div id="app">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/projets" element={<ProjetsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/mentionsLegales" element={<MentionsLegales />} />
          <Route path="/politique-confidentialite" element={<ConfidentialitePage />} />
          <Route path="/politique-cookies" element={<Cookies />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </main>
      <Footer />

      {/* Bouton "Retour en haut" */}
      {showButton && (
        <button className="back-to-top" onClick={scrollToTop}>
          ⬆ 
        </button>
      )}

    </div>
  );
}

export default App;
