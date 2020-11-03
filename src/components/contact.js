import React, { Component } from 'react';

export default class Contact extends Component {
  render() {
    return (
        <main className='contact-page'>

          <div className='contact-text'>
            <section className='section section-light'>
              <h2 className='section-text'>Make Your Base Station Earn Rewards for You!</h2>
            </section>

            <section className='section section-dark'> 
              <p className='section-text'>
                  HYFIX is building the world's largest, most modernized, community-driven RTK network. 
                  PAS (Precision As a Service) is a blockchain based token that enables peer-to-peer networking 
                  for GNSS data aggregation and distribution. PAS blockchain allows RTK base stations to mine PAS rewards. 
                  By connecting your base stations into this blockchain network, you can be part of the global 
                  network and get rewarded with PAS tokens.
              </p>
            </section>
          </div>

          

          <iframe className='contact-form ' src="https://docs.google.com/forms/d/e/1FAIpQLSdg_qzN2I1G6xdWoBnZdXkfmNpGrwGVjzVvmgqdKYlbAJvvOw/viewform?embedded=true" width='100%' height='1000px' scrolling="no" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
            
        </main>     
    );
  }
}
