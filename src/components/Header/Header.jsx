import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.scss";
import logo from "../../assets/logo/Merliweb.svg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const location = useLocation(); // Pour détecter le changement de page

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 50) {
        setIsHeaderVisible(false);
      } else if (window.scrollY < lastScrollY) {
        setIsHeaderVisible(true);
      }

      setLastScrollY(window.scrollY);
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Fermer le menu quand on clique à l'extérieur
  useEffect(() => {
    const closeMenuOnClickOutside = (e) => {
      if (isOpen && !e.target.closest(".header")) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", closeMenuOnClickOutside);
    return () => document.removeEventListener("click", closeMenuOnClickOutside);
  }, [isOpen]);

  // Fermer le menu quand la route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header
      className={`header ${scrolled ? "scrolled" : ""} ${isHeaderVisible ? "" : "hidden"} ${
        isOpen ? "menu-open" : ""
      }`}
    >
      <Link to="/">
        <img src={logo} className="logo" alt="Merliweb Logo" />
      </Link>
      <nav className={`nav ${isOpen ? "open" : ""}`}>
        <ul>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/projets">Projets</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <div className={`burger ${isOpen ? "open" : ""}`} onClick={() => setIsOpen(!isOpen)}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </header>
  );
};

export default Header;
