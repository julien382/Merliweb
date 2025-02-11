import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import logo from "../../assets/logo/Merliweb.svg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0); // Ajouter un état pour suivre la dernière position de scroll
  const [isHeaderVisible, setIsHeaderVisible] = useState(true); // État pour contrôler la visibilité du header

  useEffect(() => {
    const handleScroll = () => {
      // Si on fait défiler vers le bas
      if (window.scrollY > lastScrollY && window.scrollY > 50) {
        // L'utilisateur fait défiler vers le bas
        setIsHeaderVisible(false);
      } else if (window.scrollY < lastScrollY) {
        // L'utilisateur fait défiler vers le haut
        setIsHeaderVisible(true);
      }

      // Met à jour la position du dernier scroll
      setLastScrollY(window.scrollY);

      // Gérer le changement de fond du header lors du défilement
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]); // Dépendance à lastScrollY pour recalculer le comportement de scroll

  return (
    <header
      className={`header ${scrolled ? "scrolled" : ""} ${isHeaderVisible ? "" : "hidden"}`}
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
      <div className="burger" onClick={() => setIsOpen(!isOpen)}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </header>
  );
};

export default Header;
