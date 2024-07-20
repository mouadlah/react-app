import React from 'react';
import './AboutUs.css';
import companyPhoto from '../images/OTS.JPG'; // Assurez-vous d'avoir une image appropriée dans ce chemin

function AboutUsFr() {
  return (
    <div className="about-us">
      <h2>À propos de nous</h2>
      <div className="content">
        <img src={companyPhoto} alt="Entreprise OTS" />
        <div className="description">
          <p><strong>OTS</strong> (Office Trading Services) est une entreprise marocaine spécialisée dans la vente et la location de robots de service. Nos robots sont principalement utilisés dans les secteurs de l'hôtellerie, de l'événementiel et du commerce de détail, notamment pour les campagnes publicitaires. En partenariat avec une entreprise chinoise de premier plan, nous fournissons des solutions robotiques innovantes et fiables, adaptées aux besoins du marché marocain. Ce site vise à présenter les produits et services offerts par OTS, en facilitant la navigation et la recherche d'informations pour nos clients potentiels. Il cherche également à promouvoir les avantages et les caractéristiques de nos robots de service, assurant des interactions fluides et efficaces avec nos utilisateurs. De plus, le site vise à renforcer notre présence en ligne et notre portée sur le marché.</p>
        </div>
      </div>
    </div>
  );
}

export default AboutUsFr;
