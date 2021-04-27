
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FilterButton from './FilterButton.js';
import CategoryList from './CategoryList.js';
import cart_icon from '../media/cart.svg';
import funnel_icon from '../media/funnel.svg';

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
                <Link to='/store/cart'><img src={cart_icon} className='icon' alt='cart icon'/></Link>
                
            </nav>

            <nav className='store-buttons'>
                <Link to='/store/cart'>
                    <img src={cart_icon} className='icon' alt='cart icon'/>
                </Link>
                <div onClick={() => this.toggleFilter()}>
                    <img src={funnel_icon} className='icon funnel-icon' alt='funnel icon'/>
                </div>
                <FilterButton showSelf={this.state.showFilter} toggleFilter={this.toggleFilter}/>
            </nav>
            </>
        );
    }
    
}

/*
<Link  className='fa fa-shopping-cart'></Link>
                
import cart_icon from '../media/cart.svg';
<img src={cart_icon}/>
<FontAwesomeIcon icon={['fas']}/>
*/