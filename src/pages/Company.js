import company_banner from '../media/globe.jpg';
import GlobeBanner from '../components/GlobeBanner';
import TextSection from '../components/TextSection';

const Company = () => (
    <main>
        <GlobeBanner>
            <div></div>
            <img src={company_banner} alt='logo'/>
            <h1>Precision As A Service</h1>
            <h2>HYFIX is embarking on a mission to democratize sensor data by making it globally available, accessible, 
              and affordable.</h2>
        </GlobeBanner>
        

        <TextSection bg='light'>
            <p> As a first step towards this journey, we are building a global network of RTK reference 
            stations to provide  
                <ul>
                    <li>hardware agnostic</li>
                    <li>fully modernized</li>
                    <li>open-standard based</li>
                    <li>high precision</li>
                </ul>
            data and correction services to users in IoT and other markets.
            </p>
        </TextSection>

        <TextSection bg='dark'>
            <p>  Founded by pioneers in IoT, Sensor Fusion, 
                Inertial Navigation and GNSS networking, we are headquartered in the heart of Silicon Valley.
            </p>
        </TextSection>          
    
    </main>     
)

export default Company;

/*

<div className='company-banner'></div>
PRECISION IS A SERVICE 

Add some cool lines seperating shades of gray in the background
Or something to breakup the text

  */