import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MainContent.css';
import robot1 from '../images/intro_robot.png';
import robot2 from '../images/robo2.png';
import robot3 from '../images/robot3.png';
import robot4 from '../images/Best.png';
import robot5 from '../images/robot5.png';
import business from '../images/business.jpg';
import HeaderFr from './HeaderFr';
import FooterFr from './FooterFr';


function MainContentFr() {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate('/react-app/explore-fr');
  };

  const handleCollaborateClick = () => {
    navigate('/react-app/dashboard-fr');
  };

  const handleJoinClick = () => {
    navigate('/react-app/schedule-fr');
  };

  const handleProductsPageClick = () => {
    navigate('/react-app/products-fr');
  };

  return (
    <div>
      <main>
        <section className="hero">
          <h1>Découvrez les dernières solutions robotiques</h1>
          <div className="explore-button">
            <button onClick={handleProductsPageClick}>Explorer les produits</button>
          </div>
        </section>

        <section className="offerings">
          <h2>Nos offres innovantes</h2>
          <div className="cards">
            <div className="card">
              <img src={robot1} alt="Aperçu de la solution" />
              <h3>Aperçu de la solution</h3>
              <p>Trouvez le service parfait. Explorez notre gamme de solutions robotiques pour divers secteurs.</p>
            </div>
            <div className="card">
              <img src={robot2} alt="Caractéristiques du robot" />
              <h3>Caractéristiques du robot</h3>
              <p>Sélectionnez un service robotique. Découvrez des solutions robotiques de pointe.</p>
            </div>
            <div className="card">
              <img src={robot3} alt="Avantages du service" />
              <h3>Avantages du service</h3>
              <p>Passez votre commande. Détendez-vous pendant que nos robots répondent à vos besoins efficacement.</p>
            </div>
          </div>
        </section>

        <section className="join-us">
          <h2>Rejoignez OTS Solutions</h2>
          <div className="cards">
            <div className="card">
              <img src={robot4} alt="Notre Best Seller" />
              <h3>Notre Best Seller</h3>
              <p>Découvrez l'efficacité et l'innovation de notre robot T5, le plus vendu.</p>
              <button onClick={handleProductsPageClick}>Découvrir</button>
            </div>

            <div className="card">
              <img src={business} alt="Partenariat d'affaires" />
              <h3>Partenariat d'affaires</h3>
              <p>Améliorez votre entreprise avec des solutions robotiques pour des opérations et une expérience client optimisées.</p>
              <button onClick={handleCollaborateClick}>Découvrir les Graphiques</button>
            </div>
            <div className="card">
              <img src={robot5} alt="Collaboration en équipe" />
              <h3>Collaboration en équipe</h3>
              <p>Contribuez à la construction de services robotiques de pointe avec une équipe dynamique.</p>
              <button onClick={handleJoinClick}>Rejoindre l'équipe</button>
            </div>
          </div>
        </section>
        <section className="experience">
          <h2>Découvrez notre technologie</h2>
          <div className="explore">
            <h3>Explorez sans effort!</h3>
            <p>Découvrez des solutions robotiques innovantes chez Office Trading Services. Expérimentez des robots de service de premier ordre pour divers secteurs.</p>
            <button onClick={handleExploreClick}>Explorer maintenant</button>
          </div>
        </section>
      </main>
      
    </div>
  );
}

export default MainContentFr;
