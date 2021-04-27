
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import FilterButton from './FilterButton.js';
import CategoryList from './CategoryList.js';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(fas);

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
        return (
            <>
            <nav className='store-bar'>
                <CategoryList/>
                <Link to='/store/cart' className='fa fa-shopping-cart'></Link>
                <FontAwesomeIcon icon={['fas']}/>
            </nav>

            <nav className='store-buttons'>
                <Link to='/store/cart' className='fas fa-shopping-cart'></Link>
                <div className='fa fa-filter' onClick={() => this.toggleFilter()}></div>
                <FilterButton showSelf={this.state.showFilter} toggleFilter={this.toggleFilter}/>
            </nav>
            </>
        );
    }
    
}

/*
<>
            <nav className='store-bar'>
                <Items/>
                <Link to='/store/cart' className='fa fa-shopping-cart'></Link>
                <FontAwesomeIcon icon={['fas', 'coffee']}/>
            </nav>

            <nav className='store-buttons'>
                <Link to='/store/cart' className='fas fa-shopping-cart'></Link>
                <div className='fa fa-filter' onClick={() => this.toggleFilter()}></div>
                <Filter showSelf={this.state.showFilter} toggleFilter={this.toggleFilter}/>
            </nav>
            </>

*/