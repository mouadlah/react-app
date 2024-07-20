import React from 'react';
import './BlogPage.css';
import P1 from '../images/P1.jpeg';
import P2 from '../images/P2.jpeg';
import P3 from '../images/P3.jpeg';
import P4 from '../images/P4.jpeg';
import P5 from '../images/P5.jpeg';
import P6 from '../images/P6.png';

function BlogFr() {
  const blogPosts = [
    {
      title: "L'avenir des robots de service dans l'hôtellerie",
      description: "Découvrez comment les robots de service révolutionnent l'industrie hôtelière. De l'automatisation du service en chambre à l'amélioration de l'expérience des clients, apprenez-en plus sur les dernières tendances et innovations...",
      image: P1
    },
    {
      title: "Les robots de service dans le commerce de détail : Améliorer l'expérience client",
      description: "Explorez l'impact des robots de service dans le secteur du commerce de détail. Découvrez comment les robots sont utilisés pour assister les clients, gérer les stocks et créer une expérience de shopping fluide...",
      image: P2
    },
    {
      title: "Gestion d'événements : Comment les robots font la différence",
      description: "Plongez dans le monde de la gestion d'événements avec des robots de service. Comprenez comment les robots peuvent rationaliser les opérations, engager les participants et offrir des expériences uniques lors des événements...",
      image: P3
    },
    {
      title: "Publicité avec des robots de service : Une nouvelle frontière",
      description: "Découvrez les façons innovantes dont les robots de service sont utilisés dans la publicité. Des affichages interactifs au marketing personnalisé, découvrez comment les robots transforment l'industrie de la publicité...",
      image: P4
    },
    {
      title: "Les aspects techniques des robots de service",
      description: "Comprenez les composants techniques et les avancées des robots de service. Explorez les dernières avancées en intelligence artificielle, apprentissage automatique et technologie de robotique qui propulsent ces machines intelligentes...",
      image: P5
    },
    {
      title: "Histoires de réussite des clients avec les robots OTS",
      description: "Lisez les histoires de réussite de nos clients qui ont intégré les robots de service OTS dans leurs opérations. Découvrez comment nos robots ont amélioré l'efficacité et la satisfaction des clients...",
      image: P6
    },
  ];

  return (
    <div className="blog-page">
      <h2>Notre Blog</h2>
      <div className="blog-posts">
        {blogPosts.map((post, index) => (
          <div key={index} className="blog-post">
            <img src={post.image} alt={post.title} />
            <h3>{post.title}</h3>
            <p>{post.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogFr;
