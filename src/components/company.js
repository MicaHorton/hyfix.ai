import React, { Component } from 'react';
import company_banner from '../media/company_banner.jpeg';


export default class Company extends Component {
  render() {
    return (
      <>
        <div className='about'>

          <div className='company-banner'></div>


        
          
          <p>HYFIX is embarking on a mission to democratize the sensor data by making it globally available, accessible, 
            and affordable. As a first step towards this journey, we are building a global network of RTK reference 
            stations to provide a hardware agnostic, fully modernized, multi-constellation, open-standard based, high precision
            data and correction services to users in IoT and other markets. Founded by the pioneers in IoT, Sensor Fusion, 
            Inertial Navigation and GNSS networking, we are headquartered in the heart of the Silicon Valley.</p>
              
        </div>
       
      </>
    );
  }
}

/*

  <img className='banner-image' src={company_banner} alt='logo'/>

  */