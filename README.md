# Snowflame Example Apps

Small fixtures for testing workspace Serve.

## Examples

- `0-single-file-html` — publish `.`. One `index.html`.
- `1-html-js-css` — publish `.`. HTML with separate CSS and JS assets.
- `2-built-react-app` — publish `dist`. Already-built React-style static output.
- `3-unbuilt-react-app` — future build-mode fixture. Run `npm install` and `npm run build`, then publish `dist`.

These examples are meant to be imported as workspace files and then published from the workspace Serve settings.
