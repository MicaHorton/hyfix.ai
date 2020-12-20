import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';


export default class Filter extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        this.props.toggleFilter();
    }

    render() {  

        if (!this.props.showSelf) {
            return null;
        }

        return (
            <nav className='store-filter'>
                <Link to='#' className='fa fa-times' onClick={() => this.handleChange()}></Link>
                <h2></h2>
                <h2></h2>
                <h2></h2>
                <h2></h2>
            </nav>
        );
    }
}

/* put x to the side when possible 
lol, next time use a framework for this 
better idea than lifting state up
everytime component is shown and reimported
state */