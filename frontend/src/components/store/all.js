import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import axios from 'axios';
import Card from './card.js';

export default class All extends Component {
    constructor (props) {
        super(props);
        this.state = { products: [] };
        this.listProducts = this.listProducts.bind(this);
    }

    componentDidMount() {
        axios.get('https://api.hyfix.ai/products') 
            .then(response => {
                this.setState({ products: response.data });
            })
            .catch((error) => {
                console.log(error);
             })
    }

    listProducts() {
        return this.state.products.map(current => {
            return <Card item={current} key={current._id}/>;
        })
    }

    render() {
        return (

            <main className='products-page'>
                <div className='products-list'>
                    {this.listProducts()}   
                </div>
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