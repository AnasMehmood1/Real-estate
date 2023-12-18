import React from 'react'
import "./Send.css"
const Sends = () => {
  return (
    <div>
      <div className="send-container" style={{
  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.479),rgba(0, 0, 0, 0.466)), url(./Assets/send.jpg)`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundAttachment:"fixed",
  backgroundPositionY:"15%"
}}>
        <div className="mail-container">
        <p>LOOKING FOR LOCAL INSIGHTS?</p>
      <h1>Unlock Local Expertise: Share Your Details <br /> for Personalized Real Estate Insights!</h1>
      <p>Looking for local insights?</p>
      <form action="https://formspree.io/f/xbjvngze" method='post'>
        <div className="names">
            <div className="col"><input type="text" name='First Name' placeholder='First Name' required  autoComplete='off' /></div>
            <div className="col">
                <input type="text"name='First Name' placeholder='Last Name' autoComplete='off' required />
            </div>
        </div>
        <div className="email">
            <input type="email" name='Email' placeholder='Example@gmail.com'  autoComplete='off' required />
        </div>
        <button className="send" type='submit'>Send</button>
      <p className='para'>We respect your privacy.</p>
      </form>
      
        </div>
      </div>
    </div>
  )
}

export default Sends
