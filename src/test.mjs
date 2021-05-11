import { loadStripe } from '@stripe/stripe-js';
require('dotenv').config();

console.log(process.env.STRIPE_PUBLIC_KEY);
const stripePromise = loadStripe(process.env.STRIPE_PUBLIC_KEY);