import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { withCookies } from 'react-cookie';

class Single extends Component {
    constructor(props) {
        super(props);
        this.state = { productId: this.props.location.hash.split('#').pop(),
                       productInfo: {} };
        this.addToCart = this.addToCart.bind(this);
     }

    addToCart() {
        const cookies = this.props.cookies;
        let itemsInCart = cookies.get('userCart');

        if (itemsInCart) {
            itemsInCart.push(this.state.productId);
            cookies.set('userCart', itemsInCart , {path: '/'});

        } else {
            console.log('no cookies exist yet')
            cookies.set('userCart', [this.state.productId], {path: '/'})
        }
        console.log('Current Items', cookies.get('userCart'));
    }

    componentDidMount() {
        axios.get('https://api.hyfix.ai/products/single/'
                  + this.state.productId)
            .then(response => {
                console.log('Single product data fetched')
                this.setState({ productInfo: response.data });
            })
            .catch((error) => {
                console.log(error);
             })

    }
    
    render() {
          return (
            <main className='products-page'>
                <article>
                    <h1 className='product-header'>{this.state.productInfo.name}</h1>

                    <div className='fake-image'></div>
                    <h2>price: $ {this.state.productInfo.price}</h2>
                    <h3>{this.state.productInfo.description}</h3>
                    <button className='button add-button' onClick={() => this.addToCart()}>Add To Cart</button>

                </article>
            </main>
     
        );
    }
}

export default withCookies(Single);

/*

<img src='https://s3-us-west-1.amazonaws.com/hyfxi.ai-images/hello2.jpg' alt='hello'></img>

*/