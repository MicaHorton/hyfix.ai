import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import Card from '../../components/ProductCard.js';
import { getAllProducts } from '../../api.js';


const All = (props) => {
    let products = props.products.map(current => {
        return <Card item={current} key={current._id}/>;
    })

    return (
        <main className='products-page'>
            <div className='products-list'>
                {products}
            </div>
        </main>   

    );

}

export default All;

/*
export default class All extends Component {
    constructor (props) {
        super(props);
        this.state = { products: [] };
        this.listProducts = this.listProducts.bind(this);
    }

    componentDidMount() {
        getAllProducts()
        .then(products => this.setState({ products: products }))
        .catch(err => console.log(err))
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
}*/

/*

<div className='company-banner'></div>
PRECISION IS A SERVICE 

Add some cool lines seperating shades of gray in the background
Or something to breakup the text

  */