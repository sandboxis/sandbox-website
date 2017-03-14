# Static Page Boilerplate using Webpack & Browsersync

<img height="50px" style="float: left;" alt="webpack" src="http://i.imgur.com/xz36f45.png" /> <img height="50px" style="float: left;" alt="browsersync" src="http://i.imgur.com/L5peje9.png" /> <img height="50px" style="float: left;" alt="pug" src="http://i.imgur.com/x4sHEg4.png" /> <img height="50px" style="float: left;" alt="sass" src="http://i.imgur.com/O9ikKdz.png" />


This repo sets up a development environment where you can happily edit your .pug, .scss and .js files while your development server automatically updates when you save.

Workflow:

1. Make html structure using [ pug ]( https://github.com/pugjs )
2. Write styling in [ Sass ]( https://github.com/sass/sass )
3. Write js in ES2015 compiled by [ Webpack ]( https://github.com/webpack )
4. Have an auto-refreshing browser preview using [ Browsersync ]( https://github.com/BrowserSync/browser-sync )

## Getting started

Basic usage:

```shell
git clone git@github.com:actuallymentor/static-webpage-boilerplate-webpack-browsersync.git
npm install
npm start # This will open the preview on your browser
```

To make the final build version:

```shell
npm run build
```

Note that the ``` assets/``` folder is copied from the source to public directory.

## Configuration

By default the folder containing the source files is ``` src/``` and the folder containing the compiled website is ``` public/```.

The pug files depend on a number of configuration options that can be found in ``` modules/config.js```:

```js
{
    // Identity variables used in pug templates
    identity: {
        title: "Website",
        desc: "Description of website",
        "logo": "logo.jpg"
    },
    // System vars managing some pug elements as well as file paths
    system: {
        public: __dirname + '/../public/',
        source: __dirname + '/../src/',
        url: process.env.local ? 'http://localhost:3000/' : 'https://www.liveurl.com',
        gverification: undefined,
        year: new Date().getFullYear()
    },
    // About the author. Change this to your own unless you went me to get credit for your page of course... <3
    author: {
        firstname: "Mentor",
        lastname: "Palokaj",
        email: "mentor@palokaj.co",
        twitter: "@actuallymentor",
        // facebook profile id, used for retargeting ad permissions
        facebook: "1299359953416544",
        url: "https://www.skillcollector.com/"
    },
    // Tracking codes
    track: {
        ga: "UA-XXXXXXXX-XX"
    }
}
```

In pug this configuration object is passed as ``` const site = require( config.js )```.

## SEO and Social

Every page currently requires you to specify a variable: ```page``` that contains the title and details for the current page. 

```js
const page = { title: 'Home', desc: 'Home page', published: '2017-01-01', url: '/', featuredimg: '/image.jpg' }
```

The pug template includes social sharing parameters in the header:

```pug
head
    meta( charset='utf-8' )
    meta( http-equiv="x-ua-compatible" content="ie=edge" )
    meta( name="viewport" content="width=device-width, initial-scale=1" )
    base( href=site.system.url )
    meta( name="robots" content="index,follow,noodp" )
    meta( name="googlebot" content="index,follow" )
    if site.system.gverification
        meta( name="google-site-verification" content=site.system.gverification )

    //- Regular meta tags
    title !{site.identity.title} - #{page.title}
    meta( name="description" content=site.identity.desc )

    //- Facebook tags
    meta( property="og:site_name" content=site.identity.title )
    meta( property="og:title" content=site.identity.title + ' - ' + page.title )
    meta( property="og:description" content=page.desc )
    meta( property="article:published_time" content=page.published)
    meta( property="og:type" content="article" )
    meta( property="og:url" content=page.url )
    meta( property="og:image" content=page.featuredimg)
    meta( property="fb:admins" content=site.author.facebook )
    meta( property="profile:first_name" content=site.author.firstname)
    meta( property="profile:last_name" content=site.author.lastname)


    //- Twitter tags
    meta( name="twitter:site" content=site.author.twitter )
    meta( name="twitter:title" content=site.identity.title + ' - ' + page.title )
    meta( name="twitter:description" content=page.desc)
    meta( name="twitter:image" content=page.featuredimg)
    meta( name="name=twitter:image:alt" content=page.title )
    meta( name="twitter:card" content=page.desc )

    //- DNS Prefetching
    link( rel="dns-prefetch" href="//www.google-analytics.com" )
    link( rel="dns-prefetch" href="//fonts.googleapis.com.com" )

    //- Temporarily hide body, this is undone by the app stylesheet
    style.
        body { display: none; }
    script( src=site.system.url + 'js/app.js' async)
```

The footer contains google's rich markup as ld+json:

```js
{
        "@context": "http://schema.org",
        "@type": "Article",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "#{page.url}"
        },
        "headline": "#{page.title}",
        "image": {
            "@type": "ImageObject",
            "url": "#{site.system.url}#{page.featuredimg}",
            "height": "696px",
            "width": "696px"
        },
        "datePublished": "#{page.published}",
        "dateModified": "#{page.updated}",
        "author": {
            "@type": "Person",
            "name": "#{site.author.firstname} #{site.author.lastname}",
            "url": "#{site.author.url}"
        },
        "publisher": {
            "@type": "Organization",
            "name": "#{site.identity.title}",
            "url": "#{site.system.url}",
            "logo": {
                "@type": "ImageObject",
                "url": "#{site.identity.logo}",
                "width": "60px",
                "height": "600px"
            }
        },
        "description": "#{page.desc}"
    }
```

