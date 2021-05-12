const CartCard = props => (
    <article className='cart-item'>
        <img className='cart-image' alt='undefined'
         src={props.product.images[0]}></img>
        <h1>{props.product.name}</h1>
        <h2>$ 200</h2>
    </article>
)

export default CartCard;