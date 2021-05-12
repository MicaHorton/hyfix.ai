import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import CartCard from '../../components/CartCard';

const Cart = (props) => {
    const [cookies] = useCookies(['userCart']);
    const [items, setItems] = useState([]);

    useEffect(() => {
        let userCart = cookies.userCart;

        if (userCart !== undefined) {
            if (props.products) {
                let productsInCart = props.products.filter(x => {
                    return cookies.userCart.includes(x.id); 
                });

                let currentItems = productsInCart.map(current => {
                    return <CartCard product={current} key={current.id}/>
                });

                setItems(currentItems);
            }
        } 

    }, [cookies, props]);

    
    if (cookies.userCart) {
        return (
            <main className='products-page'>
                <div className='products-list'>
                    {items}
                </div>
                <Link to='/store/checkout' className='button checkout-button'>Checkout</Link>

            </main>
        );
    } else {
        return (
            <main className='products-page'>
                <p className='no-items'>No Items in Cart</p>
            </main>
        );
    }
}

export default Cart;


/*
import { Link } from 'react-router-dom';
import { withCookies } from 'react-cookie';
import { getProductsInCart } from '../../api';

class Cart extends Component {
    constructor(props) {
        super(props);

        this.state = {  itemsChanged: false,
                        itemsToGet: [],
                        fetchedItems: [],
                        renderedItems: [] };
    }

    static getDerivedStateFromProps(props, state) {
        let cookies = props.cookies.get('userCart');
        let itemsInCart;
        if (cookies !== 'undefined') {
            itemsInCart = cookies;
        } else {
            itemsInCart = false;
        }

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
            console.log(this.state.fetchedItems);
            this.renderItems()
        }
    }

    fetchItems = () => {
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
        console.log(props);
        if (this.state.renderedItems.length > 0) {
            return (
                <main className='products-page'>
                    <div className='products-list'>
                        {this.state.renderedItems}
                    </div>
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
*/
 