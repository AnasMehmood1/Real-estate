import React from 'react'
import "./Workme.css"
const Workme = () => {
  return (
    <div>
        <div className="workme" 
        style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.20), rgba(0, 0, 0, 0.47)), url(./Assets/inform.jpg)`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}>
      <img src="./Assets/agent.jpg" alt=""/>
        <p>Work With Me</p>
        <h1>Unlock Your Dream Home: <br/> Work With Us to Find Your Perfect Property</h1>
        <div className="work-btn">Work with us</div>
     </div>
    </div>
  )
}

export default Workme
