import React from 'react'
import "./Contact.css"
const Contactform = () => {
  return (
    <div>
         <div class="contact-container">
        <div class="right-info">

            <h1>Get in Touch</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, veniam! Tenetur obcaecati quasi
                mollitia provident dolor, blanditiis quisquam at doloribus!</p>

            <div className="icons">
                <div><i class="fa-brands fa-facebook"></i></div>
                <div> <i class="fa-brands fa-square-instagram"></i></div>
                <div><i class="fa-brands fa-linkedin"></i>
                </div>
            </div>

        </div>
        <div className="left-info">
          <form action="https://formspree.io/f/xbjvngze" method='post'>
            <div className="names">
            <div className="cols">
                <input type="text" name='FirstName' placeholder='First Name' required autoComplete='off' />
            </div>
            <div className="cols">
                <input type="text" name='LastName' placeholder='Last Name'  required autoComplete='off' />
            </div>
            </div>
            <div className="emails">
                <input type="email" name='Email' placeholder='Example@gmail.com'  required autoComplete='off' />
            </div>
            <div className="text-area">
                <textarea name="Message" id="" cols="30" rows="10" placeholder='Send Message'  required autoComplete='off'></textarea>
            </div>
            <button className="btn" type='submit'>Submit</button>
          </form>
          
        </div>

    </div>
    </div>
  )
}

export default Contactform
