---
layout: default-withsidebar
title: Tab and Window Handling 
copyright: opera-ccby
---

# Working with Tabs and Windows
*By Shwetank Dixit*

The Opera Extensions APIs give a lot of power to you when it comes to manipulating windows and tabs of the browser. In this article, we’ll take a deeper look on how to manipulate windows and tabs in extensions.

## Tabs
The ability to manipulate tabs is one of the basic, yet one of the most powerful and useful things in extensions. The [Tabs and Windows API guide](#) provides a detailed overview of the methods and events associated with it. 

First you need to mention that you need to work with Tabs in the *‘permission’* field in the extension manifest, like so:


	{
	  ...
	  "permissions": ["tabs"],
	  ...
	}


### Creating a new tab
One of the most common things to do with tabs in extension, is to create a new tab. This is done using the `create()` method. In this method, you can specify the properties of the tab you want to create (for example, the URL, whether it should be an active tab, whether it should be a pinned tab or not, etc). 

For example, to create a an extension which opens up a new pinned tab on the press of a button, you will need to add this to the background.js file 

	chrome.browserAction.onClicked.addListener(function() {
	  chrome.tabs.create({'url': ‘http://www.opera.com’,'pinned': true});
	});


You can [download the sample extension](#) to take a better look.

### Getting hold of the current tab
You can get hold of the currently active tab, and its properties via the `query()` method. In particular, you will need to employ something like this:

	chrome.tabs.query({currentWindow: true, active: true}, function(tab)  …

Lets create an extension, which on the click of a button, will take the current URL and open a new tab where it will run the URL through the WAVE accessibility evaluation tool. 


	chrome.browserAction.onClicked.addListener(function() {
	    chrome.tabs.query({currentWindow: true, active: true}, function(tab) {
	        chrome.tabs.create( { "url": "http://wave.webaim.org/report?url=" +tab[0].url } );
	    });
	});

You can [download this extension](#), and play with the code further.

### Modifying existing tabs
You can modify existing tabs using the `update()` method. You can change the URL of tabs, make them active, highlight them, or even pin them. This, combined with the `query()` method, gives you a lot of power over what all types of tabs you can change and in what way.

For example, lets take a look at an extension where we would like to pin all the tabs which belong to Opera.com (including subdomains).

In the background.js, we will write:


	var pattern = "http://*.opera.com/*"; // This pattern will match all tabs which are on opera.com

	chrome.browserAction.onClicked.addListener(function() {
	    chrome.tabs.query({'currentWindow': true, 'url': pattern}, function(tab) { // This will match all tabs to the pattern we specified
	        for (var i=0; i<tab.length; i++){ // Go through all tabs which match the URL pattern
	        	chrome.tabs.update(tab[i].id, {'pinned': true}); // Pinn those tabs
	        }
	        
	    });
	});

 You can [download the sample extension](#) with the above code. 

### Closing, reloading and duplicating tabs
Closing, reloading and duplicating tabs are made possible using the `remove()`, `reload()` and `duplicate()` methods respectively. The important thing to note about these methods is that you do not necessarily need to mention the ‘tabs’ permission in the extension manifest in order to use them in the extension.

All three of these methods work in the same way. Lets take the example of us reloading a tab. The first thing to do would be to get hold of the current tab, after which we call the `reload()` method. So, in the background script we will write something like so:


	chrome.tabs.query({currentWindow: true, active: true}, function(tab){ // Get the current tab
		chrome.tabs.remove(tab[0].id); // Remove the tab
	});


You can use the `remove()` and `duplicate()` methods in exactly the same way. Take a look at a sample extension where we make use of all three methods to close, reload and duplicate the current tab.

There are more functions available in the [API guide for Tabs and Windows](#) in Opera extensions. Please do have a look for information on more methods.

## Windows

Windows are easy to create using the Tabs and Windows API guide. The first thing to do when working with windows is to mention it in the extension manifest. 


	{
	  ...
	  "permissions": ["tabs"],
	  ...
	}

**Note:** We have mentioned \[‘tabs’] in the manifest. This is *deliberate*. Working with windows and tabs are so closely inter-related that its better to just mention ‘tabs’ in the extension manifest, even in the case of windows.

Probably the most common use case for the Windows API would be to create a new window. Usually, when you would want to create a new window, you probably want to open a bunch of URLs in it. Going by this assumption, we’re going to be creating a sample extension which simply creates a window (a ‘private’ window in this case) and open a couple of links in it.

The most common and hence most important function to note, when it comes to windows, is the `create()` function. It simply allows us to create a new window, in exactly the way we want it. In this case, we want a new private window to open up, with a few links already opened in it.

We achieve this by writing the following in the background.js


	var URL_list = ['http://www.opera.com', 'http://www.wikipedia.org'];//The list of URLs to load in the new window

	chrome.browserAction.onClicked.addListener(function() {
	  chrome.windows.create({'url': URL_list,'incognito': true});
	});


You can [download the sample extension](#) showing the above functionality and play with the code yourself. 

**Next: Message Passing**