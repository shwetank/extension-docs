---
layout: default-withsidebar
title: The basics of making an extension
copyright: opera-ccby
---

# Making your first Opera extension
*By Shwetank Dixit* 

Making extensions for Opera 14 and above is really easy. If you are already familiar with making chrome extensions, then you will right at home as Opera 14 (and above) are based on the chromium project, so will inherit their extensions architecture ([though its not exactly the same]).

For your first extension, we'll take a look at making a simple extenson which will add a button on the toolbar. Clicking on that button will open up a new tab and go to [Dev.Opera] - Its a simple extension to get your started.

## Step 1 - The extension manifest
The first step we'll take is to define the extension manifest. This is where we'll define the name of the extension, it's description, and other details like the author etc. 

Apart from that, there is another important aspect to extension manifests - we define what special permissions we need in order for the extension to run properly. In our case, we will be needing to create a new tabs, so working with tabs would be required, and this would need to be specified in the manifest. 

Extension manifests are written in the JSON format, so it will be familiar to most people who know javascript. Let's for now, just open up a text editor and write the following in a file and name is 'manifest.json'. 

```
{
  "manifest_version": 2,

  "name": "Opera Extensions - Getting Started",
  "description": "Sample extension for the 'Making your first extension' article. A button will be created in the toolbar, which upon being clicked, will open a new tab which goes to Dev.Opera",
  "version": "1.0",
  "background": {"scripts": ["background.js"]},

  "permissions": ["tabs"],
  "browser_action": {
    "default_icon": "icon.png",
    "default_title": "Go to Dev.Opera!"
  }
}
```

## Step 2 - The background script

The background script is a very important peice of an extension. Anything to do with UI elements in the browser need to written in the background script. In our case, we'll be working with tabs, so we will be using methods from the Tabs API in our script. You'll read more about working with tabs later on. For now, create a file named 'background.js' in your extension directory, and enter the following

```
chrome.browserAction.onClicked.addListener(function() {
    chrome.tabs.query({currentWindow: true, active: true}, function(tab) {
        chrome.tabs.create( { "url": "http://dev.opera.com" } );
    });
});
``` 

## Step 3 - Icons and other files
You'll need an icon to represent the button on the toolbar. We would recommend the icon to be **--Insert the recommended size for icons--**. 

## Step 3 - Test it out
Okay, time to test out your extension. As a developer making your own extension, you don't need to pack it all up into a container format just to test things out. You can test your extension straight from the directory. 

** --- The following is not ready yet, so this will probably change: ---** 

1. Just go to '*Tools->Extensions->Manage Extensions*' where you will see a page where you can manage all your extensions. 
2. Check the checkbox for '*Developer Mode*'. 
3. Now click on the button '*Load unpacked extension*'
4. Select the directory where the files are for your extension

Thats it! Your extension should be loaded in 'Developer Mode'. This mode gives you more power as a developer as it gives you the ability to inspect various parts of the extension using the developer tools inbuilt in the browser.

If all goes well, you should see an icon on the top right side of the browser next to the address bar. Clicking on it will open up a new tab, which will go to [Dev.Opera](http://dev.opera.com) - Opera's portal for developers. 

## Step 4 - Packing it all up!
Once you are ready and satisfied with the extension, start with the process of converting it into an 'NEX' file. Follow the steps below:

1. Go to the '*Manage Extensions'* page.
2. Click on the '*Pack Extension*' button, located on the top of the page.
3. Select the directory of your extension
4. Click '*Ok*'.

Your extension in .NEX format will be generated in the parent directory of the one you had selected. Congratulations! 

## What now?
As you could see, making extensions for Opera is really easy. Through this tutorial, you've learn how to make a basic extension, load it in *Developer Mode* and test it out and finally package it. 

Now, go on and take a look at the various other tutorials we have for the different parts of extensions (like Buttons, Tabs, Messaging, etc) and also look through the [API documentation](Link to the API docs). 
