import axios from 'axios';

const getPublicStripeKey = options => {
  return axios.get('http://localhost:5000/payment/public-key')
  .then(res => {return res})
  .catch(err => {return err})
};

const getProductsInCart = productList => {
  return axios.get('http://localhost:5000/products/cart', {
    params: { 
      products: productList 
    }
  })
  .then(res => {
    return res.data;
  })
  .catch((err) => {
    return err
  });

};

const createPaymentIntent = products => {
  return axios.post('http://localhost:5000/payment/create-payment-intent', {
    products: products
  })
  .then(res => {
    return res.data.client_secret
  })
  .catch((err) => {
    return err
  });

};
  
const api = {
  createPaymentIntent: createPaymentIntent,
  getPublicStripeKey: getPublicStripeKey,
  getProductsInCart: getProductsInCart
};
  
export default api;
  