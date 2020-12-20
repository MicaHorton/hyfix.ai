import React, { Component } from 'react';
import company_banner from '../../media/company_banner.jpeg';


export default class Company extends Component {
  render() {
    return (
        <main>
          
          <header className='banner'>
            <img className='banner-image' src={company_banner} alt='logo'/>
            <h1 className='banner-text'>Precision As A Service</h1>
          </header>
        
          <section className='section section-dark'>
            <h2 className='section-text'>HYFIX is embarking on a mission to democratize sensor data by making it globally available, accessible, 
              and affordable.</h2>
          </section>

          <section className='section section-light'>
            <p className='section-text'> As a first step towards this journey, we are building a global network of RTK reference 
              stations to provide  
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
            <p className='section-text'>  Founded by pioneers in IoT, Sensor Fusion, 
              Inertial Navigation and GNSS networking, we are headquartered in the heart of Silicon Valley.
           </p>
          </section>

         
              
        </main>     
    );
  }
}

/*

<div className='company-banner'></div>
PRECISION IS A SERVICE 

Add some cool lines seperating shades of gray in the background
Or something to breakup the text

  */