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

### Tests

Go to `testing` branch with `git checkout testing`, after cloning repo.

`npm run test` will run and watch all current tests.

`enzyme` and `enzyme-adapter-react-16` are used with `jest`.
All tests are from Stephen Grider's "Advanced React and Redux: 2018 Edition" course AND Bonnie Schulkin's
"2019 Update! React Testing with Jest and Enzyme".

### Current Issue

Client side saves successfully have HMR; however, any changes to the server code require that the program be terminated and then restarted again in order to have the changes executed. I've read that nodemon and webpack do not work well together, and through hours of pain, I can confirm that. I've seen, but have yet to try, `nodemon-webpack-plugin`. I'll look more into it and see if I have any success there.
