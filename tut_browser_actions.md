---
layout: default-withsidebar
title: Browser Actions
copyright: opera-ccby
---

# Display buttons, popups and badges
By Shwetank Dixit

##Introduction

In the [architecture overview](Link to the architecture overview article), we covered the various UI elements that can be included in Opera extensions: these fall into two categories, *Page Actions* and *Browser Actions*.

In this article, we’ll get to see how to put these UI elements into action in an extension. 

Getting to display any of these UI elements on the browser is extremely simple. All you need to do is enter the necessary details (CHRIS - WOULD IT BE BETTER TO SAY "DECLARE THE NECESSARY PERMISSIONS" OR SOMETHING?) in the extension manifest, and make sure you have the appropriate functionality ready in the extension package (icon files, popup.html, background.js, etc).

## Browser Actions
First up, lets look at the different available browser actions. CHRIS - ADD DEFINITION OF WHAT BROWSER ACTIONS ARE, GENERALLY SPEAKING? MAKE IT CLKEAR HOW THEY DIFFERN FROM PAGE ACTIONS.

### Buttons

To display a button in the browser UI, we simply mention it in the extension manifest like so:

```
"browser_action": {    "default_icon": {                    // optional      "19": "images/icon19.png",           // optional      "38": "images/icon38.png"            // optional    },    "default_title": "My Sample Extension",      // optional; shown in tooltip  },
  ```
[Download our sample extension](Link to the extension) to see a very simple button example.

CHRIS - DON'T YOU WANT TO SHOW AN EXAMPLE OF THE CODE YOU NEED TO PUT IN BACKGROUND.JS TO ACTUALLY PLACE THE BUTTON AND SPECIFY ITS FUNCTIONALITY? ALSO, WHAT ABOUT EXPLAINING A BIT MORE ABOUT THE DIFFERN ICON SIZES YOU MIGHT NEED, AND WHERE THEY ARE USED WHEN INCLUDED? TO MY MIND, THIS COULD BE EXPANDED A LOT, POSSIBLY EVEN TURNED INTO ITS OWN ARTICLE.

### Popups

To create a popup, you just need to make an HTML file (lets call it ‘popup.html’) — which will be the popup's content upon opening — and then specify this in the extension manifest, like so: 

```
"browser_action": {    "default_icon": {                    // optional      "19": "images/icon19.png",           // optional      "38": "images/icon38.png"            // optional    },    "default_title": "My Sample Extension",      // optional; shown in tooltip    "default_popup": "popup.html"        // optional  },
  ```
[Download our sample extension](Link to the extension) to see a simple popup example in action.

CHRIS - AGAIN, FEELS LIKE IT NEEDS A LOT MORE DETAIL. SEPARATE ARTICLE?

### Badges:

Badges are small information displays that reside next to buttons in the browser UI, and can show supplementary information, for example an extension for your email site might show number of unread mails. 

Badges show a very small amount of information; they are limited to 4 characters or less. 

Lets see how to make a badge and set its text to update after a while.

1. Badges are declared in the extension manifest, and controlled using JavaScript in the background.js script. There are two functions you need to be aware of:

	* `Chrome.browserAction.setBadgeBackgroundColor()` sets the background color of the badge

	* `Chrome.browserAction.setBadgeText()` sets the text to be displayed on the badge

So for example, we could set the badge text as ‘Heya’, with a background color of red, as follows:

`Chrome.browserAction.setBadgeBackgroundColor( color: \[255, 0, 0, 255]);
	Chrome.browserAction.setBadgeText(“Heya”);`

You can set the badge to update after certain time intervals, or after a certain action is performed. 

CHRIS - PROVIDE LINK TO THE SAMPLE EXTENSION TO SHOW IT IN ACTION, ADD DETAILS ABOUT HOW TO MAKE THE EXTENSION UPDATE IN BOTH THE DIFFERENT WAYS, AND ADD SOME MORE DETAILS IN GENERAL? I CAN HELP WRITE SOME OF THE EXAMPLES, IF YOU LIKE; IT'LL BE A GOOD LEARNING EXERCISE FOR ME.


## Page Actions

Page actions are used to put icons inside the address bar in order for them to perform an action. This action should be relevant to the current visible page, but not necessarily to all the pages open in the browser.

Just like Browser Actions, you can make buttons and popups for Page Actions, in pretty much the same way, with some minor syntax differences. However, it is not possible to have badges for Page Actions. 

### Buttons

To display a button, simply mention it in the extension manifest like so:

```
"page_action": {    "default_icon": {                    // optional      "19": "images/icon19.png",           // optional      "38": "images/icon38.png"            // optional    },    "default_title": "My Sample Extension",      // optional; shown in tooltip  },
``` 
CHRIS - YOU COULD COMBINE THIS SECTION WITH THE BROWSER ACTIONS BUTTON SECTION, AND PUT IT IN A SEPARATE ARTICLE. SAME WITH THE POPUPS SECTIONS…


### Popups:

To display a popup for a Page Action, you again need to create an HTML file (lets call it ‘popup.html’), which will act as the popup's content upon opening. You need to declare the popup in the extension manifest like so: 


```
"page_action": {    "default_icon": {                    // optional      "19": "images/icon19.png",           // optional      "38": "images/icon38.png"            // optional    },    "default_title": "My Sample Extension",      // optional; shown in tooltip    "default_popup": "popup.html"        // optional  },
```


## Displaying a Page Action

Page Actions are not displayed by default, unlike browser actions. You need to explicitly show them using the `show()` function when desired, and hide them again using the `hide()` function. You will also need to know the Tab ID of the current visible tab: `show()` and `hide()` take this as an argument to specify the exact Tab(s) the Page Action should be displayed along with. CHRIS - IS THIS WORDING OK?

The code to show or hide the Page Actions should reside in the background script. For example, to only show Page Actions in URLs pointing to the www.opera.com domain, we would do something like this in the background script:

```
function checkValidURL(tabID, changeInfo, tab){	if (tab.url.indexOf(‘www.opera.com’)> -1){ // If it satisfies the criteria (the URL containing ‘www.opera.com’)		chrome.pageAction.show(tabID) // shows the page action		}}chrome.tabs.onupdated.addEventListener(checkValidURL);
```

Go ahead and [download the source for this extension](Link to the extension), to check out the code required for making it work.

CHRIS - A SUMMARY MIGHT BE NICE. ALSO, I TAKE IT FROM THE BELOW LINE THAT YOU ARE PLANNING TO PROVIDE LINKS TO THE NEXT AND PREVIOUS ARTICLES IN THE SERIES? I HEARTILY APPROVE - THIS IS A COOL IDEA.

**Next: Tabs and Windows**