## One setup for a React Server-Side-Rendering dev environment 

Ever since learning about SSR, I've been wanting to have my saves automatically applied. I found a lot of outdated material
(all of which needed too many changes after running `npm i` and either didn't work or resulted in css or jsx changes not being
applied when javascript is turned off in the browser). 

The SSR code is based on Stephen Grider's lectures about SSR with changes made to allow for HMR. After reading several 
blogs, watching numerous lectures repeatedly, and getting help from Viktor Pyskunov, I was able to finally comprehend the
documentation from webpack-dev-middleware, webpack-hot-middleware, react-hot-loader and serveral other needed doc's.

I've only tried this in Chrome.
### `npm start`

Runs app in development mode.
App runs on port 3000.

### Current Issue

So far, no issues are occuring with HMR in this development envrionment.
