---
layout: default-withsidebar
title: Browser Actions
copyright: opera-ccby
---

# Display buttons, popups and badges
By Shwetank Dixit

##Introduction

In the [architecture overview](http://sample.com/index.html), we covered the various UI elements that can be included in Opera extensions: these fall into two categories, *Page Actions* and *Browser Actions*.

In this article, we’ll get to see how to put these UI elements into action in an extension. 

Getting to display any of these UI elements on the browser is extremely simple. All you need to do is enter the necessary details (CHRIS - WOULD IT BE BETTER TO SAY "DECLARE THE NECESSARY PERMISSIONS" OR SOMETHING?) in the extension manifest, and make sure you have the appropriate functionality ready in the extension package (icon files, popup.html, background.js, etc).

## Browser Actions
First up, lets look at the different available browser actions. CHRIS - ADD DEFINITION OF WHAT BROWSER ACTIONS ARE, GENERALLY SPEAKING?

### Buttons

To display a button in the browser UI, we simply mention it in the extension manifest like so:

<pre class="prettyprint">"browser_action": {
  "default_icon": {                          // optional
    "19": "images/icon19.png",               // optional
    "38": "images/icon38.png"                // optional
  },
  "default_title": "My Sample Extension",    // optional; shown in tooltip
},</pre>

[Download our sample button extension](http://sample.com/index.html) to see a very simple button example.

CHRIS - DON'T YOU WANT TO SHOW AN EXAMPLE OF THE CODE YOU NEED TO PUT IN BACKGROUND.JS TO ACTUALLY PLACE THE BUTTON AND SPECIFY ITS FUNCTIONALITY? ALSO, WHAT ABOUT EXPLAINING A BIT MORE ABOUT THE DIFFERN ICON SIZES YOU MIGHT NEED, AND WHERE THEY ARE USED WHEN INCLUDED? TO MY MIND, THIS COULD BE EXPANDED A LOT, POSSIBLY EVEN TURNED INTO ITS OWN ARTICLE.

### Popups

To create a popup, you just need to make an html file (lets call it ‘popup.html’) which will be the web page displayed when the popup is opened. All you need to do is to mention this the extension manifest like so: 

<pre class="prettyprint">"browser_action": {
  "default_icon": {                          // optional
    "19": "images/icon19.png",               // optional
    "38": "images/icon38.png"                // optional
  },

  "default_title": "My Sample Extension",    // optional; shown in tooltip
  "default_popup": "popup.html"              // optional
},</pre>

Go ahead and [download our sample extension](http://sample.com/index.html), which has a very simple popup being displayed.

### Badges:

Badges are small pieces of information located right next to a button. They often show supplementary information (for example, an extension for your email site might show the number of unread mails etc). 

Badges are supposed to show a very small amount of information, so they are limited to 4 characters or less. 

Lets see how to make a badge and set its text to update after a while.

Badges can be set using javascript in the background script (make sure to mention the background script in the extension manifest). There are two functions you need to be aware of :

`Chrome.browserAction.setBadgeBackgroundColor()`: This sets the background color of the badge

`Chrome.browserAction.setBadgeText()`: This sets the text of the badge

In our example, lets set the badge text as ‘Heya’ with a background color of red. In our background script, we will write:

`Chrome.browserAction.setBadgeBackgroundColor( color: \[255, 0, 0, 255]);	Chrome.browserAction.setBadgeText(“Heya”);`

Thats it! This is how you set a badge in your chrome extension. You can make it so that you update the badge after certain intervals of time, or after a certain action is performed. 


## Page Actions

Page actions are used to put icons inside the address bar in order for them to perform an action. This action should be relevant to the current visible page, but not necessarily to all the pages open in the browser.

Just like Browser Actions, you can make buttons and popups for Page Actions too, in pretty much the same way. However, it is not possible to have badges for Page Actions. 

### Buttons

To get to display a button, simply mention it in the extension manifest like so:

<pre class="prettyprint">"page_action": {
  "default_icon": {                          // optional
    "19": "images/icon19.png",               // optional
    "38": "images/icon38.png"                // optional
  },
  "default_title": "My Sample Extension",    // optional; shown in tooltip
},</pre>
 
### Popups:

To display a popup, you just need to make an html file (lets call it ‘popup.html’) which will be the web page displayed when the popup is opened. All you need to do is to mention this the extension manifest like so: 

<pre class="prettyprint">"page_action": {
  "default_icon": {                          // optional
    "19": "images/icon19.png",               // optional
    "38": "images/icon38.png"                // optional
  },
  "default_title": "My Sample Extension",    // optional; shown in tooltip
  "default_popup": "popup.html"              // optional
},</pre>

## Displaying a Page Action

Page Actions are not displayed by default, unlike browser actions. You will need to explicitly show it using the `show()` function, and alternatively hide it using the `hide()` function. 

For this, you will also need to know the Tab ID of the current visible tab. Thus the code to show or hide the Page Actions should reside in the background script. For example, to only show Page Actions in URLs on www.opera.com, we would do something like this in the background script:

<pre class="prettyprint">  function checkValidURL(tabID, changeInfo, tab){
    if (tab.url.indexOf(‘www.opera.com’)> -1){ // If it satisfies the criteria (the URL containing ‘www.opera.com’)
    chrome.pageAction.show(tabID) // shows the page action
  }
}

chrome.tabs.onupdated.addEventListener(checkValidURL);</pre>

Go ahead and [download the source for this extension](http://sample.com/index.html), to check out the code required for making it work.

**Next: Tabs and Windows**