import React, { Component } from 'react';
import Card from './Card.js';
import { getProductsByCategory } from '../../api';

export default class Category extends Component {

    constructor(props) {
        super(props);
        this.state = { category: this.props.location.search.split('?')[1],
                       categoryChanged: true,
                       products: [] };
        this.listProducts = this.listProducts.bind(this);
    }

    static getDerivedStateFromProps(props, state) {
        let currentCategory = props.location.search.split('?')[1];
        if (state.category !== currentCategory) {
            return { category: currentCategory, categoryChanged: true };
        } else {
            return null;
        }
        
    }

    listProducts() {
        return this.state.products.map(current => {
            return <Card item={current} key={current._id}/>;
        })
    }

    render() {
        if (this.state.categoryChanged) {
            getProductsByCategory(this.state.category)
                .then(products => this.setState({ products: products }))
                .catch(err => {console.log(err)})
            this.setState({ categoryChanged: false });
        }

        return (
            <main className='products-page'>
                {this.listProducts()}
            </main>
        );

    }

}