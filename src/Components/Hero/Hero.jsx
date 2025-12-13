import React from 'react'
import './Hero.css'
import Profile from '../../assets/Profile.jpg'


const Hero = () => {
  return (
    <div className='hero'>
        <img src={Profile} alt="" />
        <h1><span>I'm Dasu</span> , Web Devloper in india

        </h1>
        <p>iam a student at vignan institute of information technology</p>
        <div className="hero-action">
            <div className="hero-connect">
                Connect with me
            </div>
            <div className="hero-resume">
                My Resume
            </div>

        </div>
      
    </div>
  )
}

export default Hero
