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
    name: 'Hotel Delivery Robot W3',
    category: 'hotels',
    description: 'Secure and timely delivery of packages within hotel premises.',
    price: 1500,
    image: W3,
    specifications: {
      dimensions: '45.9 x 54.9 x 108.1 cm (18.07" x 21.61" x 42.56")',
      weight: '48kg (106lbs)',
      maxMovingSpeed: '0.8m/s (2.63ft/s)',
      batteryLife: 'Up to 12h',
      chargingTime: '6.5h',
      totalLoadCapacity: '20kg (44lbs)',
      slopeAngle: '7°',
      minPassageWidth: '70cm (27.56")'
    }
  },
  {
    id: 2,
    name: 'Cleaning Robot M2',
    category: 'cleaning',
    description: 'Efficient and silent cleaning robot with advanced navigation.',
    price: 2500,
    image: M2,
    specifications: {
      dimensions: '49.0 x 52.0 x 75.0cm (19.29" x 20.47" x 29.53") without dust mop',
      weight: '35kg (77lbs), with battery',
      slopeAngle: '7°',
      maxMovingSpeed: '0.8m/s (2.63ft/s)',
      batteryLife: 'Sweeping & Vacuuming: Up to 6h',
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
    name: 'Delivery Robot T2',
    category: 'hotels',
    description: 'Reliable delivery robot with secure package compartment.',
    price: 1800,
    image: T2,
    specifications: {
      dimensions: '45.9 x 54.9 x 108.1 cm (18.07" x 21.61" x 42.56")',
      weight: '48kg (106lbs)',
      maxMovingSpeed: '0.8m/s (2.63ft/s)',
      batteryLife: 'Up to 12h',
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
    description: 'Reliable robot that ensures quick and precise delivery of meals.',
    price: 2200,
    image: T5,
    specifications: {
      dimensions: '50.0 x 52.7 x 126.6cm (19.69" x 20.75" x 49.84")',
      weight: '63kg (139lbs)',
      movingSpeed: '0.1-1.0 m/s (0.33-3.28 ft/s)',
      batteryLife: 'Up to 18h',
      chargingTime: '4h',
      maxMovingSpeed: '1.0m/s (3.28ft/s)',
      totalLoadCapacity: '40kg (88lbs)',
      slopeAngle: '5°',
      minPassageWidth: '70cm (27.56")'
    }
  },
  {
    id: 5,
    name: 'Delivery Robot T6',
    category: 'restaurants',
    description: 'Enhance dining experiences with prompt and accurate order delivery.',
    price: 2000,
    image: T6,
    specifications: {
      dimensions: '49.6 x 62.3 x 135.1cm (19.53" x 24.53" x 53.19")',
      weight: '71kg (156lbs)',
      movingSpeed: '0.1-1.0m/s(0.33-3.28ft/s)',
      batteryLife: 'Up to 12h',
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
    description: 'Versatile service robot with user-friendly touch screen interface.',
    price: 3000,
    image: T8,
    specifications: {
      dimensions: '38.4 x 46.8 x 111.1cm (15.12"x18.43"x43.74")',
      weight: '34kg (74.96lbs)',
      maxMovingSpeed: '1.0m/s (3.28ft/s)',
      batteryLife: 'Up to 15h',
      chargingTime: '4h',
      totalLoadCapacity: '20 kg (88 lbs)',
      slopeAngle: '5°',
      minPassageWidth: '55 cm (21.65")'
    }
  }
];

function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [maxPrice, setMaxPrice] = useState('');
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate('/react-app/schedule');
  };

  const handleFaqClick = () => {
    navigate('/react-app/faq');
  };

  const filteredProducts = products.filter(product => {
    return (selectedCategory === 'all' || product.category === selectedCategory) &&
           (maxPrice === '' || product.price > 0 && product.price <= maxPrice);
  });

  return (
    <div className="products-page">
      <aside className="filter-sort">
        <h3>Filter & Sort</h3>
        <div className="filter-category">
          <label>Category</label>
          <select value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)}>
            <option value="all">All</option>
            <option value="hotels">Hotels</option>
            <option value="restaurants">Restaurants</option>
            <option value="cleaning">Cleaning</option>
          </select>
        </div>
        <div className="filter-price">
          <label>Price Range</label>
          <input
            type="number"
            value={maxPrice}
            onChange={e => setMaxPrice(e.target.value)}
            placeholder="Enter max price"
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
            <div className="tooltip">Click to book a trial</div>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <ul className="specifications">
              <li><strong>Dimensions (WxDxH):</strong> {product.specifications.dimensions}</li>
              <li><strong>Weight:</strong> {product.specifications.weight}</li>
              <li><strong>Max. Moving Speed:</strong> {product.specifications.maxMovingSpeed}</li>
              <li><strong>Battery Life:</strong> {product.specifications.batteryLife}</li>
              <li><strong>Charging Time:</strong> {product.specifications.chargingTime}</li>
              <li><strong>Total Load Capacity:</strong> {product.specifications.totalLoadCapacity}</li>
              <li><strong>Slope Angle:</strong> {product.specifications.slopeAngle}</li>
              <li><strong>Minimum Passage Width:</strong> {product.specifications.minPassageWidth}</li>
              {product.specifications.cleaningEfficiency && (
                <>
                  <li><strong>Cleaning Efficiency:</strong> {product.specifications.cleaningEfficiency}</li>
                  <li><strong>Maximum Suction:</strong> {product.specifications.maxSuction}</li>
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

export default ProductsPage;
