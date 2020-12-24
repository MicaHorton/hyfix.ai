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
                        cartChanged: false,
                        items: [] };

                        
        this.state.fetchItems = this.fetchItems.bind(this);
        this.state.listItems = this.listItems.bind(this);
    }


    /*
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
        console.log('fetch items');

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

    }

    listItems() {

        console.log('list items');
        console.log(this.state.items);

        let item;
        for (item in this.state.items) {
            console.log('hi');
        };





        

    
        return (<>
            {renderedItems}
            return <Item item={current} key={current._id}/>;
            <Link to='/store/checkout'>Checkout</Link>
        </>)
        } else {
            return <p className='no-items'>No Items in Cart</p>;
        }
    }*/

    render() {

        return <p>hi</p>;

        /*

        if (this.state.cartChanged) {
            this.fetchItems();
            this.setState({ cartChanged: false });   
        }

        

        
        console.log('render');

        

        return (
            <main className='products-page'>
                {this.listItems()}
            </main>
        );*/


        
    }
}

export default withCookies(Cart);

/*
something about clicking button

when it pushes, map is not created
when new items are re-pushed to

1st round
items = []
cart changed
derived
fetch items
push items
[items]
render
list items

2nd round
itmes = [items]
cart isn't changed
render
list items
[items]



whenver cookies change
read list of products
get list of products
calculate total (maybe eh, let stripe do that)
now just basics

ON cookies change
trigger getItemsChange
trigger fetchItems
trigger render


cookies change ==> props change ==> itemsToGet (state) change
render  => if itemsToGet is new, fetch items => items (state) change
render => listItems
*/

    /*
    componentDidMount() {
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
    
    }*/

    /*
        if (this.state.items) {
            return (
                <main className='cart-page'>
                    {this.listItems()}
                    <Link to='/store/checkout'>Checkout</Link>
                </main>
            );

        } else {
            return (
                <main className='cart-page'>
                     <p className='no-items'>No Items in Cart</p>
                </main>
            );     
        }*/