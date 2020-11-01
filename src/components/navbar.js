import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from '../App.css';
import logo from '../media/logo.png';
/*
import Image from '../cover-image.jpg';
<img src={Image} alt='website header'/>
*/


export default class Navbar extends Component {
  render() {
    return (

          <nav className='nav'>
              <Link to='/' className='logo'>
                <img className='logo-image' src={logo} alt='logo'/>
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