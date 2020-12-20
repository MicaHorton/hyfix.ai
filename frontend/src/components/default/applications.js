import React, { Component } from 'react';
import applications_banner from '../../media/applications_banner.png';

export default class Applications extends Component {
  render() {
    return (
        <main>
          <header className='banner'>
            <img className='banner-image' src={applications_banner} alt='logo'/>
          </header>
            
          <section className='section section-dark'>
            <p className='section-text'> The trend in many industries to embrace IoT, Autonomy and Augmented Reality Visualization 
                is creating a large high-accuracy positioning market for lower-cost devices and services. 
                Significant challenges remain in obtaining high-accuracy position data using low-cost GNSS 
                receivers due to their tendency to obtain poor quality measurements especially in challenging 
                environments. HYFIX’s software and services help solve these challenges and unlock new applications 
                that benefit from high accuracy positioning.</p>

          </section>
            
              
        </main>


    );
  }
}
