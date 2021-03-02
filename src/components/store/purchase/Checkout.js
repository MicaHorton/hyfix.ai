import React from 'react';
import { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useCookies } from 'react-cookie';
import {
    CardElement,
    Elements,
    useElements,
    useStripe
} from '@stripe/react-stripe-js';
import { getProductsInCart, createPaymentIntent} from '../../../api';
import { useHistory } from 'react-router';

const CARD_ELEMENT_OPTIONS = {
    style: {
        base: {
            color: '#32325d',
            fontFamily: '"Helvetica Neue" , Helvetica, sans-serif',
            fontSmoothing: 'antialiased',
            fontSize: '40px',
            '::placeholder': {
                color: '#aab7c4'
            }
        },
        invalid: {
            color: '#fa755a',
            iconColor: '#fa755a'
        }
    }
};

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const history = useHistory();

    const [error, setError] = useState(null);
    const [clientSecret, setClientSecret] = useState(null);
    const [cookies, removeCookie] = useCookies();

    const [setMetadata] = useState(null); // [metadata, setMetadata]
    const [setSucceeded] = useState(false); // [succeeded, setSucceeded] 
    const [setProcessing] = useState(false); // [processing, setProcessing]

    const [recipient, setRecipient] = useState(null);
    const [street, setStreet] = useState(null);
    const [city, setCity] = useState(null);
    const [theState, setTheState] = useState(null);
    const [code, setCode] = useState(null);
    const [country, setCountry] = useState(null);

    useEffect(() => {
        const productList = cookies.userCart;
        getProductsInCart(productList).then((products) => { 
            
            createPaymentIntent(products)
            .then((clientSecret) => {
                console.log('Payment intent success!')
                setClientSecret(clientSecret);
            })
            .catch((err) => {
                setError(err.message);
            });
        
        });

    }, [cookies.userCart]); //keeps hook to only once, intresting?

    const handlePaymentChange = (ev) => {
        if (ev.error) {
            setError(ev.error.message);
        } else {
            setError(null);
        }
    }

    const handleSubmit = async (ev) => {
        ev.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    name: ev.target.name.value,
                }
            },
            shipping: {
                name: recipient,
                address: {
                    line1: street, 
                    city: city,
                    state: theState,
                    country: country,
                    postal_code: code
                }
            }
        });

    
        if (payload.error) {
            setError(`Payment failed: ${payload.error.message}`);
            setProcessing(false);
            console.log("[error]", payload.error);
        } else {
            setError(null); 
            setSucceeded(true);
            setProcessing(false);
            setMetadata(payload.paymentIntent);
            history.push({ pathname: '/store/success'});
            removeCookie('userCart', { path: '/'});
            console.log("[PaymentIntent]", payload.paymentIntent)
        }

    };

    return (
        <main className='checkout-page'>
            <form className='checkout-form' onSubmit={handleSubmit}>
                <div className='form-section'>
                    <h2>Shipping</h2>

                    <label>Recipient Name</label>
                    <input value={recipient} onChange={e => setRecipient(e.target.value)}/>

                    <label>Street Address</label>
                    <input value={street} onChange={e => setStreet(e.target.value)} />

                    <label>City</label>
                    <input value={city} onChange={e => setCity(e.target.value)} />

                    <div className='double-input'>
                        <label>State</label>
                        <input value={theState} onChange={e => setTheState(e.target.value)} />

                        <label>Zip/Postal Code</label>
                        <input value={code} onChange={e => setCode(e.target.value)} />
                    </div>
                    

                    <label>Country</label>
                    <input value={country} onChange={e => setCountry(e.target.value)} />
                </div>

                <div className='form-section'>
                    <h2>Payment</h2>
                    <label htmlFor='card-element'>Credit or Debit Card</label>
                    <CardElement 
                        id='card-element' 
                        options={CARD_ELEMENT_OPTIONS} 
                        onChange={handlePaymentChange}/>
                    <div className='card-errors' role='alert'>{error}</div>
                </div>

                <button className='button checkout-button' type='submit'>Submit Payment</button>

            </form>
        </main>
        );
}

const stripePromise = loadStripe('pk_test_51I0CsSIzd0xoN2NEasujFfk8OIEYrwO5KrdT4fYAjUiQ8iJVP1fumZ3XGDf1XJq0Q3C9I0wlsQxbtYY2xRAvP2eZ0024wl5yqd');
const CheckoutPage = () => {
        return (
          <Elements stripe={stripePromise}>
            <CheckoutForm />
        </Elements>
    );
}

export default CheckoutPage; 


/* 4242 4242 4242 4242 */