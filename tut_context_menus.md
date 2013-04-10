---
layout: default-withsidebar
title: Working with the context menu
author: shwetankdixit
copyright: opera-ccby
---

This article will describe how to use the `chrome.contextmenus.*` methods and events to manipulate the browser's context menu

## What is the context menu?
Usually, when you right-click on something in a web page in your browser, a certain menu pops up. This is called the context menu. You can often also bring this up using keyboard shortcuts (these vary depending on the platform). Using the Context Menu API, we can add and manipulate items in this menu and have it perform actions. We can even restrcit it to certain types of media. For example, we can specify that a context menu item is there only if someone right-click's on an image and not when someone right-click's on some other media type (like a video).

## Declare it in the manifest
The first thing to do when working with the context menu, is to declare it in the extension manifest file. We'll use the *contextMenus* keyword in the *permissions* key to declare our intention to use it.

It is also recommended to have a 16x16 icon next to the context menu item, and thus define that in the manifest. The manifest would look like: 

<pre class="prettyprint">
	{
	  "name": "Context Menu Extension",
	  ...
	  "permissions": [
	    "contextMenus"
	  ],
	  "icons": {
	    "16": "icon-small.png",
	  ...
	  },
	  ...
	}
</pre>

## Creating a context menu item
You can create a context menu item by calling the `create()` function. A required parameter of this function is an object, which will detail which kind of context menu item we want to create. 

Lets for example, create a context menu item which will only turn up if a user has highlighted some text, and upon right-click, will ask the user to search the selected text on google. If that menu item is clicked, then a new tab will be opened where it will search the selected text on google.

In the background script, we will write:

<pre class="prettyprint">
	chrome.contextMenus.create({
		title: "Look up: %s",
		contexts: ["selection"],
		onclick: searchText
	});
</pre>

Note the presence of the *%s* there. This will make sure the highlighted text is mentioned in the menu item. For example, if we have selected the text "Opera for Android", then in the context menu item, the text will show "Look up: Opera for Android". 

We've also made sure to limit this to just selected text. When someone clicks on the menu item, the `searchtext()` will be fired. Just like *selection*, you have other types like *'image'*, *'video'*, *'page'*, *'link'*, *'editable'* (for form feilds) and more. If you want your menu to appear on all types of items, then use *'all'*. 

## Once a user clicks on the menu item
Once the user clicks on the menu item, you need the extension to do something. In our example, the function `searchtext()` will be called. The function will look like so:

<pre class="prettyprint">
function searchText(info){
	var myQuery = encodeURI("https://www.google.com/search?q="+info.selectionText);
	chrome.tabs.create({url: myQuery});
}
</pre>

The function will handle an '*info*' object of the type *OnClickData* - This basically means that this object will have a bunch of information of the thing you just clicked on. In our case, it will have information about the text we selected. We can get this by using `info.selectionText`. After that it is just a simple matter of creating a new tab and appending that query to google query URL.

You can [download the extension](#) described above and take a better look at the code. Also, you can [download another example](#) extension which handles a number of cases (links, the page, images) - this will familiarize you wih how to handle types of web objects in context menu extensions. 

**Next: Speed Dial Extensions**
