import React, { Component } from 'react';
import company_banner from '../media/company_banner.jpeg';
import example from '../media/example.png';

export default class Contact extends Component {
  render() {
    return (
        <main className='contact-page'>

          <header className='banner'>
            <img className='banner-image' src={company_banner} alt='image of globe'/>
            <h1 className='banner-text'>Make Your Base Station <br/> Earn Rewards for You!</h1>
          </header>

          <section className='section section-dark'> 
            <p className='section-text'>
                HYFIX is building the world's largest, most modernized, community-driven RTK network. 
                PAS (Precision As a Service) is a blockchain based token that enables peer-to-peer networking 
                for GNSS data aggregation and distribution. PAS blockchain allows RTK base stations to mine PAS rewards. 
                By connecting your base stations into this blockchain network, you can be part of the global 
                network and get rewarded with PAS tokens. 
            </p>
          </section>

          

          <section className='example section-light'>
            <p className='example-text'>Here's an example of what your base station could be earning for you:</p>
            <img className='example-image' src={example} alt='statistics about bastation earnings'/>
          </section>

          
  
          <iframe className='contact-form ' src="https://docs.google.com/forms/d/e/1FAIpQLSdg_qzN2I1G6xdWoBnZdXkfmNpGrwGVjzVvmgqdKYlbAJvvOw/viewform?embedded=true" width='100%' height='1000px' scrolling="no" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
            
        </main>     
    );
  }
}


/*



*/