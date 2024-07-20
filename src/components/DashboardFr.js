import React from 'react';
import './DashboardPage.css';
import chart1 from '../images/chart1.png';
import chart2 from '../images/chart2.png';
import chart3 from '../images/chart3.png';
import chart4 from '../images/chart4.png';
import chart5 from '../images/chart5.png';
import chart6 from '../images/chart6.png';

function DashboardFr() {
  return (
    <div className="dashboard-page">
      <h2>Tableau de Bord des Solutions Robotiques</h2>
      <div className="dashboard-section performance-metrics">
        <div className="metric-card">
          <h4>Haute Efficacité</h4>
          <p>Productivité Accrue</p>
        </div>
        <div className="metric-card">
          <h4>Utilisation Optimale</h4>
          <p>Événements de Restauration, Publicité pour Divers Secteurs</p>
        </div>
      </div>
      <div className="dashboard-row">
        <div className="dashboard-section chart">
          <h3>Tendances de Distribution des Robots</h3>
          <img src={chart1} alt="Tendances de Distribution des Robots" />
        </div>
        <div className="dashboard-section chart">
          <h3>Analyse de l'Efficacité des Robots</h3>
          <img src={chart2} alt="Analyse de l'Efficacité des Robots" />
        </div>
      </div>
      <div className="dashboard-row">
        <div className="dashboard-section chart">
          <h3>Solutions Robotiques</h3>
          <img src={chart3} alt="Tableau des Solutions Robotiques" />
        </div>
        <div className="dashboard-section chart">
          <h3>Bilan Robotique</h3>
          <img src={chart4} alt="Bilan Robotique" />
        </div>
      </div>
      <div className="dashboard-row">
        <div className="dashboard-section chart">
          <h3>Paramètres 1</h3>
          <img src={chart5} alt="Paramètres 1" />
        </div>
        <div className="dashboard-section chart">
          <h3>Paramètres 2</h3>
          <img src={chart6} alt="Paramètres 2" />
        </div>
      </div>
    </div>
  );
}

export default DashboardFr;
