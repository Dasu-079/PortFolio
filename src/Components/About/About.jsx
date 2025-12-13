import React from 'react'
import './About.css'
import Profile from '../../assets/Profile.jpg'
const About = () => {
  return (
  <div className='About'>
     <div className="About-Title">
            <h1>About me</h1>
            <br/>

        </div>
        <div className="about-section">
          <div className="about-left">
            <img style={{width:"300px",height:"100%"}} src={Profile} alt="" />

          </div>
          <div className="about-right">
            <div className="about-para">
              <p>Hello,I'm Dasu present pursing my computer science degree in B tech at vignan institute of information technology</p>
              <p>Now iam learning skills that are useful for my future work prefrences </p>
            </div>
            <div className="about-skills">
              <div className="about-skill">
                <p>HTML & CSS</p><hr style={{width:"50%"}}/>
              </div>
              <div className="about-skill">
                <p>JAVA</p><hr style={{width:"40%"}}/>
              </div>
              <div className="about-skill">
                <p>GEN AI</p><hr style={{width:"70%"}}/>
              </div>
              <div className="about-skill">
                <p>DATA SCIENCE</p><hr style={{width:"60%"}}/>
              </div>


            </div>
          </div>
          
        </div>
        <div className="about-achievements">
          <div className="achievement">
            <h1>10+</h1>
            <p>YEARS OF EXPERIENCE</p>

          </div>
          <hr/>
          <div className="achievement">
            <h1>90+</h1>
            <p>PROJECT COMPLETED</p>

          </div>
          <hr />
          <div className="achievement">
            <h1>10+</h1>
            <p>HAPPY CLIENTS</p>

          </div>
          <hr />


        </div>
        
        

    </div>
  )
}

export default About
