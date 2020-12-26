import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withCookies } from 'react-cookie';
import axios from 'axios';
import lodash from 'lodash';

const Item = props => (
    <article className='cart-item'>
        <div className='fake-image'></div>
        <h1>{props.item.name}</h1>
        <h2>$ {props.item.price}</h2>
    </article>
)

class Cart extends Component {
    constructor(props) {
        super(props);

        this.state = {  itemsChanged: false,
                        itemsToGet: [],
                        fetchedItems: [],
                        renderedItems: [] };
    }

    static getDerivedStateFromProps(props, state) {
        let cookies = props.cookies;
        let itemsInCart = cookies.get('userCart');

        if (itemsInCart) {
            if (state.itemsToGet.toString() !== itemsInCart.toString()) {
                return { itemsChanged: true, itemsToGet: itemsInCart }
            }
        }

        return null;
       
    }

    componentDidMount() {
        if (this.state.itemsChanged) {
            this.setState({ itemsChanged: false});
            this.fetchItems();
        }
    }

    componentDidUpdate() {
        if (this.state.itemsChanged) {
            this.setState({ itemsChanged: false});
            this.fetchItems();
        } 
        
        if (this.state.fetchedItems) {
            console.log('therea re fetched');
            console.log(this.state.fetchedItems);
            this.renderItems()
        }
    }

    fetchItems = () => {
        console.log('fetch items');

        let itemsToGet = this.state.itemsToGet;
        let item;

        for (item of itemsToGet) {
            axios.get('https://api.hyfix.ai/products/single/' + item)
            .then(response => {
                this.setState((prevState, props) => {
                    let fetchedItems =  prevState.fetchedItems;
                    fetchedItems.push(response.data);
                    return {  fetchedItems: fetchedItems  };
                });

            })
            .catch(error => {
                console.log(error);
            });
        }; 
        
    }


    renderItems = () => {
        let newRenderedItems = this.state.fetchedItems.map(current => {
            return <Item item={current} key={current._id}/>;
        })

        if (this.state.renderedItems.toString() !== newRenderedItems.toString()) {
            this.setState({ renderedItems: newRenderedItems });
        }
        
    }

    render() {
        if (this.state.renderedItems.length > 0) {
            return (
                <main className='products-page'>
                    {this.state.renderedItems}
                    <Link to='/store/checkout' className='button checkout-button'>Checkout</Link>
                </main>
            );

        } else {
            return (
                <main className='products-page'>
                    <p className='no-items'>No Items in Cart</p>
                </main>

            )
        }
        
    }
}

export default withCookies(Cart);

 