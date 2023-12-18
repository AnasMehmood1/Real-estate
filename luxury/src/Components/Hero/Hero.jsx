import React from 'react'
import "./Hero.css"
const Hero = () => {
  return (
    <div>
     <div className="hero-container" style={{
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.20), rgba(0, 0, 0, 0.47)), url(./Assets/hero.jpg)`,
  backgroundPosition: "center",
  backgroundSize: "cover",
}}>
  <div className="hero-content">
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
    <h1>Elevate Your Living: Find <br /> Exquisite Properties</h1>
    <p>Lorem ipsum dolor sit amet.</p>
    <button className='contact'> Contact Us</button>
    <button className='about'> About Us</button>
  </div>
</div>
  {/* -------- Dream---------- */}
  <div className="dream-container"  style={{
  backgroundImage: ` url(./Assets/dream.jpg)`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundAttachment:"fixed"
}}>
    <div className="dream-text">
    <h1> Help You Achieve  <br /> 
        You Real Estate <br /> Dreams</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti voluptate eius atque molestias culpa nulla tempora id hic aspernatur. Obcaecati temporibus eligendi pariatur suscipit enim aliquid explicabo rem necessitatibus quisquam.</p>
        <button className='read'>Read more</button>
    </div>
    <div className="img-container">
    <img src="./Assets/property_1.jpg" alt=""/>

    </div>
  </div>

    </div>
  )
}

export default Hero
