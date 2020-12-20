import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withCookies } from 'react-cookie';


const Item = props => (
    <article>
        <h1>{props.item.name}</h1>
        <div className='fake-image'></div>
        <h2>price: $ {props.item.price}</h2>
        <h3>{props.item.description}</h3>
    </article>
)

class Cart extends Component {

    constructor(props) {
        super(props);

        const cookies = this.props.cookies;
        let itemsInCart = cookies.get('userCart');

        this.state = {items: itemsInCart}
        console.log(this.state.items);

    }

    listItems() {

        if (this.state.items) {
            return this.state.items.map(current => {
                return <Item item={current} key={current._id}/>;
            })
        } else {
            return <p>No Items in Cart</p>
        }
        
    }



    render() {
        return (
            <main className='cart-page'>

                {this.listItems()}
                <Link to='/checkout'>Checkout</Link>

            </main>

        );
        
    }
}

export default withCookies(Cart);

/*

whenver cookies change
read list of products
get list of products
calculate total (maybe eh, let stripe do that)
now just basics

*/