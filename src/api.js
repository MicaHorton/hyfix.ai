import axios from 'axios'
const base = 'http://localhost:5000/'
// const base = 'https://api.hyfix.ai/'

// Products
export const getAllProducts = async () => {
    return axios
        .get(base + 'products/')
        .then((res) => {
            return res.data
        })
        .catch((err) => {
            return err
        })
}

export const getProductsInCart = async (productList) => {
    const products = await getAllProducts()
    const productsInCart = products.filter(
        (product) => product.id in productList
    )
    return products
}

// Payment
export const getPublicStripeKey = async () => {
    const public_key = await axios
        .get(base + 'payment/public-key')
        .then((res) => {
            return res
        })
        .catch((err) => {
            return err
        })

    console.log(public_key)
}

export const createPaymentIntent = (products) => {
    return axios
        .post(base + 'payment/create-payment-intent', {
            products: products
        })
        .then((res) => {
            return res.data.client_secret
        })
        .catch((err) => {
            return err
        })
}
