import React from 'react'
import Navbar from "../Components/Navbar/Navbar"
import Hero from "../Components/Hero/Hero"
import Property from "../Components/Property/Property"
import Agents from "../Components/Agents/Agents"
import Send from "../Components/Send/Sends"
import Footer from '../Components/Footer/Footer'
const Home = () => {
  return (
    <div>
    <Navbar/>
    <Hero title="Elevate Your Living: Find
        Exquisite Properties"/>
    <Property/>
    <Agents title="Meet Your Dream Home Navigator"
      des="Expert Real Estate Guides Ready to Turn Your Property Aspirations into Reality"/>
    <Send/>
    <Footer/>
    </div>
  )
}

export default Home
