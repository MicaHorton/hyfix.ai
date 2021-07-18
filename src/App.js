import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'

import Navbar from './components/Navbar.js'
import Promotion from './pages/Promotion.js'
import Company from './pages/Company.js'
import Applications from './pages/Applications.js'
import Network from './pages/Network.js'
import Technology from './pages/Technology.js'
import Contact from './pages/Contact.js'
import Privacy from './pages/Privacy.js'
import Footer from './components/Footer.js'

import StoreNavbar from './components/StoreNavbar.js'
import Products from './pages/store/Products.js'
import Single from './pages/store/Single.js'
import Cart from './pages/store/Cart.js'
import Checkout from './pages/store/Checkout.js'
import { getAllProducts } from './api.js'

const App = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getAllProducts()
            .then((products) => {
                setProducts(products)
            })
            .catch((err) => console.log(err))
    }, [])

    return (
        <Router>
            <Navbar path="/" />
            <Route path="/" exact component={Company} />
            <Route path="/company" exact component={Company} />
            <Route path="/promotion" exact component={Promotion} />
            <Route path="/applications" exact component={Applications} />
            <Route path="/network" exact component={Network} />
            <Route path="/technology" exact component={Technology} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/privacy" exact component={Privacy} />

            <Route path="/store" component={StoreNavbar} />
            <Route path="/store/checkout" exact component={Checkout} />

            <Route
                exact
                path="/store"
                render={(props) => {
                    console.log(products)
                    return <Products products={products} />
                }}
            />

            <Route
                path="/store/category"
                render={(props) => {
                    let category = props.location.search.split('?')[1]
                    let cproducts = products.filter(
                        (x) => x.metadata.category === category
                    )
                    return <Products products={cproducts} />
                }}
            />
            <Route
                path="/store/:id"
                render={(props) => {
                    let id = props.match.params.id
                    let product = products.filter((x) => x.id === id)[0]
                    return <Single product={product} />
                }}
            />
            <Route
                path="/store/cart"
                exact
                render={(props) => {
                    return <Cart products={products} />
                }}
            />

            <Footer path="/" />
        </Router>
    )
}

export default App
