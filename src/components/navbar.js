import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from '../App.css';
/*
import Image from '../cover-image.jpg';
<img src={Image} alt='website header'/>
*/


export default class Navbar extends Component {
  render() {
    return (
        <div className='header'>
            <nav className='nav'>
                <Link to='/' className='nav-item'>About</Link>
                <Link to='/promotion' className='nav-item'>Promotion</Link>
            </nav>
        </div>
      
    );
  }
}

/*
Jess
Buissness
Sports
Transfer 4 Year College
*/