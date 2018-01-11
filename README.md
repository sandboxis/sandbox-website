# Sandbox Website

The build system is based on [this repository]( https://github.com/actuallymentor/static-webpage-boilerplate-webpack-browsersync ).

Workflow:

1. Make html structure using [ pug ]( https://github.com/pugjs )
2. Write styling in [ Sass ]( https://github.com/sass/sass )
3. Write js in ES2015 compiled by [ Webpack ]( https://github.com/webpack )
4. Have an auto-refreshing browser preview using [ Browsersync ]( https://github.com/BrowserSync/browser-sync )

## Collaboration guide

Members are welcome to form this repository and submit pull requests. What you need to know:

| Element | Source | How to interact |
| ------- | ----- | ----------------- |
| Static pages | src/*.pug | Every pug file in the src/ folder becomes a page.|
| CSS/SASS | src/css/*.scss | The styles.scss is the main file that imports sub files |
| Javascript | src/js/main.js | You can add js directly or use npm style modules using ES2015 |

After making your local edits run the production build and push.

### Opening this website locally

Run the development environment:

```shell
git clone https://github.com/actuallymentor/sandbox-website.git
npm install
npm start # This will open the preview on your browser
```

Any changes you make to the code will be instantly reflected in the browser due to the browsersync integration.

To make the final build version:

```shell
npm run build
```

The final build version is compiled to the docs/ folder.

### About the member database

The member database is imported from mailchimp. You can't do this unless you have an API key to the account. If you do and want to update the members page:

```shell
npm run import-mailchimp
```

For this to work you need to have a .env file in the root of your repository filled with:

```shell
mcapikey=THE API KEY
mainlistid=THE ID OF THE MAIN LIST
mainlistname=NAME OF THE MAIN LIST
```

You shoudln't have to do do this however.