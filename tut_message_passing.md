---
layout: default-withsidebar
title: Passing Messages in extensions
author: shwetankdixit
copyright: opera-ccby
---

Communicating and passing messages around is an essential part in developing extensions. Let’s take a look at the different ways to do that using the Opera Extensions API. 

The two broad types of communication methods we have are simple short lived messages, and a more long lived communication method. We’ll cover both in this article.

## Simple short lived communication

If all you need to do is to send a one-shot message to another part of the extension, and optionally get a calback, then you can use the `runtime.sendMessage()` or `tabs.sendMessage()` methods to do so. To receive a message, use the `runtime.onMessage()` method. 

Let’s take an example of an extension which (on click of a button) counts the number of `<p>` elements in the page and updates the button with a badge showing the number. 

In the background script, we initially write:

	chrome.browserAction.onClicked.addListener(function() {
	    chrome.tabs.query({currentWindow: true, active: true}, function(tab) { /*Select active tab of the current window*/
	       chrome.tabs.sendMessage(tab\[0].id, {line: 'countparas'}); /*Send a message to the content script*/
	    });
	});

So in effect, we are selecting the currently active tab of the current window and sending a message the content script associated with it. When the content script recieves this message, it will initiate a function, like so:

	chrome.extension.onMessage.addListener(
		function (request, sender){
			if (request.line=='countparas'){ /* If we get the request from the Background script */
				var paras = document.body.querySelectorAll('p'); /* Select all `<p>` elements in the document body */
				if (paras.length > 0){ /* If the number of `<p>` elements is greater than zero */
				var theCount = paras.length+''; /* Assigning that number to a variable called 'theCount' and convert it to a string format */
				chrome.runtime.sendMessage({count:theCount}); /* Send the count back to the background script */
				} else {
					alert('There does not seem to be any `<p>` elements in this page!');
				}
			}
	});

Here the content script is listening for the message ‘countparas’, and only once it receives it, it initiates the counting of all the `<p>`elements in the page. Once it does that, it sends back a message with the count.

The background script once again listens for a message from the content script regarding the count, and once it does, it updates the badge like so:

	chrome.runtime.onMessage.addListener(
		function (request, sender) {
			if (request.count){ /*If there exists a value named 'count' in the message sent by content script */
				console.log('Count of paragraphs in the document is: '+request.count + 'and tab id is '+sender.tab.id);
				var mytext = ""+request.count+"";
				chrome.browserAction.setBadgeText({text: mytext}); /*Set the badge of the extension to the value of 'mytext'*/
			}
		}

	);


Feel free to [download the extension](#) and examine it further. 

## Long lived communication

In some situations you might want a more *persistent* form of communication between the different parts of your extension.

--More to write here--