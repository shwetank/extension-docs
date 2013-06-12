# Extensions documentation

This is a repo for Opera's totally revamped extensions documentation, which lives on http://dev.opera.com/extension-docs/

# Behind the scenes

There's HTML, Markdown, jQuery, Bootstrap and Jekyll.

To generate the site:

1. install jekyll `$ gem install jekyll` (might need `sudo`)
2. clone this repo
3. navigate to the directory with terminal, and type `jekyll serve`. If you want to auto-generate the whole site every time you save a file, type `jekyll serve --watch`
4. open a browser, and go to http://localhost:1337/ (generated files live in _site)


# YAML front matter details:

* `layout: default-withsidebar | default-noh1-withsidebar | default-withoutsidebar`
* `title: TITLE` TITLE should be the actual title of the article
* `author: AUTHOR` AUTHOR can be any author name mentioned in _config.yml
* `hattip: HATTIP` HATTIP can be any mention or sentence, e.g. "thanks to my dear colleague Chris for the JS wizardry!"
* `copyright: opera-ccby | opera-google-ccby`
* `originalsource: ORIGINALSOURCE` ORIGINALSOURCE should be a link to the original version of the document