import GlobeBanner from '../styles/GlobeBanner';
import TextSection from '../styles/TextSection';
import { FeatureSection, FeatureCard } from '../styles/Features';

import company_banner from '../media/globe_w_gradient.png';
import cog_icon from '../media/cog.svg'; 
import search_icon from '../media/search.svg'; 
import world_icon from '../media/world.svg'; 

const Company = () => (
    <main>
        <GlobeBanner>
            <div></div>
            <img src={company_banner} alt='logo'/>
            <h1>Precision As A Service</h1>
            <h2>HYFIX is embarking on a mission to democratize sensor data by making it globally available, accessible, 
              and affordable.</h2>
        </GlobeBanner>
        

        <FeatureSection>
            <p> As a first step towards this journey, we are building a global network of RTK reference 
            stations to provide data and correction services that are:
            </p>
                <ul>
                    <FeatureCard>
                        <p>hardware agnostic</p>
                        <img src={cog_icon} alt='cog'/>
                    </FeatureCard>
                    <FeatureCard>
                        <p>open-standards based</p>
                        <img src={world_icon} alt='globe'/>
                    </FeatureCard>
                    <FeatureCard>
                        <p>high precision</p>
                        <img src={search_icon} alt='magnifying glass'/>
                    </FeatureCard>
                </ul>
            <p>
            
            </p>
        </FeatureSection>

        <TextSection bg='blue'>
            <p>Founded by pioneers in IoT, Sensor Fusion, 
            Inertial Navigation and GNSS networking, we are headquartered in the heart of Silicon Valley.
            </p>
        </TextSection>          
    
    </main>     
)

export default Company;

/*

<FeatureCard>
                        <p>open-standards based</p>
                        <img src={world_icon} alt='globe'/>
                    </FeatureCard>
                    <FeatureCard>
                        <p>high precision</p>
                        <img src={search_icon} alt='magnifying glass'/>
                    </FeatureCard>

<div className='company-banner'></div>
PRECISION IS A SERVICE 

Add some cool lines seperating shades of gray in the background
Or something to breakup the text

  */