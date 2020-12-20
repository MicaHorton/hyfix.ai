import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import axios from 'axios';
import Filter from './filter.js';

const Product = props => (
    <article>
        <Link to={{pathname: '/single/' + props.item._id,}} 
              className='product-header'>{props.item.name}</Link>
              
        <div className='fake-image'></div>
        <h2>price: $ {props.item.price}</h2>
        <h3>{props.item.description}</h3>
        
    </article>
)

export default class Store extends Component {
    constructor (props) {
        super(props);
        this.state = { products: [] , showFilter: false};
        this.toggleFilter = this.toggleFilter.bind(this);
        this.listAll = this.listAll.bind(this);
    }

    componentDidMount() {
        axios.get('https://zsvumedjri.execute-api.us-east-2.amazonaws.com/latest/products/') 
            .then(response => {
                this.setState({ products: response.data });
            })
            .catch((error) => {
                console.log(error);
             })
    }

    toggleFilter() {
        this.setState({showFilter: !this.state.showFilter});
    }

    listAll() {
        return this.state.products.map(current => {
            return <Product item={current} key={current._id}/>;
        })
    }


    render() {
        return (

            <main className='store-page'>
                <nav className='store-nav'>
                    <Link to='/cart' className='fa fa-shopping-cart'></Link>
                    <Link to='#' className='fa fa-filter' onClick={() => this.toggleFilter()}></Link>
                </nav>

                {this.listAll()}

                <Filter showSelf={this.state.showFilter} toggleFilter={this.toggleFilter}/>
                
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