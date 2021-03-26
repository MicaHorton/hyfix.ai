import React, { Component } from 'react';
import { withCookies } from 'react-cookie';
import { getSingleProduct } from '../../../api';

class Single extends Component {
    constructor(props) {
        super(props);
        this.state = { productId: this.props.location.hash.split('#').pop(),
                       productInfo: {} };
        this.addToCart = this.addToCart.bind(this);
     }

    addToCart() {
        const cookies = this.props.cookies
        const userCart = cookies.get('userCart');

        let itemsInCart;
        if (userCart !== 'undefined') {
            itemsInCart = userCart;
        } else {
            itemsInCart = false;
        }

        if (itemsInCart) {
            itemsInCart.push(this.state.productId);
            cookies.set('userCart', itemsInCart , {path: '/'});
        } else {
            console.log('No cookies exist yet')
            cookies.set('userCart', [this.state.productId], {path: '/'})
        }

        console.log(this.props.history.push('/store/all'));
    }

    componentDidMount() {
        getSingleProduct(this.state.productId)
        .then(product => this.setState({ productInfo: product }))
        .catch(err => console.log(err))
    }
    
    render() {
          return (
            <main className='single-page'>
                <article className='single-article'>
                    <h1 className='product-header'>{this.state.productInfo.name}</h1>

                    <img alt={this.state.productInfo.img} className='single-image' 
                    src={`https://s3-us-west-1.amazonaws.com/hyfxi.ai-images/${this.state.productInfo.img}`}></img>

                    <h2>price: $ {this.state.productInfo.price}</h2>
                    <h3>{this.state.productInfo.description} Hello!</h3>
                    

                </article>
                <button className='button add-button' onClick={() => this.addToCart()}>Add To Cart</button>
            </main>
     
        );
    }
}

export default withCookies(Single);

