import Button from '../../styles/Button';
import { useCookies } from 'react-cookie';
import { useHistory } from 'react-router-dom';


const Single = (props) => {
    const [cookies, setCookies] = useCookies(['userCart']);
    const history = useHistory();
    
    const addToCart = () => {
        let userCart = cookies.userCart;
        let existingItems;
        
        if (userCart !== 'undefined') {
            existingItems = userCart;
        } else {
            existingItems = false;
        }

        if (existingItems) {
            // Add item to existing cookie
            existingItems.push(props.product._id)
            setCookies('userCart', userCart , {path: '/'})
        } else {
            // Create new cookie
            setCookies('userCart', [props.product._id], {path: '/'})
        }

        history.push('/store');
    }
    
    if (props.product) {
        return (
            <main className='single-page'>
                <Card className='single-article'>
                    <h1 className='product-header'>{props.product.name}</h1>
    
                    <img alt={props.product.img} className='single-image' 
                    src={`https://s3-us-west-1.amazonaws.com/hyfxi.ai-images/${props.product.img}`}></img>
    
                    <h2>price: $ {props.product.price}</h2>
                    <h3>{props.product.description} Hello!</h3>
                    
                </Card>
                <Button onClick={addToCart}>
                    Add To Cart
                </Button>
            </main>
        );
    }
    
    return null;

}

export default Single;

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

