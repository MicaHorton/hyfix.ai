import React from 'react';
import { Link } from 'react-router-dom';

const Card = props => (
    <article>
        <Link to={{pathname: '/store/single/', hash: props.item._id}} 
              className='product-header'>{props.item.name}</Link>

        <img className='product-image' alt={props.item.img} src={`https://s3-us-west-1.amazonaws.com/hyfxi.ai-images/${props.item.img}`}></img>
        <h2>price: ${props.item.price}</h2>
        <h3>{props.item.synopsis}</h3>
        
    </article>
)

export default Card;