---
layout: default-withsidebar
title: Extension Templates and samples
author: shwetankdixit
copyright: opera-ccby
---

## Introduction

This is a repository of all the example extensions to help you get started with making Opera extensions. These could be useful for just looking through the code and learning about extensions, or you could take any of these as a starting point and then edit them and build upon them for your own extensions. If you haven't already, then we highly recommend that you read through the [architecture overview](tut_architecture_overview.html) before proceeding. 


## Browser and Page Actions
**Sample extensions**: 

* [An extension which simply adds a button to the toolbar](samples/BrowserActions-button.nex)
* [An extension which simply adds a popup to the toolbar](samples/BrowserActions-Popup.nex)
* [An extension which adds a page action](samples/PageActions.nex)

**Relevant reading**: 
* [Buttons, popups and badges(browser actions)](tut_browser_actions.html)
* [chrome.browserAction](browserAction.html)


## Messaging
**Sample extensions**: 

* [An extension which does simple, short lived communication (it counts the number of paragraphs in the page and updates the badge)](samples/MessagePassing.nex)

**Relevant reading**:  

* [Passing messages in extensions](tut_message_passing.html)
* [chrome.runtime](runtime.html)


## Windows and Tabs
**Sample extensions**: 

* [An extension which simply creates a new tab](samples/WinTabs-CreateATab.nex)
* [An extension which takes current URL, creates a new tab and runs the URL by the WAVE accessibility evaluation tool](samples/WinTabs-Wave.nex)
* [If you are on dev.opera.com, then clicking on button will redirect it to opera.com](samples/WinTabs-UpdateTab.nex)
* [An example of closing, reloading and duplicating tabs](samples/WinTabs-CloseReloadDuplicate.nex)
* [Creates a new window with three predefined URLs loading in that window](samples/WinTabs-PrivateWindow.nex)

**Relevant reading**: 

* [Working with tabs and windows](tut_tab_window.html)
* [chrome.tabs](tabs.html), [chrome.windows](windows.html)


## Context Menu
**Sample extension**: 

* [A sample extension showing how to use the Context Menu API](samples/ContextMenu-SelectedText.nex)

**Relevant reading**: 

* [Working with the context menu](tut_context_menus.html)
* [chrome.contextMenus](contextMenus.html)


## Speed Dial
**Sample extension**: 

* [Sample speed dial extension](samples/SpeedDial-CenterContent.nex)

**Relevant reading**: 

* [Speed Dial extensions](tut_sd_extensions.html)
* [opr.speeddial](speeddial.html)


## History API
**Sample extension**: 

* [Accessing history of currently active tab](samples/HistoryAPI-1.nex)
* [Deleting history of the currently active tab](samples/HistoryAPI-2.nex)

**Relevant reading**: 

* [Working with the browser history](tut_hist.html)
* [chrome.history](history.html)


## Internationalization (i18n)
**Sample extension**: 

* [Extension showing how i18n should work. The text in popup should be correctly translated in spanish if the browser locale is changed to spanish](samples/i18nExtension.nex)

**Relevant reading**:  

* [Internationalization](tut_internationalization.html)
* [chrome.i18n](i18n.html)









