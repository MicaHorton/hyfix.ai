import React, { Component } from 'react';
import technology_banner from '../media/technology_banner.jpg';
import rtk_gnss_icon from '../media/rtk_gnss_icon.png';
import sensor_fusion_icon from '../media/sensor_fusion_icon.png'
import lora_icon from '../media/lora_icon.webp'
import blockchain_icon from '../media/blockchain_icon.png';

export default class Technology extends Component {
  render() {
    return (
        <main>
          <header className='banner'>
            <img className='banner-image' src={technology_banner} alt='logo'/>
            <h1 className='banner-text'>Technologies<br/> Shaping the Future</h1>
          </header>

          <div className='list section-dark'>

            <section className='list-item'>
              <img className='icon' src={rtk_gnss_icon} alt='icon'/>
              <div className='list-text'>
                <h2>RTK GNSS</h2>
                <h3>HYFIX positioning services provide cm level precision to enable mass market applications.</h3>
              </div>
            </section>

            <section className='list-item'>
              <img className='icon' src={sensor_fusion_icon} alt='icon'/>
              <div className='list-text'>
                <h2>Sensor Fusion</h2>
                <h3>Using sensor fusion of IMU, GNSS and other sensor data, HYFIX algorithms can provide precise positioning during GPS outages.</h3>
              </div>
              
            </section>

            <section className='list-item'>
              <img className='icon' src={lora_icon} alt='icon'/>
              <div className='list-text'>
                <h2>LoRa</h2>
                <h3>LoRaWAN wireless gateway allows any compatible LoRa IoT device to transfer data on PAS network.</h3>
              </div>
            </section>

            <section className='list-item'>
              <img className='icon' src={blockchain_icon} alt='icon'/>
              <div className='list-text'>
                <h2>Blockchain</h2>
                <h3>Blockchain powers the network and serves as the underlying technology for PAS cryptocurrency.</h3>
              </div>
            </section>

          </div>
          
        
        </main>
      
    );
  }
}

/*
Monsterrat
Lora
Hindi Maduri
https://fonts.google.com/specimen/Hind+Vadodara
https://fonts.google.com/specimen/Hind+Vadodara
https://fonts.google.com/specimen/Rosario
*/