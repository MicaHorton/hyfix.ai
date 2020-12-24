import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withCookies } from 'react-cookie';
import axios from 'axios';

const Item = props => (
    <article className='cart-item'>
        <h1>{props.item.name}</h1>
        <div className='fake-image'></div>
        <h2>price: $ {props.item.price}</h2>
    </article>
)

class Cart extends Component {
    constructor(props) {
        super(props);

        this.state = {  itemsToGet: [],
                        fetchedItems: [],
                        renderedItems: [] };

        this.state.fetchItems = this.fetchItems.bind(this);
        this.state.renderItems = this.renderItems.bind(this);
    }

    static getDerivedStateFromProps(props, state) {
        console.log('derived');
        let cookies = props.cookies;
        let itemsInCart = cookies.get('userCart');

        if (state.itemsToGet.toString() === itemsInCart.toString()) {
            console.log('cart is the same')
            return null;
        } else {
            console.log('cart has changed')
            return { itemsToGet: itemsInCart, cartChanged: true }
        }
        
    }

    fetchItems() {
        console.log('fetch items:', this.state.itemToGet);
        let itemsToGet = this.state.itemsToGet;
        if (!itemsToGet) { return null };

        let item;
        let fetchedItems = [];
    
        for (item of itemsToGet) {
            axios.get('https://api.hyfix.ai/products/single/' + item)
            .then(response => {
                fetchedItems.push(response.data);   
           }) 
           .catch((error) => {
                console.log(error);
            });
        }
        this.setState({ items: fetchedItems });
        this.renderItems();
    }

    renderItems() {
        console.log('render items');

        
        let renderedItems = this.state.items.map(current => {
            return <Item item={current} key={current._id}/>;
        });

        this.setState({ renderedIems: renderedItems})
    }

    render() {

        
        if (this.state.cartChanged) {
            console.log('render: cart has changed')
            this.fetchItems();
            this.setState({ cartChanged: false });
            console.log('render items: state of items:', this.state.items)
        } else {
            console.log('render: cart has not changed')
        }

        return (
            <main className='products-page'>
                {this.state.renderedItems}
            </main>
        );

    


        
    }
}

export default withCookies(Cart);

 