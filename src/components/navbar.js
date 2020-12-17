import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from '../App.css';
import logo from '../media/full_logo.png';
import 'font-awesome/css/font-awesome.min.css';

export default class Navbar extends Component {
  constructor (props) {
    super(props);
    this.toggleOverlay = this.toggleOverlay.bind(this);
  }

  toggleOverlay() {
    document.body.style.backgroundColor = 'white';
  }

  render() {
  

    return (
          <nav>

              <header>
                <button className='fa fa-bars'></button>
                <Link to='/' className='logo'>
                  <img className='logo-image' src={logo} alt='logo'/>
                </Link>
              </header>

              <div className='menu-mobile'>
                <Link to='/applications' className='menu-item-mobile'>Applications</Link>
                <Link to='/network' className='menu-item-mobile'>Network</Link>
                <Link to='/technology' className='menu-item-mobile'>Technology</Link>
                <Link to='/contact' className='menu-item-mobile'>Contact</Link>
              </div>
           
          </nav>
    );

  }
  
}

/*

on click: 
toggle
  which button rendered
  background overlay color
  which menu style to use
<img className='logo-image logo-mobile' src={half_logo} alt='logo'/>
*/