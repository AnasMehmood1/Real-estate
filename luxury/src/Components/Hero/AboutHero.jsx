import React from 'react'
import "./AboutHero.css"
import Agents from '../Agents/Agents'
import Workme from '../Work/Workme'
const AboutHero = () => {
  return (
    <div>
      <div className="about-hero" style={{
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.479),rgba(0, 0, 0, 0.466)), url(./Assets/about-hero.jpg)`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundPositionY: "60%",
}}>
  <div className="abouthero-text">
  <h1>Let's Find Your Dream <br/> Home Together</h1>

  </div>
      </div>


      <div className="about-agent">
      <div className="dream-container"  style={{
  backgroundImage: ` url(./Assets/dream.jpg)`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundAttachment:"fixed"
}}>
    <div className="dream-text-about">
    <p>NEW YORK REAL ESTATE AGENT</p>
    <h1>Amelie</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, totam. Incidunt sequi quos earum. Officia, ad ipsa cumque qui nostrum sequi nemo totam adipisci earum consequatur incidunt ipsam dolore est impedit, illo optio similique magnam harum! Hic harum non, aliquam, molestiae tempore perspiciatis doloribus nemo dignissimos autem saepe pariatur ratione?</p>
        <div class="info">
                <p>917-567-0989</p>
                <p>example@gmail.com</p>
            </div>
            <div class="book-btn">Book A Call</div>
    </div>
    <div className="img-container-img">
    <img src="./Assets/name.jpg" alt=""/>

    </div>
  </div>
     </div> 


     <div className="agent-text">
        <h1 className="agt">Meet Your Dream Home Navigator</h1>
        <p> Expert Real Estate Guides Ready to Turn Your Property Aspirations into Reality</p>
    </div>
    <div className="agent-img">
       <div className="ag-inner">
       <img src="./Assets/agent.jpg" width="900px" alt=""/>
       </div>
    </div>
           
      <div className="slide">
        <div className="slide-img">
            <img src="./Assets/Los_Angeles_Times_logo.svg.png" alt=""/>
            <img src="./Assets/forbes-logo-black-transparent.png" alt=""/>
            <img src="./Assets/New_Bloomberg_Logo.svg.png" alt=""/>
            <img src="./Assets/Los_Angeles_Times_logo.svg.png" alt=""/>
            <img src="./Assets/forbes-logo-black-transparent.png" alt=""/>
            <img src="./Assets/New_Bloomberg_Logo.svg.png" alt=""/>
            <img src="./Assets/Los_Angeles_Times_logo.svg.png" alt=""/>
            <img src="./Assets/forbes-logo-black-transparent.png" alt=""/>
            <img src="./Assets/New_Bloomberg_Logo.svg.png" alt=""/>
           
        </div>
        <div className="slide-img">
            <img src="./Assets/Los_Angeles_Times_logo.svg.png" alt=""/>
            <img src="./Assets/forbes-logo-black-transparent.png" alt=""/>
            <img src="./Assets/New_Bloomberg_Logo.svg.png" alt=""/>
            <img src="./Assets/Los_Angeles_Times_logo.svg.png" alt=""/>
            <img src="./Assets/forbes-logo-black-transparent.png" alt=""/>
            <img src="./Assets/New_Bloomberg_Logo.svg.png" alt=""/>
            <img src="./Assets/Los_Angeles_Times_logo.svg.png" alt=""/>
            <img src="./Assets/forbes-logo-black-transparent.png" alt=""/>
            <img src="./Assets/New_Bloomberg_Logo.svg.png" alt=""/>
           
        </div>
      

      </div>
  <Agents/>

  <Workme/>

    </div>
  )
}

export default AboutHero
