This experiment is based on lectures provided by Stephen Grider, Viktor Pyskunov, and Lawrence Whiteside and with the example app provided by Viktor Pyskunov.

### `npm start`

Runs app in development mode.
Currently, this runs a webpack-dev-server on http://localhost:3001
and a Server-Side-Rendered version on http://localhost:3000.

Both are running in my attempt to have successfully implemented HMR
with my SSR development version to be like WDS.

### Current Issue

CSS saves successfully browser hot reloads; however, changes to jsx or any server saves result in errors and no auto refreshes.
