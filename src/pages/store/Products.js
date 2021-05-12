import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import Card from '../../components/ProductCard.js';

const Products = (props) => {
    if (props.products) {
        let products = props.products.map(current => {
            return <Card item={current} key={current.id}/>;
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

export default Products;
