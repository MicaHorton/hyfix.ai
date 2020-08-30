import React, { Component } from 'react';



export default class About extends Component {
  render() {
    return (
      <div className='two-column'>
        <div className='two-column-item'>
          <h1>Make your roof work for you.</h1>
          <p>Get paid yearly to host a space weather station on your roof. We're looking for people in Canada with few trees nearby. Enter your info through the contact form to apply!</p>

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