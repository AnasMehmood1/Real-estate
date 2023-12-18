import React, { useState } from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
const Navbar = () => {
 const [click ,setClick] = useState(false)
const [color , setColor] = useState(false)
    const handleclick =() =>{
        setClick(!click)
    }    
    const changecolor = () =>{
      if(window.scrollY >= 1){
        setColor(true)
    }
    else{
        setColor(false)
    }
    }
      
    window.addEventListener("scroll" , changecolor)
 
  return (
    <div className={color ? "header header-bg" : "header"}>
     <div className="nav">
        <div className={color?("logo-bg"):("logo")}><h2 >Luxury</h2></div>
        <ul className={click ? ("nav-menu active") : ("nav-menu")}>
            
            <Link to="/"><li className= {color?("link-item-bg"):("link-item")}>Home</li></Link>
            <Link to="/about"><li className= {color?("link-item-bg"):("link-item")}>About</li></Link>
            <Link to="/property"><li className= {color?("link-item-bg"):("link-item")}>property</li></Link>
            <Link to="/contact"><li className= {color?("link-item-bg"):("link-item")}>Contact Us</li></Link>
     
        </ul>
        <div className="hamburger" onClick={handleclick} >
        {click ? (<box-icon name='x' className="icon" ></box-icon>) : (<box-icon name='menu' className="icon" ></box-icon>)}
        </div>
     </div>
    </div>
  )
}

export default Navbar

// onClick={handleclick}