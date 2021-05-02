import technology_banner from '../media/technology_banner.jpg';
import rtk_gnss_icon from '../media/rtk_gnss_icon.png';
import sensor_fusion_icon from '../media/sensor_fusion_icon.png'
import lora_icon from '../media/lora_icon.webp'
import blockchain_icon from '../media/blockchain_icon.png';
import Banner from '../styles/Banner.js';

const Technology = () => (
    <main>
        <Banner>
            <img src={technology_banner} alt='logo'/>
            <h1>Technologies<br/> Shaping the Future</h1>
        </Banner>

        <div className='list section-dark'>
            <section className='list-item'>
                <img className='tech-icon' src={rtk_gnss_icon} alt='icon'/>
                <div className='list-text'>
                <h2>RTK GNSS</h2>
                <h3>HYFIX positioning services provide centimeter level precision for mass market applications.</h3>
                </div>
            </section>

            <section className='list-item'>
                <img className='tech-icon' src={sensor_fusion_icon} alt='icon'/>
                <div className='list-text'>
                <h2>Sensor Fusion</h2>
                <h3>Using sensor fusion of IMU, GNSS and other sensor data, HYFIX algorithms can provide precise positioning in GPS challenged enviroments.</h3>
                </div>
            </section>

            <section className='list-item'>
                <img className='tech-icon' src={lora_icon} alt='icon'/>
                <div className='list-text'>
                <h2>LoRa</h2>
                <h3>LoRaWAN wireless gateway allows any compatible LoRa IoT device to transfer data on PAS network.</h3>
                </div>
            </section>

            <section className='list-item'>
                <img className='tech-icon' src={blockchain_icon} alt='icon'/>
                <div className='list-text'>
                <h2>Blockchain</h2>
                <h3>Blockchain powers the network and serves as the underlying technology for PAS cryptocurrency.</h3>
                </div>
            </section>
        </div>

    </main>

);

export default Technology;


/*
<img className='banner-image tech' src={technology_banner} alt='logo'/>
            <h1 className='banner-text tech'>Technologies<br/> Shaping the Future</h1>

Monsterrat
Lora
Hindi Maduri
https://fonts.google.com/specimen/Hind+Vadodara
https://fonts.google.com/specimen/Hind+Vadodara
https://fonts.google.com/specimen/Rosario
*/