# Extensions documentation

This is a repo for Opera's totally revamped extensions documentation.

# Behind the scenes

There's HTML, Markdown, jQuery, Bootstrap and Jekyll.

To generate the site:

1. install jekyll `$ gem install jekyll` (might need `sudo`)
2. clone this repo
3. navigate to the directory with terminal, and type `jekyll`
4. open a browser, and go to http://localhost:1337/ (generated files live in _site)

# YAML front matter details:

* `layout: default-withsidebar | default-noh1-withsidebar | default-withoutsidebar`
* `title: *custom string*`
* `author: *any author name mentioned in _config.yml*`
* `hattip: *include any text string, e.g. thanks to my dear colleague Chris for the JS wizardry!*`
* `copyright: opera-ccby | opera-google-ccby`
* `originalsource: *URL to original source*`