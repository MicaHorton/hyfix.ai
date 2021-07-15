import Button from '../../styles/Button'
import { useCookies } from 'react-cookie'
import { useHistory } from 'react-router-dom'
import SingleCard from '../../styles/SingleCard'
import PageWrapper from '../../styles/PageWrapper'

const Single = (props) => {
    const [cookies, setCookies] = useCookies(['userCart'])
    const history = useHistory()

    const addToCart = () => {
        let userCart = cookies.userCart
        let existingItems

        if (userCart !== 'undefined') {
            existingItems = userCart
        } else {
            existingItems = false
        }

        if (existingItems) {
            // Add item to existing cookie
            existingItems.push(props.product.id)
            setCookies('userCart', userCart, { path: '/' })
        } else {
            // Create new cookie
            setCookies('userCart', [props.product.id], { path: '/' })
        }

        history.push('/store')
    }

    if (props.product) {
        return (
            <PageWrapper>
                <SingleCard>
                    <h1>{props.product.name}</h1>

                    <img
                        src={`${props.product.images[0]}`}
                        alt={props.product.img}
                    ></img>

                    <h2>
                        price: ${' '}
                        {props.product.price.unit_amount.toLocaleString()} USD
                    </h2>
                    <h3>{props.product.description}</h3>
                </SingleCard>
                <Button onClick={addToCart}>Add To Cart</Button>
            </PageWrapper>
        )
    }

    return null
}

export default Single

/*

<main className='single-page'>
                <article className='single-article'>
                    <h1 className='product-header'>{props.product.name}</h1>

                    <img alt={props.product.img} className='single-image'
                    src={`https://s3-us-west-1.amazonaws.com/hyfxi.ai-images/${props.product.img}`}></img>

                    <h2>price: $ {props.product.price}</h2>
                    <h3>{props.product.description} Hello!</h3>

                </article>
                <Button onClick={addToCart}>
                    Add To Cart
                </Button>
            </main>
*/
