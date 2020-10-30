import React, { Component } from 'react';
import company_banner from '../media/company_banner.jpeg';


export default class Company extends Component {
  render() {
    return (
        <div>
          
          <header className='banner'>
            <img className='banner-image' src={company_banner} alt='logo'/>
            <h1 className='banner-text'>Precision As A Service</h1>
          </header>
          

        
          <section className='section section-dark'>
            <h2 className='section-text'><i>HYFIX</i> is embarking on a mission to democratize the sensor data by making it globally available, accessible, 
              and affordable.</h2>
          </section>

          <section className='section section-light'>
            <p className='section-text'> As a first step towards this journey, we are building a global network of RTK reference 
              stations to provide a hardware agnostic, fully modernized, multi-constellation, open-standard based, 
              <ul>
                <li>hardware agnostic</li>
                <li>fully modernized</li>
                <li>open-standard based</li>
                <li>high precision</li>
              </ul>
              data and correction services to users in IoT and other markets.

            </p>
          </section>

          <section className='section section-dark'>
            <p className='section-text'>  Founded by the pioneers in IoT, Sensor Fusion, 
              Inertial Navigation and GNSS networking, we are headquartered in the heart of the Silicon Valley.
           </p>
          </section>

         
              
        </div>     
    );
  }
}

/*

<div className='company-banner'></div>
PRECISION IS A SERVICE 

Add some cool lines seperating shades of gray in the background
Or something to breakup the text

  */