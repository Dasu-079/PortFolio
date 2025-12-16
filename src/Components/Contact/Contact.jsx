import React from 'react'
import './Contact.css'
import  G from '../../assets/G.png'
import P from '../../assets/P.png'
import I from '../../assets/I.png'

const Contact = () => {
  return (
    <div className='Contact'>
        <div className="contact-title">
            <h1>Get In Touch</h1>
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>Manam ipudu kali ney message chey chuskundam</p>
            
             
             <div className="contact-details">
                <div className="contact-detail">
                <img className='contact-image' src={G} alt="" /><p>karridasu@gmail.com</p>


                </div>
                <div className="contact-detail">
                    <img src={I} alt="" className="contact-image" /><p>it_a_ch_i__</p>

                </div>
                <div className="contact-detail">
                    <img src={P} alt="" className="contact-image" /><p>9347020141</p>


                </div>
            </div>
            </div>
            <form className='contact-right'>
                <label htmlFor="">Your name</label>
                <input type="text" placeholder='Enter your name' name='name' />
                <label htmlFor="">Your email</label>
                <input type="text" name="email" placeholder='enter your email'/>
                <label htmlFor="">write your message</label>
                <textarea name="message" placeholder='message here' rows={8}></textarea>
                <button type='submit' className='contact-button'>Submit Now</button>
            </form>
        </div>

      
    </div>
  )
}

export default Contact
