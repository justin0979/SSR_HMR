## One setup for a React Server-Side-Rendering dev environment

Ever since learning about SSR, I've been wanting to have my saves automatically applied. I found a lot of outdated material
(all of which needed too many changes after running `npm i` and either didn't work or resulted in css or jsx changes not being
applied when javascript is turned off in the browser, FYI css/jsx saves with js turned off still does not save, have yet to figure that one out).

The SSR code is based on Stephen Grider's lectures about SSR with changes made to allow for HMR. After reading several
blogs, watching numerous lectures repeatedly, and getting help from Viktor Pyskunov, I was able to finally comprehend the
documentation from webpack-dev-middleware, webpack-hot-middleware, react-hot-loader and several other needed doc's. The HMR code is in `/server/index.js` and looks mostly like what the doc's showed in 2019.

I've only tried this in Chrome.

### To use a more basic setup copy and paste in terminal:

```sh
git clone --branch base-setup --single-branch --depth 1 git@github.com:justin0979/SSR_HMR.git
```

This base-setup branch does not contain the following:

- axios
- react-redux
- react-router-config
- react-router-dom
- redux
- redux-thunk
- serialize-javascript

### `npm i && npm start`

Runs app in development mode.
App runs on port 3000.

### Some Config

If someone wants to mess around with their own absolute/relative routes, I've just implemented that using the `babel.config.js` >> `plugins` >> `module-resolver` >> `alias`. Just make any changes to the naming scheme.
I read that using anything other than `@` is common practice (i.e. `#components`, or using `%`, `&`, etc); but, I've left off the `#` and haven't run into any naming issues (if using `webpack.config.js` for my absolute paths, I've used the `resolve.modules` and all direct children of `src` are used). I've started using `#` to name directories in root and `&` for sub-directories of `src` or `server`; however, I may not have gone through all of the branches to update this route naming scheme. With webpack, to get to `/src/components/Home.jsx` I'd just use something like `import Home from 'components/Home' with no issues.

I just put some sass in `/src/client/sass/main.scss`. It's really disorganized. Adding Bulma or materialize-css is easy with either npm or cdn.

### Tests

(I haven't finished all of the testing courses, so this section is incomplete)

Go to `testing` branch with `git checkout testing`, after cloning repo.

`npm run test` will run and watch all current tests.

`enzyme` and `enzyme-adapter-react-16` are used with `jest`.
All tests are from Stephen Grider's "Advanced React and Redux: 2018 Edition" course AND Bonnie Schulkin's
"2019 Update! React Testing with Jest and Enzyme".

### Current Issue

Client side saves successfully have HMR; however, any changes to the server code require that the program be terminated and then restarted again in order to have the changes executed. I've read that nodemon and webpack do not work well together, and through hours of pain, I can confirm that. I've seen, but have yet to try, `nodemon-webpack-plugin`. I'll look more into it and see if I have any success there.

After experimenting a while with moving `index.js` to `server.js` and adding

```javascript
require('@babel/register')
require('./server')
```

and adding the script `nodemon --watch server server` to `package.json`, I had some success with server not crashing when JSX or server code was changed and saved. CSS changes were only applied with using `style-loader`. I attempted to use an external CSS file but could not get CSS saves to hot-reload. Also, the images were giving an error of not being able to find the module it was (in React component `HomePage.jsx`). Adding `require('./public/style.css')` to `index.js` just added errors.

Browser needed manual refresh when server code was changed and saved. Overall, not the ideal dev environment I'm trying to get. For now, I'll keep what I have and just restart the server when server code is changed (which will be often with addition of database).
