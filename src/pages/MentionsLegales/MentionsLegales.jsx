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
        <p><strong>Activités :</strong> Création de sites web, photographie, vidéo et gestion des réseaux sociaux</p>
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
          L’éditeur ne saurait être tenu responsable des erreurs ou omissions des informations diffusées sur ce site. Ce site peut contenir des liens vers des sites tiers. Merliweb décline toute responsabilité concernant le contenu et les pratiques de ces sites externes.
        </p>
      </section>

      <section>
        <h2>7. Droit applicable et tribunal compétent</h2>
        <p>
          {"Les présentes mentions légales sont soumises au droit français. En cas de litige, une procédure de médiation sera proposée avant tout recours judiciaire. Si aucun accord n'est trouvé, le tribunal compétent sera celui d'"}<strong>Arras</strong>.
        </p>
      </section>

      <section>
        <h2>8. Responsabilité et protections de l'agence</h2>
        <p>
          Une fois le site web livré et mis en ligne, l'agence Merliweb n'est en aucun cas responsable des éventuels litiges, violations de droits d'auteur, ou actions en justice qui pourraient découler de l'utilisation du site. Le client est seul responsable du contenu publié sur le site, ainsi que de sa conformité aux lois et réglementations applicables.
        </p>
        <p>
          Le client est seul responsable de la légalité et de la conformité des contenus (textes, images, vidéos, etc.) qu'il publie sur le site. L'agence Merliweb ne peut être tenue responsable des violations des droits d'auteur ou de toute autre violation légale liée au contenu fourni par le client.
        </p>
        <p>
          Merliweb ne saurait être tenu responsable des conséquences d'une cyberattaque, d'un piratage ou de toute autre faille de sécurité indépendante de sa volonté.
        </p>
        <p>
          Merliweb fournit des services de maintenance sur demande, mais ne peut être tenue responsable des problèmes techniques ou juridiques survenant après la livraison du site, à moins que ces problèmes ne soient directement liés à une erreur de conception ou de développement par l'agence.
        </p>
      </section>

      <section>
        <h2>9. Production de contenu vidéo et photo</h2>
        <p>
          Lorsque Merliweb réalise des vidéos et des photos pour ses clients, ceux-ci restent responsables de l'obtention de tous les droits nécessaires concernant les contenus fournis pour la création de ces vidéos et photos (ex : musique, images, logos, etc.).
        </p>
        <p>
          Merliweb conserve un droit d'utilisation des vidéos et des photos produites à des fins promotionnelles ou dans un portfolio, sauf accord contraire avec le client.
        </p>
        <p>
          En cas de tournage ou de prise de photos dans les locaux du client, Merliweb n'est responsable que de la production proprement dite et ne pourra être tenue responsable des incidents ou accidents liés à la sécurité dans ces locaux.
        </p>
        <p>
          Merliweb décline toute responsabilité pour des violations de droits d'auteur ou des litiges pouvant surgir à la suite de l'utilisation de contenus soumis par le client dans les vidéos et photos.
        </p>
      </section>

      <section>
        <h2>10. Gestion des réseaux sociaux</h2>
        <p>
          Merliweb peut proposer des services de gestion des réseaux sociaux pour ses clients, y compris la création et la publication de contenus. Cependant, la responsabilité du client concernant le contenu publié sur ses réseaux sociaux, ainsi que la conformité à la législation, demeure leur propre responsabilité.
        </p>
        <p>
          Merliweb décline toute responsabilité en cas de contenu illégal, diffamatoire, ou portant atteinte aux droits d'autrui publié sur les réseaux sociaux du client. Le client garantit que les contenus fournis à Merliweb pour publication ne violent aucun droit d'auteur, marque déposée ou autre droit de propriété intellectuelle.
        </p>
        <p>
          En cas de litige concernant des publications, le client est seul responsable et doit indemniser Merliweb de toute réclamation ou action en justice liée à ces contenus.
        </p>
      </section>
    </div>
  );
};

export default MentionsLegales;
