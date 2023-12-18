import React from 'react'
import "./PropertyHero.css"
const PropertyHero = () => {
  return (
    <div>
       <div className="property-hero" style={{
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.479),rgba(0, 0, 0, 0.466)), url(./Assets/hero_2.jpg)`,
  backgroundPosition: "center",
  backgroundSize: "cover",
}}>
  <div className="propertyhero-text">
  <h1>Explore a Range of Exceptional Properties <br /> Tailored Just for You!</h1>

  </div>
      </div>

      <div className="property">
        <h1>Our Exclusive Listings</h1>
        <p>Browse our current listings online or contact us
to schedule a private showing.</p>
      </div>

   

    </div>
  )
}

export default PropertyHero
