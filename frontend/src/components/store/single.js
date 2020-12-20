import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


export default class Single extends Component {
    constructor(props) {
        super(props);
        this.state = { productId: this.props.location.hash.split('#').pop(),
                       productInfo: {} };
     }


    componentDidMount() {

        axios.get('https://zsvumedjri.execute-api.us-east-2.amazonaws.com/latest/products/'
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
            <main>
                <article>
                    <h1>{this.state.productInfo.name} </h1>

                    <div className='fake-image'></div>
                    <h2>price: $ {this.state.productInfo.price}</h2>
                    <h3>{this.state.productInfo.description}</h3>
                    <button>Add To Cart</button>

                </article>
            </main>
     
        );
    }
}

