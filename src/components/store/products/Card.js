import React from 'react';
import { Link } from 'react-router-dom';

const Card = props => (
    <article>
        <Link to={{pathname: '/store/single/', hash: props.item._id}} 
              className='product-header'>{props.item.name}</Link>

        <Link to={{pathname: '/store/single/', hash: props.item._id}} className='product-image-link'>
            <img className='product-image' alt={props.item.img} 
            src={`https://s3-us-west-1.amazonaws.com/hyfxi.ai-images/${props.item.img}`} />
        </Link>
            

        <h2>price: ${props.item.price}</h2>
        <h3>{props.item.synopsis}</h3>
        <Link to={{pathname: '/store/single/', hash: props.item._id}} 
              className='read-more'>read more</Link>

        
    </article>
)

export default Card;

/*
<Link to='/store/all' className='logo' onClick={() => this.toggleOverlay()}>
                  <img className='logo-mobile' src={full_logo} alt='logo'/>
                  <img className='logo-web' src={icon_only} alt='logo'/>
                </Link>
*/