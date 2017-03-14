// Browser sync stuff
const BrowserSyncPlugin = require( 'browser-sync-webpack-plugin' )
const bs = require( 'browser-sync' )

// Webpack and css
const autoprefixer = require ( 'autoprefixer' )
const webpack = require( 'webpack' )

// Workflow
const pfs = require( __dirname + '/modules/parse-fs' )
const fs = require( 'fs' )

// Site config 
const site = require( __dirname + '/modules/config' )

// Conversions
const publishpug = require( __dirname + '/modules/publish-pug' )
const publishassets = require( __dirname + '/modules/publish-assets' )

// ///////////////////////////////
// Plugins
// ///////////////////////////////
let thebs
const servername = 'bsserver'
const bsconfig = {
  host: 'localhost',
  open: true,
  port: 3000,
  server: { 
    baseDir: [ site.system.public ],
    serveStaticOptions: {
      extensions: ['html']
    }
  },
  notify: {
    styles:  [
    "display: none",
    "padding: 15px",
    "font-family: sans-serif",
    "position: fixed",
    "font-size: 0.9em",
    "z-index: 9999",
    "bottom: 0px",
    "right: 0px",
    "border-bottom-left-radius: 5px",
    "background-color: #1B2032",
    "margin: 0",
    "color: white",
    "text-align: center"
    ]
  }
}
const bsyncplugconfig = {
  name: servername,
  callback: f => { thebs = bs.get( servername ) }
}

const uglifyconfig = {
  compress: {
    warnings: false
  }
}

const envconfig = {
  'process.env': {
    NODE_ENV: JSON.stringify( 'production' )
  }
}


const pluginarray = ( env, server ) => {
  let plugins = []

  if ( env == 'production' ) {
    if ( server ) plugins.push( 
        new BrowserSyncPlugin( bsconfig, bsyncplugconfig )
    )
    plugins.push(
      new webpack.optimize.UglifyJsPlugin( uglifyconfig )
    )
    plugins.push(
      new webpack.DefinePlugin( envconfig )
    )
  } else {
    plugins.push(
      new BrowserSyncPlugin( bsconfig, bsyncplugconfig )
    )
  }

  return plugins
}

// ///////////////////////////////
// Watchers for non webpack files
// ///////////////////////////////

// Initial build
  Promise.all( [
    publishpug( site ),
    publishassets( site )
  ] ).then( f => { if ( process.env.debug ) console.log( 'Initial build done' ) } )

// Watch for pug file changes
const towatch = [ 'pug' ]

if ( process.env.NODE_ENV == 'development' ) fs.watch( site.system.source, ( eventType, filename ) => {
  if ( eventType != 'change' || filename.indexOf( towatch ) == -1 ) return
  if ( process.env.debug ) console.log( 'It is a pug file' )
  // Delete old build and generate pug files
  return publishpug( site ).then( f => { if ( process.env.debug ) console.log( 'Repeat build done' ); thebs.reload( ) } ).catch( console.log.bind( console ) )
} )

// Watch for asset changes
if ( process.env.NODE_ENV == 'development' ) fs.watch( site.system.source + 'assets/', ( eventType, filename ) => {
  if ( eventType != 'change') return
  if ( process.env.debug ) console.log( 'It is an asset file' )
  // Delete old build and generate pug files
  return publishassets( site ).then( f => { if ( process.env.debug ) console.log( 'Repeat assets done' ); thebs.reload( ) } ).catch( console.log.bind( console ) )
} )

const maps = env => {
  if( env == 'production' ) {
    return 'cheap-module-source-map'
  } else {
    return 'eval'
  }
}

module.exports = {
  entry: site.system.source + 'js/main.js',
  output: {
    filename: site.system.public + 'js/app.js'
  },
  module: {
    loaders: [
    {
      test: /\.js$/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015']
      }
    },
    {
      test: /\.scss$/,
      loaders: ["style", "css", "sass", "postcss"]
    }
    ]
  },
  devtool: maps( process.env.NODE_ENV ),
  postcss: [
  autoprefixer( { browsers: ['last 2 versions'] } )
  ],
  plugins: pluginarray( process.env.NODE_ENV, process.env.server )
}