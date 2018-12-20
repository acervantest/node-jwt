# node-jwt
Node and JWT(JSON Web Tokens), generate a token and use it to access a protected route

## Build
#### Prerequisites

- Node.js

#### From terminal

Go to your project root directory and type:

     npm install

## Run

- Open your client and send a post request to the route:
  '/api/login' to get a json web token
  
- Send a post request using the jwt in the auth header to the protected route:
  '/api/newpost'
