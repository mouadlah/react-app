import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductsPage.css';
import W3 from '../images/W3.png';
import M2 from '../images/M2.png';
import T2 from '../images/T2.png';
import T5 from '../images/T5.png';
import T6 from '../images/T6.png';
import T8 from '../images/T8.png';

const products = [
  {
    id: 1,
    name: 'Robot de Livraison pour Hôtels W3',
    category: 'hotels',
    description: 'Livraison sécurisée et ponctuelle des colis au sein des locaux de l\'hôtel.',
    price: 1500,
    image: W3,
    specifications: {
      dimensions: '45.9 x 54.9 x 108.1 cm (18.07" x 21.61" x 42.56")',
      weight: '48kg (106lbs)',
      maxMovingSpeed: '0.8m/s (2.63ft/s)',
      batteryLife: 'Jusqu\'à 12h',
      chargingTime: '6.5h',
      totalLoadCapacity: '20kg (44lbs)',
      slopeAngle: '7°',
      minPassageWidth: '70cm (27.56")'
    }
  },
  {
    id: 2,
    name: 'Robot de Nettoyage M2',
    category: 'cleaning',
    description: 'Robot de nettoyage efficace et silencieux avec navigation avancée.',
    price: 2500,
    image: M2,
    specifications: {
      dimensions: '49.0 x 52.0 x 75.0cm (19.29" x 20.47" x 29.53") sans balai à poussière',
      weight: '35kg (77lbs), avec batterie',
      slopeAngle: '7°',
      maxMovingSpeed: '0.8m/s (2.63ft/s)',
      batteryLife: 'Balayage et Aspiration : Jusqu\'à 6h',
      chargingTime: '5-6h',
      totalLoadCapacity: 'N/A',
      minPassageWidth: '75cm (29.53")',
      cleaningEfficiency: '600m²/h (6458.35ft²/h)',
      maxCleaningWidth: '61.0cm (24.02")',
      maxSuction: '15000Pa'
    }
  },
  {
    id: 3,
    name: 'Robot de Livraison T2',
    category: 'hotels',
    description: 'Robot de livraison fiable avec compartiment de colis sécurisé.',
    price: 1800,
    image: T2,
    specifications: {
      dimensions: '45.9 x 54.9 x 108.1 cm (18.07" x 21.61" x 42.56")',
      weight: '48kg (106lbs)',
      maxMovingSpeed: '0.8m/s (2.63ft/s)',
      batteryLife: 'Jusqu\'à 12h',
      chargingTime: '6.5h',
      totalLoadCapacity: '20kg (44lbs)',
      slopeAngle: '7°',
      minPassageWidth: '70cm (27.56")'
    }
  },
  {
    id: 4,
    name: 'Dinerbot T5',
    category: 'restaurants',
    description: 'Robot fiable assurant une livraison rapide et précise des repas.',
    price: 2200,
    image: T5,
    specifications: {
      dimensions: '50.0 x 52.7 x 126.6cm (19.69" x 20.75" x 49.84")',
      weight: '63kg (139lbs)',
      movingSpeed: '0.1-1.0 m/s (0.33-3.28 ft/s)',
      batteryLife: 'Jusqu\'à 18h',
      chargingTime: '4h',
      maxMovingSpeed: '1.0m/s (3.28ft/s)',
      totalLoadCapacity: '40kg (88lbs)',
      slopeAngle: '5°',
      minPassageWidth: '70cm (27.56")'
    }
  },
  {
    id: 5,
    name: 'Robot de Livraison T6',
    category: 'restaurants',
    description: 'Améliorez les expériences culinaires avec une livraison rapide et précise des commandes.',
    price: 2000,
    image: T6,
    specifications: {
      dimensions: '49.6 x 62.3 x 135.1cm (19.53" x 24.53" x 53.19")',
      weight: '71kg (156lbs)',
      movingSpeed: '0.1-1.0m/s(0.33-3.28ft/s)',
      batteryLife: 'Jusqu\'à 12h',
      slopeAngle: '5°',
      chargingTime: '3h',
      maxMovingSpeed: '1.0m/s (3.28ft/s)',
      totalLoadCapacity: '40kg (88lbs)',
      layerSize: '42.2 x 57.5cm (16.61" x 22.64")',
      minPassageWidth: '75cm (29.53")'
    }
  },
  {
    id: 6,
    name: 'Dinerbot T8',
    category: 'restaurants',
    description: 'Robot de service polyvalent avec interface écran tactile conviviale.',
    price: 3000,
    image: T8,
    specifications: {
      dimensions: '38.4 x 46.8 x 111.1cm (15.12"x18.43"x43.74")',
      weight: '34kg (74.96lbs)',
      maxMovingSpeed: '1.0m/s (3.28ft/s)',
      batteryLife: 'Jusqu\'à 15h',
      chargingTime: '4h',
      totalLoadCapacity: '20 kg (88 lbs)',
      slopeAngle: '5°',
      minPassageWidth: '55 cm (21.65")'
    }
  }
];

function ProductsFr() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [maxPrice, setMaxPrice] = useState('');
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate('/schedule-fr');
  };

  const handleFaqClick = () => {
    navigate('/faq-fr');
  };

  const filteredProducts = products.filter(product => {
    return (selectedCategory === 'all' || product.category === selectedCategory) &&
           (maxPrice === '' || product.price > 0 && product.price <= maxPrice);
  });

  return (
    <div className="products-page">
      <aside className="filter-sort">
        <h3>Filtrer & Trier</h3>
        <div className="filter-category">
          <label>Catégorie</label>
          <select value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)}>
            <option value="all">Toutes</option>
            <option value="hotels">Hôtels</option>
            <option value="restaurants">Restaurants</option>
            <option value="cleaning">Nettoyage</option>
          </select>
        </div>
        <div className="filter-price">
          <label>Plage de Prix</label>
          <input
            type="number"
            value={maxPrice}
            onChange={e => setMaxPrice(e.target.value)}
            placeholder="Entrez le prix max"
            min="0"
          />
        </div>
        <div className="faq-link">
          <button onClick={handleFaqClick}>FAQs</button>
        </div>
      </aside>
      <main className="product-list">
        {filteredProducts.map(product => (
          <div key={product.id} className="product-card" onClick={handleCardClick}>
            <div className="tooltip">Cliquez pour réserver un essai</div>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <ul className="specifications">
              <li><strong>Dimensions (LxPxH) :</strong> {product.specifications.dimensions}</li>
              <li><strong>Poids :</strong> {product.specifications.weight}</li>
              <li><strong>Vitesse Max. :</strong> {product.specifications.maxMovingSpeed}</li>
              <li><strong>Autonomie :</strong> {product.specifications.batteryLife}</li>
              <li><strong>Temps de Charge :</strong> {product.specifications.chargingTime}</li>
              <li><strong>Capacité de Charge Totale :</strong> {product.specifications.totalLoadCapacity}</li>
              <li><strong>Angle de Pente :</strong> {product.specifications.slopeAngle}</li>
              <li><strong>Largeur de Passage Minimum :</strong> {product.specifications.minPassageWidth}</li>
              {product.specifications.cleaningEfficiency && (
                <>
                  <li><strong>Efficacité de Nettoyage :</strong> {product.specifications.cleaningEfficiency}</li>
                  <li><strong>Aspiration Maximale :</strong> {product.specifications.maxSuction}</li>
                </>
              )}
            </ul>
            <p className="price">${product.price}</p>
          </div>
        ))}
      </main>
    </div>
  );
}

export default ProductsFr;
