---
layout: default-withsidebar
title: Permissions declarations
copyright: opera-google-ccby
originalsource: http://developer.chrome.com/extensions/declare_permissions.html
---
## Introduction

It is required to first declare which permissions you would like the browser to grant your extension. Some permissions are also displayed to users before installation. Permissions are declared in the manifest file, for example:

<pre class="prettyprint">...
"permissions": [
  "tabs",
  "http://www.opera.com/",
  "http://*.example.org/",
],
...</pre>

## Permissions declarations allowed in Opera extensions
The following is an overview of the various permissions declarations possible in extensions in Opera, and what they mean. 

* **match pattern**: Specifies a host permission. Required if the extension or app wants to interact with the code running on pages. Many capabilities, such as cross-origin XMLHttpRequests, programmatically injected content scripts, etc., require host permissions. For details on the syntax, see [Match Patterns](tut_match_patterns.html).
* **activeTab**: The activeTab permission gives an extension temporary access to the currently active tab when the user invokes the extension - for example by clicking its browser action. Access to the tab lasts until the tab is navigated or closed. This serves as an alternative for many uses of `<all_urls>`, but displays no warning message during installation
* **alarms**: Required if the extension or app uses the [chrome.alarms](alarms.html) API.
* **background**: You typically use the background permission with a [background page or event page](tut_architecture_overview.html#the_background_process).
* **bookmarks**: Gives your extension access to the [chrome.bookmarks](bookmarks.html) API.
* **browsingData**: Gives your extension access to the [chrome.browsingData](bookmarks.html) API.
* **contextMenus**: Required if the extension or app uses the [chrome.contextMenus](contextMenus.html) API.
* **cookies**: Required if the extension or app uses the [chrome.cookies](cookies.html) API.
* **downloads**: Required if the extension or app uses the [chrome.downloads](downloads.html) API.
* **fontSettings**: Required if the extension or app uses the [chrome.fontSettings](fontSettings.html) API.
* **geolocation**: Allows the extension or app to use the [proposed HTML5 geolocation API](http://dev.w3.org/geo/api/spec-source.html) without prompting the user for permission.
* **history**: Required if the extension or app uses the [chrome.history](history.html) API.
* **identity**: Required if the extension or app uses the [chrome.identity](identity.html) API.
* **idle**: Required if the extension or app uses the [chrome.idle](idle.html) API.
* **management**: Required if the extension uses the [chrome.management](management.html) API.
* **offroad**: Gives the extension access to the [Off-Road Mode](tut_offroad.html).
* **pageCapture**: Gives the extension access to the [chrome.pageCapture](pageCapture.html) API.
* **power**: Required if the extension or app uses the [chrome.power](power.html) API.
* **proxy**: Required if the extension or app uses the [chrome.proxy](proxy.html) API.
* **storage**: Required if the extension or app uses the [chrome.storage](storage.html) API. Note: `storage.sync` is not supported.
* **tabs**: Required if the extension uses the [chrome.tabs](tabs.html) or [chrome.windows](windows.html) API.
* **webNavigation**: Gives your extension access to the [chrome.webNavigation](webNavigation.html) API.
* **webRequest**: Required if the extension uses the [chrome.webRequest](webRequest.html) API. 
* **speeddial**:  Required if the extension uses the [opr.speeddial](speeddial.html) API.

## Optional permissions
<p>You can use the <a href="permissions.html"><code>chrome.permissions</code> API</a> to request <a href="tut_optional_permissions.html#manifest">declared optional permissions</a> at run time rather than install time, so users understand why the permissions are needed and grant only those that are necessary.</p>