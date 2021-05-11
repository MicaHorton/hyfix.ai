import React from 'react';
import { Link } from 'react-router-dom';

const Card = props => {
    console.log(props.item);

    return (

    <article>
        <Link to={{pathname: '/store/' + props.item._id}} 
              className='product-header'>{props.item.name}</Link>

        <Link to={{pathname: '/store/' + props.item._id}} className='product-image-link'>
            <img className='product-image' alt='undefined'
            src={`${props.item.images[0]}`} />
        </Link>
            

        <h2>price: $200</h2>
        <h3>{props.item.description}</h3>
        <Link to={{pathname: '/store/' + props.item._id}} 
              className='read-more'>read more</Link>

        
    </article>)
}

export default Card;

/*
<Link to='/store/all' className='logo' onClick={() => this.toggleOverlay()}>
    <img className='logo-mobile' src={full_logo} alt='logo'/>
    <img className='logo-web' src={icon_only} alt='logo'/>
</Link>
*/