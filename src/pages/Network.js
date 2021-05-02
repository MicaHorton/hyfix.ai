import network_banner from '../media/network_banner.jpg';
import Banner from '../styles/Banner.js';
import TextSection from '../styles/TextSection.js';

const Network = () => (
    <main>
        <Banner>
            <img src={network_banner} alt='logo'/>
            <h1>Global Network<br/> Powered by<br/> Blockchain</h1>
        </Banner>

        <TextSection>
            <p>HYFIX aspires to build the largest global RTK network with fully modernized receivers 
                to provide hardware-agnostic and open-standards based correction services. We plan to 
                realize this goal is by establishing close partnerships with hardware providers to deploy 
                new base stations, supplementing with existing open networks, forming alliances with 
                regional public network services, and supporting local independent operators.
                By deploying a global network of base stations, HYFIX will provide cost-effective, 
                high precision data and correction services to users globally.
            </p>
        </TextSection>
    </main>
);

export default Network;

/*

Global Network Powered by Blockchain
*/