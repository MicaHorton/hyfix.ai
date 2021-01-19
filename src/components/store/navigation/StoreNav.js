
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import Filter from './Filter.js';
import Items from './Items.js';

export default class StoreNavbar extends Component {
    constructor (props) {
        super(props);
        this.state = { showFilter: false};
        this.toggleFilter = this.toggleFilter.bind(this);
    }

    toggleFilter() {
        this.setState({showFilter: !this.state.showFilter});
    }

    render() {
        return(
            <>
            <nav className='store-bar'>
                <Items/>
                <Link to='/store/cart' className='fa fa-shopping-cart'></Link>
            </nav>

            <nav className='store-buttons'>
                <Link to='/store/cart' className='fa fa-shopping-cart'></Link>
                <div className='fa fa-filter' onClick={() => this.toggleFilter()}></div>
                <Filter showSelf={this.state.showFilter} toggleFilter={this.toggleFilter}/>
            </nav>
            </>
            
        );
    }
    
}

/*
<Link to='/cart' className='fa fa-shopping-cart'></Link>
                <Link to='#' className='fa fa-filter' onClick={() => this.toggleFilter()}></Link>
*/