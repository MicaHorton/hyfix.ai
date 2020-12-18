import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import company_banner from '../media/company_banner.jpeg';
import 'font-awesome/css/font-awesome.min.css';



export default class Store extends Component {
    constructor (props) {
        super(props);
        this.toggleFilter = this.toggleFilter.bind(this);
    }

    /*
    hide the usual navbar using document.body?
    */

    toggleFilter() {
        
    }

    render() {
        return (
    
            

            <main>
                <nav>
                    <Link to='#' className='fa fa-shopping-cart'></Link>
                    <Link to='#' className='fas fa-filter' onClick={() => this.goBack()}></Link>
                </nav>

                
            </main>   
 
        );
  }
}

/*

<div className='company-banner'></div>
PRECISION IS A SERVICE 

Add some cool lines seperating shades of gray in the background
Or something to breakup the text

  */