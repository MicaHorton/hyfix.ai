import React, { Component } from 'react';
import base from '../media/base.jpg';

export default class Promotion extends Component {
  render() {
    return (
      <main className='page-container'>

        <div className='page-item-1'>
            <h1>Make your roof work for you.</h1>

            <div className='base-container'>
              <img className='base-image' src={base} alt='base'/>
              <p className='base-caption'>
                    Interested in making money by hosting a small space weather station?
                HYFIX will pay $1000 dollars a year for our small antenna to be placed on homes with a clear view of the sky. 
                The antenna will be part of a nationwide network used to provide data to scientists and robotics researchers.
                Enter your info through the contact form to apply!
              </p>

            </div>
            
  
        </div>

        <div className='page-item-2'>
          <iframe src='https://docs.google.com/forms/d/e/1FAIpQLScDjQ5MfYBdhCLlm5o4Axd6HpqVfNAkZWQquKbI2B9I0WLBlA/viewform?embedded=true' 
          title='Contact Information Form' width='100%' height='1000' frameborder='0' scrolling='no' marginheight='0' marginwidth='0' >Loading…</iframe>      
        </div>
             
      </main>
      
    );
  }
}

/*
width='640' height='1500' frameborder='0' scrolling='no' marginheight='0' marginwidth='0' 

<div className='base'>
              <img className='base-image' src={base} alt='base'/>
              <p className='base-caption'>
                    Interested in making money by hosting a small space weather station?
                HYFIX will pay $1000 dollars a year for our small antenna to be placed on homes with a clear view of the sky. 
                The antenna will be part of a nationwide network used to provide data to scientists and robotics researchers.
                Currently, we're only accepting people living in Canada. 
                Enter your info through the contact form to apply!
              </p>
            </div>

*/
