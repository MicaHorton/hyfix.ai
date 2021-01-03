import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withCookies } from 'react-cookie';
import { getProductsInCart } from '../../api';


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

        getProductsInCart(this.state.itemsToGet)
        .then(products => this.setState({ fetchedItems: products }))
        .catch(err => console.log(err))

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

 