import React from 'react'
import { Link } from 'react-router-dom'

const Card = (props) => {
    return (
        <article>
            <Link
                to={{ pathname: '/store/' + props.item.id }}
                className="product-header"
            >
                {props.item.name}
            </Link>

            <Link
                to={{ pathname: '/store/' + props.item.id }}
                className="product-image-link"
            >
                <img
                    className="product-image"
                    alt="undefined"
                    src={`${props.item.images[0]}`}
                />
            </Link>

            <h2>
                price: $ {props.item.price.unit_amount.toLocaleString()} USD
            </h2>
            <h3>{props.item.description}</h3>
            <Link
                to={{ pathname: '/store/' + props.item.id }}
                className="read-more"
            >
                read more
            </Link>
        </article>
    )
}

export default Card

/*
<Link to='/store/all' className='logo' onClick={() => this.toggleOverlay()}>
    <img className='logo-mobile' src={full_logo} alt='logo'/>
    <img className='logo-web' src={icon_only} alt='logo'/>
</Link>
*/
