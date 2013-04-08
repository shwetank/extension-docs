---
layout: default-withsidebar
title: Browser Actions
copyright: opera-ccby
---

# Display buttons, popups and badges
By Shwetank Dixit

In the [architecture overview](Link to the architecture overview article), we covered the various UI elements of extensions in Opera. This consisted of *Page Actions* and *Browser Actions*.

In this article, we’ll get to see how to put these UI elements in your extension. 

Getting to display any of these UI elements on the browser is extremely simple. All you need to do is enter the necessary details in the extension manifest, and make sure you have the appropriate files ready in the extension package (like the icon files, popup.html files etc).

## Browser Actions

### Buttons:

To get to display a button, simply mention it in the extension manifest like so:

```
"browser_action": {    "default_icon": {                    // optional      "19": "images/icon19.png",           // optional      "38": "images/icon38.png"            // optional    },    "default_title": "My Sample Extension",      // optional; shown in tooltip  },
  ```
You can also [download our sample extension](Link to the extension) which has a very simple button being displayed.

### Popups:

To display a popup, you just need to make an html file (lets call it ‘popup.html’) which will be the web page displayed when the popup is opened. All you need to do is to mention this the extension manifest like so: 

```
"browser_action": {    "default_icon": {                    // optional      "19": "images/icon19.png",           // optional      "38": "images/icon38.png"            // optional    },    "default_title": "My Sample Extension",      // optional; shown in tooltip    "default_popup": "popup.html"        // optional  },
  ```
Go ahead and [download our sample extension](Link to the extension) which has a very simple popup being displayed.

### Badges:

Badges are small pieces of information located right next to a button. They often show supplementary information (for example, an extension for your email site might show the number of unread mails etc). 

Badges are supposed to show a very small amount of information, so they are limited to 4 characters or less. 

Lets see how to make a badge and set its text to update after a while.

Badges can be set using javascript in the background script (make sure to mention the background script in the extension manifest). There are two functions you need to be aware of :

`Chrome.browserAction.setBadgeBackgroundColor()` - This sets the background color of the badge

`Chrome.browserAction.setBadgeText()` - This sets the text of the badge

In our example, lets set the badge text as ‘Heya’ with a background color of red. In our background script, we will write:

`Chrome.browserAction.setBadgeBackgroundColor( color: \[255, 0, 0, 255]);	Chrome.browserAction.setBadgeText(“Heya”);`

Thats it! This is how you set a badge in your chrome extension. You can make it so that you update the badge after certain intervals of time, or after a certain action is performed. 


## Page Actions

Page actions are used to put icons inside the address bar in order for them to perform an action. This action should be relevant to the current visible page, but not necessarily to all the pages open in the browser.

Just like Browser Actions, you can make buttons and popups for Page Actions too, in pretty much the same way. However, it is not possible to have badges for Page Actions. 

### Buttons

To get to display a button, simply mention it in the extension manifest like so:

```
"page_action": {    "default_icon": {                    // optional      "19": "images/icon19.png",           // optional      "38": "images/icon38.png"            // optional    },    "default_title": "My Sample Extension",      // optional; shown in tooltip  },
``` 
### Popups:

To display a popup, you just need to make an html file (lets call it ‘popup.html’) which will be the web page displayed when the popup is opened. All you need to do is to mention this the extension manifest like so: 


```
"page_action": {    "default_icon": {                    // optional      "19": "images/icon19.png",           // optional      "38": "images/icon38.png"            // optional    },    "default_title": "My Sample Extension",      // optional; shown in tooltip    "default_popup": "popup.html"        // optional  },
```


## Displaying a Page Action

Page Actions are not displayed by default, unlike browser actions. You will need to explicitly show it using the `show()` function, and alternatively hide it using the `hide()` function. 

For this, you will also need to know the Tab ID of the current visible tab. Thus the code to show or hide the Page Actions should reside in the background script. For example, to only show Page Actions in URLs on www.opera.com, we would do something like this in the background script:

```
function checkValidURL(tabID, changeInfo, tab){	if (tab.url.indexOf(‘www.opera.com’)> -1){ // If it satisfies the criteria (the URL containing ‘www.opera.com’)		chrome.pageAction.show(tabID) // shows the page action		}}chrome.tabs.onupdated.addEventListener(checkValidURL);
```

Go ahead and [download the source for this extension](Link to the extension), to check out the code required for making it work.

**Next: Tabs and Windows**