import TextSection from '../styles/TextSection';

const Contact = () => (
    <main className='contact-page'>
        <TextSection bg='light'> 
            <p>Receive a FREE survey-grade RTK base station and add it to the HYFIX global correction network,
            OR earn up to $1000/yr by contributing a real-time data stream from a qualifying RTK base station.  
            Apply Now! 
            </p>
        </TextSection>

        <iframe 
            className='contact-form ' 
            src="https://docs.google.com/forms/d/e/1FAIpQLSeuyqyQ2DzcEfEypfq9IW0LqRQpW3GMkGuy1OpVP4Dnscf0vw/viewform?embedded=true" 
            title='Basestation Application Form' width='100%' height='1300px' scrolling="no" 
            frameborder="0" marginheight="0" marginwidth="0">Loading…
        </iframe>
    
    </main>    

);

export default Contact;

