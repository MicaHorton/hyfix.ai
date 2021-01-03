import React, { Component } from 'react';
import { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useCookies } from 'react-cookie';
import {
  CardElement,
  Elements,
  useElements,
  useStripe
} from '@stripe/react-stripe-js';
import api from '../../api';


// Custom styling can be passed to options when creating an Element.
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

  const [error, setError] = useState(null);
  const [clientSecret, setClientSecret] = useState(null);
  const [cookies] = useCookies();

  const [metadata, setMetadata] = useState(null);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState(false);

  useEffect(() => {
    const productList = cookies.userCart;
    api.getProductsInCart(productList).then((products) => { 

      api.createPaymentIntent(products)
      .then((clientSecret) => {
        console.log('Payment intent success!')
        setClientSecret(clientSecret);
      })
      .catch((err) => {
        setError(err.message);
      });
    
    });

  }, []); //keeps hook to only once, intresting?

  const handleChange = (ev) => {
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
        },
      },
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
      console.log("[PaymentIntent]", payload.paymentIntent);
    }

    /*

    const card = elements.getElement(CardElement);
    const result = await stripe.createToken(card);

    if (result.error) {
      setError(result.error.message);
    } else {
      setError(null);
      // Send the token to your server.
      stripeTokenHandler(result.token);
    }*/

  };

  return (
    <form className='checkout-form' onSubmit={handleSubmit}>

      <div className='form-row'>
        <label htmlFor='card-element'>
          Credit or debit card
        </label>
        <CardElement
          id='card-element'
          options={CARD_ELEMENT_OPTIONS}
          onChange={handleChange}
        />
        <div className='card-errors' role='alert'>{error}</div>
      </div>

      <button className='button checkout-button' type='submit'>Submit Payment</button>

    </form>
  );
}

// POST the token ID to your backend.
/*
async function stripeTokenHandler(token) {
  const response = await fetch('/charge', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({token: token.id})
  });

  return response.json();
}*/

const stripePromise = loadStripe('pk_test_51I0CsSIzd0xoN2NEasujFfk8OIEYrwO5KrdT4fYAjUiQ8iJVP1fumZ3XGDf1XJq0Q3C9I0wlsQxbtYY2xRAvP2eZ0024wl5yqd');
const CheckoutPage = () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
}


export default CheckoutPage; 


