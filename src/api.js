import axios from 'axios'
// const base = 'http://localhost:5000/'
const base = 'https://api.hyfix.ai/'

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

export const getProductsByCategory = (category) => {
    return axios
        .get(base + 'products/category/' + category)
        .then((res) => {
            console.log('category res', res)
            return res.data
        })
        .catch((err) => {
            return err
        })
}

export const getSingleProduct = (productId) => {
    return axios
        .get(base + 'products/' + productId)
        .then((res) => {
            return res.data
        })
        .catch((err) => {
            return err
        })
}

export const getProductsInCart = async (productList) => {
    let product
    let fetchedProducts = []
    for (product in productList) {
        let fetchedProduct = await getSingleProduct(productList[product])
        fetchedProducts.push(fetchedProduct)
    }
    console.log(fetchedProducts)
    return fetchedProducts

    /*
    return axios.get(base + 'products/cart', {
        params: {
        products: productList
    }
    })
    .then(res => {
        console.log('cart response', res.data);
        return res.data;
    })
    .catch((err) => {
        return err
    });*/
}

// Payment
export const getPublicStripeKey = () => {
    return axios
        .get(base + 'payment/public-key')
        .then((res) => {
            return res
        })
        .catch((err) => {
            return err
        })
}

export const createPaymentIntent = (products) => {
    return axios
        .post(base + 'payment/create-payment-intent', {
            products: products
        })
        .then((res) => {
            console.log('payment intent', res)
            return res.data.client_secret
        })
        .catch((err) => {
            return err
        })
}
