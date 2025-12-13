import React from 'react'
import Certificate1 from '../../assets/Certificate1.jpg'
import Certificate2 from '../../assets/Certificate2.jpg'
import './Certificates.css'

const Certificates = () => {
  return (
    <div className='certificates'>
        <div className="certificate-title">
            <h1>My Certificates</h1>
        </div>
        <div className="certificate-bar">
            <ul>
                <li><img style={{width:"600px",height:"350px"}} src={Certificate1} alt="" /></li>
                <li> <img style={{width:"600px",height:"350px"}} src={Certificate2} alt="" /></li>
            </ul>
            
           
        </div>
      
    </div>
  )
}

export default Certificates
