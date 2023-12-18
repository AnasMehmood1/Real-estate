import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import PropertyHero from '../Components/Property/PropertyHero'
import Property from '../Components/Property/Property'
import Slide from '../Components/Property/Slide'

const Proper = () => {
  return (
    <div>
      <Navbar/>
     
       <PropertyHero/>
       <Property/>
       <Slide/>
      <Footer/>
    </div>
  )
}

export default Proper
