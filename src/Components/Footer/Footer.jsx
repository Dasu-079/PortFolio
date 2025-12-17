import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='Footer'>
      <div className="footer-top">
        <div className="footer-top-left">
          <p>iam web developer from ,india with 2 years of experience</p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email">
            <input type="email" className='user-email'  placeholder='enter your email ' />
            <button type='submit'>Send</button>

          </div>
        </div>
        
      </div>
      <div className="footer-down">
        <hr />

        <div className="para">
          <p>2025 Dasu.All rights reserved</p>
          <p>terms of services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
      
    </div>
  )
}

export default Footer
