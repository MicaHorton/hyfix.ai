import React, { Component } from 'react';
import base from '../media/base.jpg';


export default class About extends Component {
  render() {
    return (
      <div className='two-column'>
        <div className='two-column-item'>

          <div className='base'>
            <h1>Make your roof work for you.</h1>
            <img className='base-image' src={base} alt='base'/>
            <p className='base-caption'>
                   Interested in making money by hosting a small space weather station?
              HYFIX will pay $1000 dollars a year for our small antenna to be placed on homes with a clear view of the sky. 
              The antenna will be part of a nationwide network used to provide data to scientists and robotics researchers.
              Currently, we're only accepting people living in Canada. 
              Enter your info through the contact form to apply!
            </p>

          </div>
          

        </div>

        <div className='two-column-item'>
          <iframe src='https://docs.google.com/forms/d/e/1FAIpQLScDjQ5MfYBdhCLlm5o4Axd6HpqVfNAkZWQquKbI2B9I0WLBlA/viewform?embedded=true' width='640' height='1500' frameborder='0'scrolling='no' marginheight='0' marginwidth='0' >Loading…</iframe>      
        </div>

      </div>
      
    );
  }
}

/*
<iframe src='https://docs.google.com/forms/d/e/1FAIpQLScDjQ5MfYBdhCLlm5o4Axd6HpqVfNAkZWQquKbI2B9I0WLBlA/viewform?embedded=true' width='640' height='943' frameborder='0'  scrolling='no'>Loading…</iframe>
*/

/*
Make your roof work for you!
Make your roof work for you! Get paid yearly to support science by hosting a GPS base station on your roof.
*/