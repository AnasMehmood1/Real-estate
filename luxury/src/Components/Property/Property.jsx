import React from 'react';
import './Property.css';
import properties from './PropertyApi';

const Property = () => {
  // Filter properties to include only those with the category "agent"
//   const agentProperties = properties.filter((item) => item.category === 'agent');
const Properties = properties.filter((item) => item.category === "property")


  return (
    <div>
      <div className="card-container">
        {Properties.map((item) => (
          <div className="card-box" key={item.id}>
            <div className="card-item">
              <img src={item.image} alt={item.title} />
              <div className="card-detail">
                <h2>{item.title}</h2>
                <p>{item.name}</p>
                <p>{item.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Property;
