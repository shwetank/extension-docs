---
layout: default-withsidebar
title: Supported extension APIs
author: shwetankdixit
---

## Introduction

Below are is the list of extension APIs supported in Opera. Since most of these APIs are in common with Chrome, we are linking each of those APIs with the appropriate documentation page (most of them link to the relavent chrome extension API page) and also mentioning whatever differences (if any) that our implementation of an API has vis-a-vis Chrome's.


<table>
	<tbody>
		<tr>
			<th>API Name</th>
			<th>Differences with Chrome (if any)</th>
		</tr>
		<tr>
			<td><a href="https://developer.chrome.com/apps/alarms">Alarms</a></td>
			<td>None</td>
		</tr>
		<tr>
			<td><a href="https://developer.chrome.com/extensions/bookmarks">Bookmarks</a></td>
			<td>None</td>
		</tr>
		<tr>
			<td><a href="https://developer.chrome.com/extensions/browserAction">browserAction</a></td>
			<td>None</td>
		</tr>
		<tr>
			<td><a href="https://developer.chrome.com/extensions/browsingData">browsingData</a></td>
			<td>None</td>
		</tr>
		<tr>
			<td><a href="https://developer.chrome.com/extensions/commands">Commands</a></td>
			<td>From Opera 29 onwards, it will be possible to assign shortcuts to open sidebar extensions by defining the shortcut in the manifest under the <code>_execute_sidebar_action</code> field. You can define shortcuts in the same way you do for browser and page actions.</td>
		</tr>
		<tr>
			<td><a href="https://developer.chrome.com/extensions/contentSettings">Content Settings</a></td>
			<td>None</td>
		</tr>
		<tr>
			<td><a href="https://developer.chrome.com/extensions/contextMenus">Context Menus</a></td>
			<td><code>chrome.contextmenus.create()</code> and <code>chrome.contextmenus.update()</code> will support an additional <code>enum</code> type of <code>sidebar_action</code> from Opera 29 onwards.</td>
		</tr>
		<tr>
			<td><a href="https://developer.chrome.com/extensions/cookies">Cookies</a></td>
			<td>None</td>
		</tr>
		<tr>
			<td><a href="https://developer.chrome.com/extensions/debugger">Debugger</a></td>
			<td>None</td>
		</tr>
		<tr>
			<td><a href="https://developer.chrome.com/extensions/declarativeContent">Declarative Content</a></td>
			<td>None</td>
		</tr>
		<tr>
			<td><a href="https://developer.chrome.com/extensions/devtools_inspectedWindow">devtools.inspectedWindow</a></td>
			<td>None</td>
		</tr>
		<tr>
			<td><a href="https://developer.chrome.com/extensions/devtools_network">devtools.network</a></td>
			<td>None</td>
		</tr>
		<tr>
			<td><a href="https://developer.chrome.com/extensions/devtools_panels">devtools.panels</a></td>
			<td>None</td>
		</tr>
		<tr>
			<td><a href="https://developer.chrome.com/extensions/downloads">Downloads</a></td>
			<td>None</td>
		</tr>
		<tr>
			<td><a href="https://developer.chrome.com/extensions/events">Events</a></td>
			<td>None</td>
		</tr>
		<tr>
			<td><a href="https://developer.chrome.com/extensions/extensions">Extensions</a></td>
			<td>Opera does not support the <code>sendRequest()</code> and <code>getExtensionTabs()</code> methods.</td>
		</tr>
		<tr>
			<td><a href="https://developer.chrome.com/extensions/fontSettings">Font Settings</a></td>
			<td>None</td>
		</tr>
		<tr>
			<td><a href="https://developer.chrome.com/extensions/history">History</a></td>
			<td>None</td>
		</tr>
		<tr>
			<td><a href="https://developer.chrome.com/extensions/i18n">Internationalization (i18n)</a></td>
			<td>Opera does not support the <code>getUILanguage()</code> method.</td>
		</tr>
		<tr>
			<td><a href="https://developer.chrome.com/extensions/identity">Identity</a></td>
			<td>Opera only supports the <code>launchWebAuthFlow()</code> Method in this API.</td>
		</tr>
		<tr>
			<td><a href="https://developer.chrome.com/extensions/idle">Idle</a></td>
			<td>None</td>
		</tr>
		<tr>
			<td><a href="https://developer.chrome.com/extensions/management">Management</a></td>
			<td>Opera does not support the <code>LaunchType</code> type and the<code> getSelf()</code>, <code>createAppShortCut()</code>, <code>setLaunchType()</code> and <code>generateAppForLink()</code> methods.</td>
		</tr>
		<tr>
			<td><a href="https://developer.chrome.com/extensions/notifications">Notifications</a></td>
			<td>In <code>TemplateTypes,</code>, Opera does not support the <code>Image</code>, <code>List</code> or <code>Progress</code> types. Also, on mac, the <code>update()</code> method will not work for now.</td>
		</tr>
		<tr>
			<td><a href="https://developer.chrome.com/extensions/omnibox">Omnibox</a></td>
			<td>None</td>
		</tr>
		<tr>
			<td><a href="https://developer.chrome.com/extensions/pageAction">Page Action</a></td>
			<td>None</td>
		</tr>
		<tr>
			<td><a href="https://developer.chrome.com/extensions/pageCapture">Page Capture</a></td>
			<td>None</td>
		</tr>
		<tr>
			<td><a href="https://developer.chrome.com/extensions/permissions">Permissions</a></td>
			<td>None</td>
		</tr>
		<tr>
			<td><a href="https://developer.chrome.com/extensions/power">Power</a></td>
			<td>None</td>
		</tr>
		<tr>
			<td><a href="https://developer.chrome.com/extensions/privacy">Privacy</a></td>
			<td>None</td>
		</tr>
		<tr>
			<td><a href="https://developer.chrome.com/extensions/proxy">Proxy</a></td>
			<td>None</td>
		</tr>
		<tr>
			<td><a href="https://developer.chrome.com/extensions/runtime">Runtime</a></td>
			<td>None</td>
		</tr>
		<tr>
			<td><a href="https://developer.chrome.com/extensions/sessions">Sessions</a></td>
			<td>Sync is not supported right now, so <code>getDevices</code> will not work.</td>
		</tr>
		<tr>
			<td><a href="https://developer.chrome.com/extensions/storage">Storage</a></td>
			<td>Opera does not support the <code>sync()</code> and <code>managed()</code> methods.</td>
		</tr>
		<tr>
			<td><a href="https://developer.chrome.com/extensions/system_cpu">System.CPU</a></td>
			<td>None</td>
		</tr>
		<tr>
			<td><a href="https://developer.chrome.com/extensions/system_memory">System.Memory</a></td>
			<td>None</td>
		</tr>
		<tr>
			<td><a href="https://developer.chrome.com/extensions/systemStorage">System.Storage</a></td>
			<td>None</td>
		</tr>
		<tr>
			<td><a href="https://developer.chrome.com/extensions/tabs">Tabs</a></td>
			<td><p>Opera currently does not support the <code>InjectDetails</code> and <code>ZoomSettings</code> types and the <code>sendRequest()</code>, <code>getSelected()</code>, <code>getAllInWindow()</code>, <code>highlight()</code>, <code>setZoom()</code>, <code>getZoom()</code>, <code>setZoomSettings()</code> and <code>getZoomSettings()</code> methods. Also, the <code>onSelectionChanged</code>, <code>onActiveChanged</code>, <code>onHighlightChanged</code>, <code>onHighlighted</code> and <code>onZoomChange</code> events are not supported.</p> <p>Opera 29 onwards, things related to zoom in the API will be supported - namely, the <code>ZoomSettings</code> type and the <code>setZoom()</code>, <code>getZoom()</code>, <code>setZoomSettings()</code> and <code>getZoomSettings()</code> methods. </p> </td>
		</tr>
		<tr>
			<td><a href="https://developer.chrome.com/extensions/types">Types</a></td>
			<td>None</td>
		</tr>
		<tr>
			<td><a href="https://developer.chrome.com/extensions/webNavigation">Web Navigation</a></td>
			<td>None</td>
		</tr>
		<tr>
			<td><a href="https://developer.chrome.com/extensions/webRequest">Web Request</a></td>
			<td>None</td>
		</tr>
		<tr>
			<td><a href="https://developer.chrome.com/extensions/windows">Windows</a></td>
			<td>None</td>
		</tr>
		<tr>
			<td><a href="https://dev.opera.com/extensions/addons.html">Addons</a></td>
			<td>Only in Opera</td>
		</tr>
		<tr>
			<td><a href="https://dev.opera.com/extensions/speeddial.html">Speed Dial</a></td>
			<td>Only in Opera</td>
		</tr>
		<tr>
			<td><a href="https://dev.opera.com/extensions/sidebarAction.html">sidebarAction</a></td>
			<td>Only in Opera</td>
		</tr>
	</tbody>
</table>
