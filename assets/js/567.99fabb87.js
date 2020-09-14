(window.webpackJsonp=window.webpackJsonp||[]).push([[567],{1287:function(e,t,n){"use strict";n.r(t);var i=n(21),a=Object(i.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"titanium-app"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#titanium-app"}},[e._v("#")]),e._v(" Titanium.App")]),e._v(" "),n("TypeHeader"),e._v(" "),n("h2",{attrs:{id:"overview"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),n("p",[e._v("The "),n("code",[e._v("App")]),e._v(" module exposes a number of properties set in the "),n("code",[e._v("tiapp.xml")]),e._v(" file.")]),e._v(" "),n("p",[e._v("Three of these properties, the application name, ID, and URL, must be specified when the\napplication is created.")]),e._v(" "),n("p",[e._v("While most values may be changed by editing the "),n("code",[e._v("tiapp.xml")]),e._v(" file after creating the project,\nthe GUID is automatically generated and should not be changed.")]),e._v(" "),n("p",[e._v("To access other application properties set in the "),n("code",[e._v("tiapp.xml")]),e._v(" file not exposed by the\n"),n("code",[e._v("Titanium.App")]),e._v(" module, see "),n("type-link",{attrs:{type:"Titanium.App.Properties"}},[e._v("Titanium.App.Properties")]),e._v(".")],1),e._v(" "),n("h3",{attrs:{id:"ios-application-life-cycle"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ios-application-life-cycle"}},[e._v("#")]),e._v(" iOS Application Life Cycle")]),e._v(" "),n("p",[e._v("At any given moment, you applications can be in one of the following possible states:")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("Not running: The app has not been launched or was running but was terminated by the system.")])]),e._v(" "),n("li",[n("p",[e._v("Inactive: The app is running in the foreground but is currently not receiving events.\nAn app usually stays in this state only briefly as it transitions to a different state.\nThe "),n("code",[e._v("pause")]),e._v(" event is fired during this state.")])]),e._v(" "),n("li",[n("p",[e._v("Active: The app is running in the foreground and is receiving events. This is the normal\nmode for foreground apps.")])]),e._v(" "),n("li",[n("p",[e._v("Background: The app is in the background and executing code. Most apps enter this state\nbriefly on their way to being suspended.")])]),e._v(" "),n("li",[n("p",[e._v("Suspended: The app is in the background but is not executing code. The system moves\napps to this state automatically and does not notify them before doing so. While suspended,\nan app remains in memory but does not execute any code. The "),n("code",[e._v("paused")]),e._v(" event is fired\nduring this state. The system tries to keep as many apps in memory at the same time as it\ncan, but when memory runs low it terminates suspended apps to reclaim that memory. Apps\nthat consume large amounts of memory while in the background are the first apps to be terminated.")])])]),e._v(" "),n("p",[n("strong",[e._v("Responding To Interruptions")])]),e._v(" "),n("p",[n("em",[n("strong",[e._v("System Alerts")])])]),e._v(" "),n("p",[e._v("When an "),n("strong",[e._v("alert-based")]),e._v(" interruption occurs, such as an incoming phone call, the app moves\ntemporarily to the inactive state, and fires the "),n("code",[e._v("pause")]),e._v(" event. The system then displays\nan alert to the user. The app remains in this state until the user dismisses the alert.\nAt this point, the app either returns to the active state and fires the "),n("code",[e._v("resumed")]),e._v(" event;\nor moves to the background state and fires the "),n("code",[e._v("paused")]),e._v(" event.")]),e._v(" "),n("p",[e._v("Alert-based interruptions result in temporary loss of control by your app and results in "),n("code",[e._v("pause")]),e._v("\nevent being fired. Your app continues to run in the foreground, but it does not recieve\ntouch events from the system. (It does continue to receive notifications and other types\nof events, such as accelerometer events.) When your app is moved back to the\nactive state, the "),n("code",[e._v("resumed")]),e._v(" event is fired.")]),e._v(" "),n("p",[e._v("The same set of events takes place when user "),n("strong",[e._v("double taps on the home button")]),e._v(".")]),e._v(" "),n("p",[n("em",[n("strong",[e._v("Sleep/Wake Button")])])]),e._v(" "),n("p",[e._v("Pressing the "),n("strong",[e._v("Sleep/Wake")]),e._v(" button is another type of interruption that causes your app to\nmove to an inactive state. When the app is in the foreground and the "),n("strong",[e._v("Sleep/Wake button")]),e._v("\nis pressed, the the system fires the "),n("code",[e._v("pause")]),e._v(" event followed by the "),n("code",[e._v("paused")]),e._v(" event and\nbecomes inactive. This is an intentionally behavioral change by Apple to conserve battery when\nthe Sleep/Wake button is pressed. On waking up the app fires the "),n("code",[e._v("resume")]),e._v(" event followed by the\n"),n("code",[e._v("resumed")]),e._v(" event and returns the app to normal state.")]),e._v(" "),n("p",[n("em",[n("strong",[e._v("Home Button")])])]),e._v(" "),n("p",[e._v("Pressing the "),n("strong",[e._v("home button")]),e._v(" is another kind of interruption. The app fires "),n("code",[e._v("pause")]),e._v(" and\n"),n("code",[e._v("paused")]),e._v("events before going into background. When app is reopened it fires the "),n("code",[e._v("resume")]),e._v("\nevent followed by the "),n("code",[e._v("resumed")]),e._v(" event, returning the app to the normal state.")]),e._v(" "),n("table",{staticClass:"doc-table",attrs:{summary:"This table gives the order of events fired when the app is in normal state."}},[n("caption",[n("b",[e._v("Lifecycle events fired during different interruptions")])]),e._v(" "),n("thead",[n("tr",[n("th",{attrs:{colspan:"2"}},[e._v("Type of Interruption")]),e._v(" "),n("th",{attrs:{colspan:"2"}},[e._v("Going into Background")]),e._v(" "),n("th",{attrs:{colspan:"2"}},[e._v("Coming into  Foreground")])])]),e._v(" "),n("tbody",[n("tr",[n("th",{attrs:{colspan:"2",align:"left"}},[e._v("Alert-Based/Fast App Switching")]),e._v(" "),n("td",{attrs:{align:"center"}},[e._v("pause")]),e._v(" "),n("td",{attrs:{align:"center"}}),e._v(" "),n("td",{attrs:{align:"center"}}),e._v(" "),n("td",{attrs:{align:"center"}},[e._v("resumed")])]),e._v(" "),n("tr",[n("th",{attrs:{colspan:"2",align:"left"}},[e._v("Sleep/Wake Button")]),e._v(" "),n("td",{attrs:{align:"center"}},[e._v("pause")]),e._v(" "),n("td",{attrs:{align:"center"}},[e._v("paused")]),e._v(" "),n("td",{attrs:{align:"center"}},[e._v("resume")]),e._v(" "),n("td",{attrs:{align:"center"}},[e._v("resumed")])]),e._v(" "),n("tr",[n("th",{attrs:{colspan:"2",align:"left"}},[e._v("Home Button (backgrounding)")]),e._v(" "),n("td",{attrs:{align:"center"}},[e._v("pause")]),e._v(" "),n("td",{attrs:{align:"center"}},[e._v("paused")]),e._v(" "),n("td",{attrs:{align:"center"}},[e._v("resume")]),e._v(" "),n("td",{attrs:{align:"center"}},[e._v("resumed")])])])]),e._v(" "),n("p",[n("em",[n("strong",[e._v("Blur and Focus Events")])])]),e._v(" "),n("p",[e._v("When using the iOS pause/resume feature, the "),n("code",[e._v("blur")]),e._v(" and "),n("code",[e._v("focus")]),e._v(" events do not fire\nbefore the application enters the background or after it returns to the foreground,\nrespectively.  Instead, the application needs to monitor the "),n("code",[e._v("pause")]),e._v(" and "),n("code",[e._v("resumed")]),e._v(" events,\nwhich relies on the underlying iOS events to determine the application state rather than the\nUI events.")]),e._v(" "),n("h3",{attrs:{id:"application-level-events"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#application-level-events"}},[e._v("#")]),e._v(" Application Level Events")]),e._v(" "),n("p",[e._v("Application-level events are custom events that are defined globally for your\napplication. By convention, application-level events are set on the "),n("code",[e._v("Titanium.App")]),e._v("\nmodule, like this:")]),e._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[e._v("Ti"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("App"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("addEventListener")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[e._v("'app:myCustomEvent'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" myHandlerFunction"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),n("p",[e._v("Adding a prefix (like 'app:' in this example) is optional, but can help ensure that\nyour custom event names don't conflict with any future Titanium events.")]),e._v(" "),n("p",[e._v("Application-level event listeners can be added and fired from any context, including from inside\na web view, so they are ideal for communicating between separate parts of your\napplication.")]),e._v(" "),n("p",[e._v("When you add an event listener on a Titanium module (such as "),n("code",[e._v("Ti.App")]),e._v(" or\n"),n("type-link",{attrs:{type:"Titanium.Geolocation"}},[e._v("Ti.Geolocation")]),e._v("), the event listener function is referenced from\nthe global context. This means the event listener function and any objecst it references\ncan't be garbage collected until the event listener is removed.")],1),e._v(" "),n("p",[e._v("This can lead to memory leaks if application-level event listeners are added and not\nremoved.")]),e._v(" "),n("p",[e._v("See also: "),n("a",{attrs:{href:"https://docs.appcelerator.com/platform/latest/#!/guide/Event_Handling",target:"_blank",rel:"noopener noreferrer"}},[e._v("Event Handling"),n("OutboundLink")],1),e._v("\nin the Titanium Mobile Guides.")]),e._v(" "),n("h3",{attrs:{id:"system-level-accessibility-events"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#system-level-accessibility-events"}},[e._v("#")]),e._v(" System Level Accessibility Events")]),e._v(" "),n("p",[e._v("System-level Accessibility events include:")]),e._v(" "),n("ul",[n("li",[e._v("Events your application fires to alert the device's accessibility system of some condition\nor to ask it to do something.")]),e._v(" "),n("li",[e._v("Events fired by the device's accessibility system and listened for in your application.")])]),e._v(" "),n("p",[e._v("Currently there are four system-level accessibility events. Three of them are available for\nyour application to fire, and one of them is for your application to listen for.")]),e._v(" "),n("h4",{attrs:{id:"firing-accessibility-events"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#firing-accessibility-events"}},[e._v("#")]),e._v(" Firing Accessibility Events.")]),e._v(" "),n("p",[e._v("The following accessibility events can be fired by your application to alert the accessibility\nsystem of a particular condition or to ask it to perform an action.")]),e._v(" "),n("p",[e._v("These events are fired using "),n("type-link",{attrs:{type:"Titanium.App.fireSystemEvent"}},[e._v("Titanium.App.fireSystemEvent")]),e._v(", which is available in Titanium Mobile 3.0.0.")],1),e._v(" "),n("ul",[n("li",[n("type-link",{attrs:{type:"Titanium.App.EVENT_ACCESSIBILITY_ANNOUNCEMENT"}},[e._v("Titanium.App.EVENT_ACCESSIBILITY_ANNOUNCEMENT")]),e._v(", available in iOS and Android, asks the device's\naccessibility system to make an announcement. The announcement itself is a string passed as the second\nargument to "),n("type-link",{attrs:{type:"Titanium.App.fireSystemEvent"}},[e._v("Titanium.App.fireSystemEvent")]),e._v(". "),n("em",[e._v("How")]),e._v(" the device's accessibility actually makes that announcement\ndepends on what accessibility services are activated on the device. The most common are VoiceOver on\niOS and TalkBack on Android. Each of those would read the announcement aloud.")],1)]),e._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[e._v("Ti"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("App"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[e._v("fireSystemEvent")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("Ti"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("App"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[e._v("EVENT_ACCESSIBILITY_ANNOUNCEMENT")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Welcome to my App"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),n("ul",[n("li",[n("p",[n("type-link",{attrs:{type:"Titanium.App.iOS.EVENT_ACCESSIBILITY_LAYOUT_CHANGED"}},[e._v("Titanium.App.iOS.EVENT_ACCESSIBILITY_LAYOUT_CHANGED")]),e._v(", available only on iOS, can be used to alert\nthe accessibility system that the layout of the screen has changed, such as when an element\nappears or disappears. When your application fires this event, Titanium calls "),n("code",[e._v("UIAccessibilityLayoutChangedNotification")]),e._v("\nin the iOS "),n("a",{attrs:{href:"https://developer.apple.com/documentation/uikit/accessibility/uiaccessibility",target:"_blank",rel:"noopener noreferrer"}},[e._v("UIAccessibility Protocol"),n("OutboundLink")],1),e._v(".\nNo second parameter is required when firing this event with "),n("type-link",{attrs:{type:"Titanium.App.fireSystemEvent"}},[e._v("Titanium.App.fireSystemEvent")]),e._v(".")],1)]),e._v(" "),n("li",[n("p",[n("type-link",{attrs:{type:"Titanium.App.iOS.EVENT_ACCESSIBILITY_SCREEN_CHANGED"}},[e._v("Titanium.App.iOS.EVENT_ACCESSIBILITY_SCREEN_CHANGED")]),e._v(", available only on iOS, can be used to alert\nthe accessibility system when a new view appears that comprises a major portion of the screen.\nWhen your application fires this event, Titanium calls "),n("code",[e._v("UIAccessibilityScreenChangedNotification")]),e._v("\nin the iOS "),n("a",{attrs:{href:"https://developer.apple.com/documentation/uikit/accessibility/uiaccessibility",target:"_blank",rel:"noopener noreferrer"}},[e._v("UIAccessibility Protocol"),n("OutboundLink")],1),e._v(".\nNo second parameter is required when firing this event with "),n("type-link",{attrs:{type:"Titanium.App.fireSystemEvent"}},[e._v("Titanium.App.fireSystemEvent")]),e._v(".")],1)])]),e._v(" "),n("h4",{attrs:{id:"listening-for-accessibility-events"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#listening-for-accessibility-events"}},[e._v("#")]),e._v(" Listening for Accessibility Events")]),e._v(" "),n("p",[e._v("Currently there is only one system accessibility event which your application can listen for using\n<Titanium.App.addEventListener>, namely "),n("type-link",{attrs:{type:"Titanium.App.accessibilitychanged"}},[e._v("Titanium.App.accessibilitychanged")]),e._v(".  This event, available on iOS and on Android\n(for devices running Ice Cream Sandwich or greater), is fired when the device's accessibility service is turned\non or off. The object passed as a parameter to the listener function contains an "),n("code",[e._v("enabled")]),e._v(" property which is\n"),n("code",[e._v("true")]),e._v(" if the accessibility service is now turned on, or "),n("code",[e._v("false")]),e._v(" otherwise.")],1),e._v(" "),n("ApiDocs")],1)}),[],!1,null,null,null);t.default=a.exports}}]);