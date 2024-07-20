import React from 'react';
import './ExplorePage.css';
import video1 from '../images/video1.mp4'; 
import video2 from '../images/video2.mp4'; 
import video3 from '../images/video3.mp4'; 
import video4 from '../images/video4.mp4'; 
import video5 from '../images/video5.mp4'; 

function ExploreFr() {
  return (
    <div className="explore-page">
      <h2>Découvrez Nos Produits et Services</h2>
      <div className="main-video">
        <video width="600" controls>
          <source src={video1} type="video/mp4" />
          Votre navigateur ne supporte pas la balise vidéo.
        </video>
        <p>Regardez cette vidéo pour voir notre dernier robot en action. Découvrez comment il peut simplifier vos tâches et améliorer votre productivité grâce à sa technologie de pointe.</p>
      </div>
      <div className="video-cards">
        <div className="video-card">
          <video width="300" controls>
            <source src={video4} type="video/mp4" />
            Votre navigateur ne supporte pas la balise vidéo.
          </video>
          <h3>Démonstration du Robot Serveur</h3>
          <p>Regardez notre robot serveur en action. Cette démonstration met en avant ses capacités et son efficacité de service.</p>
        </div>

        <div className="video-card">
          <video width="300" controls>
            <source src={video5} type="video/mp4" />
            Votre navigateur ne supporte pas la balise vidéo.
          </video>
          <h3>Témoignage Client</h3>
          <p>Écoutez l'un de nos clients satisfaits parler de son expérience avec les robots OTS dans son entreprise.</p>
        </div>

        <div className="video-card">
          <video width="300" controls>
            <source src={video3} type="video/mp4" />
            Votre navigateur ne supporte pas la balise vidéo.
          </video>
          <h3>Démonstration au Restaurant</h3>
          <p>Regardez une démonstration de la façon dont nos robots fonctionnent dans un restaurant, améliorant le service et l'efficacité.</p>
        </div>
      </div>
    </div>
  );
}

export default ExploreFr;
