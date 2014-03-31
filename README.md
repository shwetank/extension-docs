# Extensions documentation

This is a repo for Opera’s completely revamped extensions documentation for Opera 15+, which lives on <http://dev.opera.com/extension-docs/>.

# Behind the scenes

There’s Grunt, Jekyll, jQuery, Bootstrap, Bootswatch Cosmo, prettify.js, Google CSE.

## Getting started

1. Install Jekyll using `gem install jekyll` (might need `sudo`)
2. Clone this repository and navigate to the directory in your terminal.
3. Run `npm install` to install Grunt and other dependencies.

## Using Grunt

* Run `grunt build` to build the site using Jekyll. The result is placed in the `_site` folder.
* Run `grunt deploy` to deploy the `_site` folder to the production server.

## Using Jekyll directly

1. Enter `jekyll serve`. If you want to auto-generate the whole site every time you save a file, type `jekyll serve --watch`.
2. Open your favorite browser, and go to `http://localhost:1337/` (generated files live in `_site`).

# YAML front matter details

* `layout: default-withsidebar | default-noh1-withsidebar | default-withoutsidebar`
* `title: TITLE` TITLE should be the actual title of the article
* `support: VERSION` VERSION should be the browser version from which the API or functionality is supported
* `author: AUTHOR` AUTHOR can be any author name mentioned in _config.yml
* `copyright: opera-ccby | opera-google-ccby`
* `originalsource: ORIGINALSOURCE` ORIGINALSOURCE should be a link to the original version of the document
