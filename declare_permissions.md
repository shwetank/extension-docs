---
layout: default-withsidebar
title: Permissions Declaration
copyright: opera-google-ccby
originalsource: http://developer.chrome.com/trunk/extensions/content_scripts.html
---

It is required to first declare which permissions you would like the browser to grant your extension. Some permissions are also displayed to users before installation. Permissions are declared in the manifest file, for example:

<pre class="prettyprint">...
"permissions": [
  "tabs",
  "http://www.opera.com/",
  "http://*.example.org/",
],
...</pre>

The following is an overview of the various permissions declarations possible in extensions in Opera, and what they mean. 

* ***match pattern***: Specifies a host permission. Required if the extension or app wants to interact with the code running on pages. Many capabilities, such as cross-origin XMLHttpRequests, programmatically injected content scripts, etc., require host permissions. For details on the syntax, see [Match Patterns](tut_match_patterns.html).
* **"activeTab"**: The activeTab permission gives an extension temporary access to the currently active tab when the user invokes the extension - for example by clicking its browser action. Access to the tab lasts until the tab is navigated or closed.This serves as an alternative for many uses of `<all_urls>`, but displays no warning message during installation
* **"alarms"**: Required if the extension or app uses the [chrome.alarms](alarms.html) module.
* **"background"**: You typically use the "background" permission with a [background page or event page](tut_architecture_overview.html#the_background_process).
* **"contextMenus"**: Required if the extension or app uses the [chrome.contextMenus](contextMenus.html) module.
* **"cookies"**: Required if the extension or app uses the [chrome.cookies](cookies.html) module.
* **"geolocation"**: Allows the extension or app to use the [proposed HTML5 geolocation API](http://dev.w3.org/geo/api/spec-source.html) without prompting the user for permission..
* **"history"**: Required if the extension or app uses the [chrome.history](history.html) module.
* **"idle"**: Required if the extension or app uses the [chrome.idle](idle.html) module.
* **"management"**: Required if the extension uses the [chrome.management](management.html) module.
* **"storage"**: Required if the extension or app uses the [chrome.storage](storage.html) module. Note: `storage.sync` will not be supported
* **"tabs"**: Required if the extension uses the [chrome.tabs](tabs.html) or [chrome.windows](windows.html) module.
* **"webRequest"**: Required if the extension uses the [chrome.webRequest](webRequest.html) module. 
* **"speeddial"**:  Required if the extension uses the [opr.speeddial](speeddial.html) module.