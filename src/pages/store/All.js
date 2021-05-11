import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import Card from '../../components/ProductCard.js';
// import { getAllProducts } from '../../api.js';



const All = (props) => {

    if (props.products) {
        let products = props.products.data.map(current => {
            return <Card item={current} key={current._id}/>;
        })


        return (
            <main className='products-page'>
                <div className='products-list'>
                    {products}
                </div>
            </main>   
    
        );

    }

    return null;

}

export default All;

/*
let products = props.products.map(current => {
        return <Card item={current} key={current._id}/>;
    })
}*/

/*

<div className='company-banner'></div>
PRECISION IS A SERVICE 

Add some cool lines seperating shades of gray in the background
Or something to breakup the text

  */