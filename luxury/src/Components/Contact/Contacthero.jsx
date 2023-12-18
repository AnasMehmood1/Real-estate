import React from 'react'
import "./Contacthero.css"
const Contacthero = () => {
  return (
    <div>
      <div className="contact-hero" style={{
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.479),rgba(0, 0, 0, 0.466)), url(./Assets/contact-her.jpg)`,
  backgroundPosition: "center",
  backgroundSize: "cover",
}}>
  <div className="contacthero-text">
  <h1>Connect with Us: Let's Discuss Your <br /> Dream Property Journey Together!</h1>

  </div>
      </div>
    </div>
  )
}

export default Contacthero
