import { Link } from "react-router-dom";
import "./MentionsLegales.scss";

const MentionsLegales = () => {
  return (
    <div className="legal-container">
      <h1>Mentions légales</h1>

      <section>
        <h2>1. Éditeur du site</h2>
        <p><strong>Nom / Prénom :</strong> Hermain Julien</p>
        <p><strong>Entreprise :</strong> Micro-entreprise Merliweb</p>
        <p><strong>Activités :</strong> Création de sites web et de contenu vidéo</p>
        <p><strong>Siège social :</strong> 5 Rue des Ayettes 62124 Bus</p>
        <p><strong>SIRET :</strong> 94162675600014</p>
        <p><strong>E-mail :</strong> contact.merliweb@gmail.com</p>
        <p><strong>Directeur de publication :</strong> Hermain Julien</p>
      </section>

      <section>
        <h2>2. Hébergement du site</h2>
        <p><strong>Hébergeur :</strong> Hostinger</p>
        <p><strong>Adresse :</strong> Hostinger International Ltd., 61 Lordou Vironos Street, 6023 Larnaca, Chypre</p>
        <p>
          <strong>Site web :</strong> 
          <a href="https://www.hostinger.fr" target="_blank" rel="noopener noreferrer">
            www.hostinger.fr
          </a>
        </p>
      </section>

      <section>
        <h2>3. Propriété intellectuelle</h2>
        <p>
          Le contenu de ce site (textes, images, logos, vidéos, etc.) est la propriété exclusive de Hermain Julien / Merliweb, sauf mention contraire. Toute reproduction est interdite sans autorisation.
        </p>
      </section>

      <section>
        <h2>4. Protection des données personnelles</h2>
        <p>
          Conformément au RGPD, vous pouvez exercer vos droits d’accès, de rectification ou de suppression en nous contactant à : <strong>contact.merliweb@gmail.com</strong>.
        </p>
        <p>
          Plus d’informations dans notre 
          <Link to="/politique-confidentialite"> Politique de confidentialité</Link>.
        </p>
      </section>

      <section>
        <h2>5. Cookies</h2>
        <p>
          Ce site utilise des cookies pour améliorer l’expérience utilisateur. Vous pouvez gérer vos préférences via notre 
          <Link to="/politique-cookies"> Politique de Cookies</Link>.
        </p>
      </section>

      <section>
        <h2>6. Responsabilité</h2>
        <p>
          L’éditeur ne saurait être tenu responsable des erreurs ou omissions des informations diffusées sur ce site.
        </p>
      </section>

      <section>
        <h2>7. Droit applicable et tribunal compétent</h2>
        <p>
          {"Les présentes mentions légales sont régies par le droit français. En cas de litige, le tribunal compétent est celui d'"}<strong>Arras</strong>.
        </p>
      </section>
    </div>
  );
};

export default MentionsLegales;
