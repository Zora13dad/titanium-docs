(window.webpackJsonp=window.webpackJsonp||[]).push([[159],{2004:function(e,t,a){"use strict";a.r(t);var s=a(21),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"debugging-ios-apps-with-3rd-party-tools"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#debugging-ios-apps-with-3rd-party-tools"}},[e._v("#")]),e._v(" Debugging iOS Apps with 3rd-party Tools")]),e._v(" "),s("p",[e._v("You can debug your Titanium App using the Safari DevTools. No matter the route you take, you must ensure that your project is using the built-in JavaScriptCore framework. For projects running Titanium SDK 7.0.0 and later, this option is enabled by default. For older projects, it can be enabled as seen below.")]),e._v(" "),s("p",[e._v("Searching for Android Debugging? "),s("RouterLink",{attrs:{to:"/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Titanium_Development/Debugging_Titanium_Applications/Debugging_on_Android_Devices/Debugging_Android_Apps_with_3rd-party_Tools/"}},[e._v("Here")]),e._v(" you go!")],1),e._v(" "),s("h2",{attrs:{id:"enable-use-jscore-framework"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#enable-use-jscore-framework"}},[e._v("#")]),e._v(" Enable use-jscore-framework")]),e._v(" "),s("p",[e._v("With Titanium SDK 6.x, developers must add a tag to enable the iOS debugger in order to use Safari (or iOS-webkit-debug-proxy). With SDK 7.x and later, this value is assumed to be true unless you explicitly add the tag with "),s("code",[e._v("false")]),e._v(" as the value.")]),e._v(" "),s("p",[e._v("The key is to enable the "),s("code",[e._v("use-jscore-framework")]),e._v(" option in "),s("code",[e._v("tiapp.xml")]),e._v(":")]),e._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("tiapp")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("\n    ...\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("ios")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("\n        ...\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("use-jscore-framework")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("true"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("</")]),e._v("use-jscore-framework")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("\n        ...\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("</")]),e._v("ios")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("\n    ...\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("</")]),e._v("tiapp")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("\n")])])]),s("p",[e._v("Once enabled, this will force the SDK to use the pre-packaged JSCore framework/engine as the JavaScript engine internally (rather than our older TiCore framework).")]),e._v(" "),s("p",[e._v("Since iOS 7, the pre-packaged JScore framework has contained a debugging agent and protocol using webinspectord. We make use of this service/protocol with our newest iOS debugger in SDK 6.0.0 as does Safari in it's tooling.")]),e._v(" "),s("h2",{attrs:{id:"debugging-with-safari-devtools"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#debugging-with-safari-devtools"}},[e._v("#")]),e._v(" Debugging with Safari DevTools")]),e._v(" "),s("p",[e._v("Be sure to turn on use-jscore-framework as listed in "),s("a",{attrs:{href:"#enable-use-jscore-framework"}},[e._v("Enable use-jscore-framework")]),e._v(".")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("Launch the app on the device or a simulator.")]),e._v(" "),s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[e._v("⚠️ Warning")]),e._v(" "),s("p",[e._v("If using a device, make its connected by an USB cable before debugging.")])]),e._v(" "),s("ol",[s("li",[e._v("Launch you application via Studio or command-line: "),s("code",[e._v("appc run -p ios")])])])]),e._v(" "),s("li",[s("p",[e._v("Launch Safari and enable the "),s("strong",[e._v("Develop")]),e._v(" mode ("),s("strong",[e._v("Safari")]),e._v(" > "),s("strong",[e._v("Preferences")]),e._v(" > "),s("strong",[e._v("Advanced")]),e._v(" and enable "),s("strong",[e._v("Show Develop menu in menu bar")]),e._v(").")]),e._v(" "),s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[e._v("⚠️ Warning")]),e._v(" "),s("p",[e._v("It is important to have the Web Inspector enabled to allow connections for debugging. Otherwise, neither Studio nor Safari's debugger will be able to connect to the device using the web-inspector based protocol.")])]),e._v(" "),s("p",[s("img",{attrs:{src:a(533),alt:"enabled_develop_safari"}})])]),e._v(" "),s("li",[s("p",[e._v("Once the app is up and running, connecting to the debugger depends on whether you are using a simulator or device.")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("Simulator: "),s("strong",[e._v("Safari")]),e._v(" > "),s("strong",[e._v("Developer")]),e._v(" > "),s("strong",[e._v("Simulator")]),e._v(" > "),s("strong",[e._v("JSContext")])])]),e._v(" "),s("li",[s("p",[e._v("Device: "),s("strong",[e._v("Safari")]),e._v(" > "),s("strong",[e._v("Developer")]),e._v(" > "),s("strong",[s("code",[e._v("<device name>")])]),e._v(" > "),s("strong",[e._v("JSContext")])])])])])]),e._v(" "),s("h3",{attrs:{id:"safari-breakpoints"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#safari-breakpoints"}},[e._v("#")]),e._v(" Safari Breakpoints")]),e._v(" "),s("p",[e._v("Sometimes you cannot connect the debugger to the app until it's already executed the code its likely to break at. Try this workaround:")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("Launch the simulator.")])]),e._v(" "),s("li",[s("p",[e._v("Open "),s("strong",[e._v("Safari")]),e._v(" > "),s("strong",[e._v("Develop")]),e._v(" > "),s("strong",[e._v("Simulator")]),e._v(".")])]),e._v(" "),s("li",[s("p",[e._v("Ensure "),s("strong",[e._v("Automatically Show Web Inspector for JSContexts")]),e._v(" and "),s("strong",[e._v("Automatically Pause Connecting to JSContexts")]),e._v(" are both enabled.")])]),e._v(" "),s("li",[s("p",[e._v("Launch the app/build via "),s("strong",[e._v("Studio")]),e._v(" or the "),s("strong",[e._v("CLI")]),e._v(". You should be able to connect and control the debugger before the app fully launches.")])])])])}),[],!1,null,null,null);t.default=n.exports},533:function(e,t,a){e.exports=a.p+"assets/img/enabled_develop_safari.50be457a.png"}}]);