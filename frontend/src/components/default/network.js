import React, { Component } from 'react';
import network_banner from '../../media/network_banner.jpg';

export default class Network extends Component {
  render() {
    return (
      <main>

        <header className='banner'>
            <img className='banner-image' src={network_banner} alt='logo'/>
            <h1 className='banner-text'>Global Network<br/> Powered by<br/> Blockchain</h1>
        </header>
        
        <section className='section section-dark'>
          <p className='section-text quote'>HYFIX aspires to build the largest global RTK network with fully modernized receivers 
              to provide hardware-agnostic and open-standards based correction services. We plan to 
              realize this goal is by establishing close partnerships with hardware providers to deploy 
              new base stations, supplementing with existing open networks, forming alliances with 
              regional public network services, and supporting local independent operators.
              By deploying a global network of base stations, HYFIX will provide cost-effective, 
              high precision data and correction services to users globally.
            </p>
        </section>
        
        
            
      </main>
       

    );
  }
}

/*

Global Network Powered by Blockchain
*/