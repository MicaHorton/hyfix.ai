import React from 'react';
import { Link } from 'react-router-dom';

const Card = props => (
    <article>
        <Link to={{pathname: '/store/single/', hash: props.item._id}} 
              className='product-header'>{props.item.name}</Link>

        <div className='fake-image'></div>
        <h2>price: ${props.item.price}</h2>
        <h3>{props.item.description}</h3>
        
    </article>
)

export default Card;