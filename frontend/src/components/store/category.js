import React, { Component } from 'react';
import axios from 'axios';
import Card from './Card.js';

export default class Category extends Component {

    constructor(props) {
        super(props);
        this.state = { category: this.props.location.search.split('?')[1],
                       categoryChanged: false,
                       products: [] };
        this.listProducts = this.listProducts.bind(this);
        this.getProducts = this.getProducts.bind(this);
        this.getProducts();
    }

    static getDerivedStateFromProps(props, state) {
        let currentCategory = props.location.search.split('?')[1];
        if (state.category !== currentCategory) {
            return { category: currentCategory, categoryChanged: true }
        }

        return null;
        
    }

    getProducts() {
        axios.get('https://api.hyfix.ai/products/category/'
                  + this.state.category ) 
            .then(response => {
                this.setState({ products: response.data });
                console.log('got products!')
                console.log(this.state.products);

            })
            .catch((error) => {
                console.log(error);
             })
    }

    listProducts() {
        console.log('list products run');
        console.log(this.state.products);
        return this.state.products.map(current => {
            return <Card item={current} key={current._id}/>;
        })
    }

    render() {
        if (this.state.categoryChanged) {
            this.getProducts()
            this.setState({ categoryChanged: false });
        }

        return (
            <main className='products-page'>
                {this.listProducts()}
            </main>
        );

    }

}