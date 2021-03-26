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
- Are the categories mutually exclusive? Yes, they are.
- Also, do categories change a lot, need to be dynamic? NO.



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



## New Tools To Use
Admin Panel
https://blog.logrocket.com/admin-panel-with-react/

Pupetter
https://pptr.dev/