import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from '../App.css';
import full_logo from '../media/full_logo.png';
import half_logo from '../media/half_logo.png';
/*
import Image from '../cover-image.jpg';
<img src={Image} alt='website header'/>
*/


export default class Navbar extends Component {
  render() {
    return (

          <nav className='nav'>
              <Link to='/' className='logo'>
                <img className='logo-image logo-web' src={full_logo} alt='logo'/>
                <img className='logo-image logo-mobile' src={half_logo} alt='logo'/>
              </Link>
              
              <div className='menu'>
                <Link to='/applications' className='menu-item'>Applications</Link>
                <Link to='/network' className='menu-item'>Network</Link>
                <Link to='/technology' className='menu-item'>Technology</Link>
                <Link to='/contact' className='menu-item'>Contact</Link>
              </div>


          </nav>

      
    );
  }
}

/*
Jess
Buissness
Sports
Transfer 4 Year College
*/