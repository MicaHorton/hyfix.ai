
# Solved Bugs

- Image height has to be set to auto. Otherwise, text will run over it and it won't be part of normal flow on mobile.
- NPM Deploy Error. Just run NPM install to update package.json file

# Design Questions

- Should I center the text on web like I did on mobile?
- Also, maybe I should visually center things by making them a little higher than usual (that should be baked into css protocol)?
# Notes

<https://1uzsz611cb.execute-api.us-west-1.amazonaws.com/latest/products>

## To-Do For Today


+ Fix checkout form on mobile
+ Fix navbar on mobile
- Fix checkout form on desktop

+ Add images from example material
+ Add example descriptions
- Add metadata to requests

- Fix checkout button
- Fix multiple only working on localhost error

## Unsolved Bugs

- So werid: state of image won't change unless uploaded twice?

## Solved Bugs

- Image height has to be set to auto. Otherwise, text will run over it and it won't be part of normal flow on mobile.
- NPM Deploy Error. Just run NPM install to update package.json file
- Different deployed version renders different from local. Clear cache. Possibly install extension to fix this.
- Categories not fetched on mobile. Need to use deployed api, not localhost.
- Claudia.js internal server error. Bcrypt package had operating system/versioning problems (resulting in invalid elf headers), use bcrypt.js
- Array that has data as a whole, but each piece is undefined. Console.log updates multi-part objects after the fact, but not primitive data types

## Design Contemplations

- I should make API a subdomain of hyfix and not have to deal with CORS. also, ssl?
- Should I implement max-length or some kind of data sanitization for the MongoDB thing?
- Also, I should probably tighten up the ip address rules.
- Also, setup better logs.
- I should use Redux and Ant Design (or some other prebuilt components thing) the next project.

- Should I center the text on web like I did on mobile? Yes
- Size of the images and amount of information: should there be a seperate product page?
Rectangle image, square thingo

- Also, maybe I should visually center things by making them a little higher than usual (that should be baked into css protocol)?
- Are the categories mutually exclusive? Yes they are.
- Also, do categories change a lot, need to be dynamic? NO.

## About MERN

- API
  - REST: web type one
  - SOAP: other one

How To Structure (!!)
<https://stackoverflow.com/questions/51126472/how-to-organise-file-structure-of-backend-and-frontend-in-mern>

Subdomain vs Subdirectory
<https://theguidex.com/subdomain-vs-subdirectory/>

Lifting State Up
<https://reactjs.org/docs/lifting-state-up.html>

Named vs Default Export
<https://blogreact.com/named-export-vs-default-export/>

## Payment Modules

POWR
<https://www.powr.io/pricing>

Shoppify vs Magneto
<https://www.bigcommerce.com/blog/shopify-vs-magento-vs-bigcommerce/#pricing>

OpenCart
<https://www.opencart.com/>

Stripe
<https://stripe.com/>

Stripe Alternatives
<https://beebom.com/best-stripe-alternatives/>

- Ayden: need a minimum of 1000 transactions elsewise big fed
- Amazon Payments: maybe a better alternative?

AWS, React, Stripe Tutorial
<https://www.youtube.com/watch?v=JgwI22y_eFA>

setup basic MongoDB backend
setup frontend product filtering
connect to Stripe for payments

### Stripe

Stripe.js Docs
<https://stripe.com/docs/stripe-js>

Stripe Checkout vs. Stripe.js
<https://alligator.io/react/payments-stripe-checkout-react/>

Stripe Elements
<https://www.mitrahsoft.com/index.cfm/blog/Stripe-Payment-API-Using-ReactJS-NodeJS>

Fast Forms
<https://codenebula.io/node.js/stripe/2020/03/03/how-to-set-up-a-basic-node-application-with-stripe/>

Stripe Checkout
<https://www.section.io/engineering-education/stripe-integration-react/>

## Deployement

Claudia
Serverless
AWS SAM

API Url
<https://zsvumedjri.execute-api.us-east-2.amazonaws.com/latest>

Deploy Express API with Claudia
<https://medium.com/@johndyer24/simple-steps-to-deploy-an-express-server-to-aws-lambda-with-claudia-js-26c25f8745b5>

Claudia Docs
<https://www.claudiajs.com/documentation.html>

## Images

<https://codedec.com/tutorials/image-uploading-to-mongodb-in-nodejs/>

<https://www.youtube.com/results?search_query=mern+images>

Bookstore Code
<https://github.com/mjzone/bookstore-v2/tree/master/src>

No Voice Tutorial
<https://github.com/Mohammed-Abdelhady/MERN-Uload-Image>

Video, No Code Tutorial
<https://www.youtube.com/watch?v=dapS3HkX3Wc>

## Categories

- Boards (3-5)
- INS Systems (3-5)
- Survey Systems (3-5)

## Cart Information

- amazon does use cookies when not logged in
- but if logged in, will remember cart even if cleared
- actually appears to store sesion id in cookies. fuck I DON"T KNOW

- client side methods
  - cookies
  - localstorage
  - session storage

- server side methods
  - session storage
  
## Refactoring

- move to api
- also change component names to double capital
- change all names to product instead of sometimes product sometimes item

if i were to redo this:

- use antdesign
- also use stripe as backend maybe

## Inspiration

<https://mall.qxwz.com/market/skzn?items=%3B0qdjjrrg6yj%3A0RflnGmbJu0%2C0RflnPwKh1e%3B0qdjjrrg6yh%3A0RflmE8AlX2>

## New Tools To Use
Admin Panel
https://blog.logrocket.com/admin-panel-with-react/

Pupetter
https://pptr.dev/