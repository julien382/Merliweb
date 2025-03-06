import "./ConfidentialitePage.scss";

const ConfidentialitePage = () => {
  return (
    <div className="privacy-policy-container">
      <h1>Politique de confidentialité</h1>

      <section>
        <h2>1. Introduction</h2>
        <p>
          Nous, Merliweb, respectons votre vie privée et nous engageons à protéger vos données personnelles. Cette politique de confidentialité vous explique comment nous collectons, utilisons et protégeons vos informations.
        </p>
      </section>

      <section>
        <h2>2. Données collectées</h2>
        <p>
          Nous collectons des données personnelles lorsque vous visitez notre site web, telles que :
        </p>
        <ul>
          <li>Adresse IP</li>
          <li>Informations sur votre navigateur</li>
          <li>Pages visitées et durée de la visite</li>
        </ul>
        <p>
          Ces informations sont collectées automatiquement pour améliorer votre expérience sur notre site.
        </p>
      </section>

      <section>
        <h2>3. Utilisation des données</h2>
        <p>
          Les données collectées sont utilisées pour les fins suivantes :
        </p>
        <ul>
          <li>Améliorer les performances du site</li>
          <li>Analyser le trafic du site avec Google Analytics</li>
        </ul>
      </section>

      <section>
        <h2>4. Partage des données</h2>
        <p>
          Nous ne partageons pas vos données personnelles avec des tiers, sauf dans les cas suivants :
        </p>
        <ul>
          <li>Si cela est nécessaire pour respecter la loi</li>
          <li>Si nous avons votre consentement explicite</li>
        </ul>
      </section>

      <section>
        <h2>5. Sécurité des données</h2>
        <p>
          Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos données personnelles contre toute perte, abus, ou altération.
        </p>
      </section>

      <section>
        <h2>6. Vos droits</h2>
        <p>
          Conformément au Règlement Général sur la Protection des Données (RGPD), vous avez le droit de :
        </p>
        <ul>
          <li>Accéder à vos données personnelles</li>
          <li>Les rectifier ou les supprimer</li>
          <li>Limiter leur traitement</li>
        </ul>
        <p>
          Pour exercer ces droits, veuillez nous contacter à <strong>contact.merliweb@gmail.com</strong>.
        </p>
      </section>

      <section>
        <h2>7. Modifications de la politique</h2>
        <p>
          Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Les modifications seront publiées sur cette page avec la date de mise à jour.
        </p>
      </section>

      <section>
        <h2>{"8. Responsabilité en cas d'attaque frauduleuse"}</h2>
        <p>
          {"Bien que nous mettions en place des mesures de sécurité strictes pour protéger vos données personnelles, nous ne pouvons garantir la sécurité absolue de vos informations. En cas d'attaque frauduleuse, de violation de sécurité, ou d'accès non autorisé, nous ne pouvons être tenus responsables des dommages qui pourraient en découler, dans la mesure permise par la loi."}
        </p>
      </section>

      <section>
        <h2>9. Contact</h2>
        <p>
          {"Si vous avez des questions concernant cette politique de confidentialité, n'hésitez pas à nous contacter par email à "}<strong>contact.merliweb@gmail.com</strong>.
        </p>
      </section>

    </div>
  );
};

export default ConfidentialitePage;