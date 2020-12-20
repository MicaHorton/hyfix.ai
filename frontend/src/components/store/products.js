import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import axios from 'axios';


const Product = props => (
    <article>
        <Link to={{pathname: '/store/single/', hash: props.item._id}} 
              className='product-header'>{props.item.name}</Link>
              
        <div className='fake-image'></div>
        <h2>price: $ {props.item.price}</h2>
        <h3>{props.item.description}</h3>
        
    </article>
)

export default class Store extends Component {
    constructor (props) {
        super(props);
        this.state = { products: [] };
        this.listAll = this.listAll.bind(this);
    }

    componentDidMount() {
        axios.get('https://zsvumedjri.execute-api.us-east-2.amazonaws.com/latest/products/') 
            .then(response => {
                this.setState({ products: response.data });
            })
            .catch((error) => {
                console.log(error);
             })
    }

    

    listAll() {
        return this.state.products.map(current => {
            return <Product item={current} key={current._id}/>;
        })
    }


    render() {
        return (

            <main className='products-page'>
                {this.listAll()}      
            </main>   
 
        );
  }
}

/*

<div className='company-banner'></div>
PRECISION IS A SERVICE 

Add some cool lines seperating shades of gray in the background
Or something to breakup the text

  */