(window.webpackJsonp=window.webpackJsonp||[]).push([[771],{1861:function(t,e,s){"use strict";s.r(e);var a=s(21),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"project-configuration-file-config-json"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#project-configuration-file-config-json"}},[t._v("#")]),t._v(" Project Configuration File (config.json)")]),t._v(" "),s("p",[t._v("Alloy uses the "),s("code",[t._v("config.json")]),t._v(" file, located in the project's "),s("code",[t._v("app")]),t._v(" directory, to specify global values, conditional environment and platform values, and widget dependencies. The configuration file contains the following objects:")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Object")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("global")]),t._v(" "),s("td",[t._v("Contains key-value pairs present for all environments and platforms.")])]),t._v(" "),s("tr",[s("td",[t._v("env:development")]),t._v(" "),s("td",[t._v("Contains key-value pairs present for targets built for development, running in either the simulator or emulator.")])]),t._v(" "),s("tr",[s("td",[t._v("env:test")]),t._v(" "),s("td",[t._v("Contains key-value pairs present for targets built for testing on a device.")])]),t._v(" "),s("tr",[s("td",[t._v("env:production")]),t._v(" "),s("td",[t._v("Contains key-value pairs present for targets built for production, running after a package installation.")])]),t._v(" "),s("tr",[s("td",[t._v("os:android")]),t._v(" "),s("td",[t._v("Contains key-value pairs present for targets built for Android.")])]),t._v(" "),s("tr",[s("td",[t._v("os:ios")]),t._v(" "),s("td",[t._v("Contains key-value pairs present for targets built for iOS.")])]),t._v(" "),s("tr",[s("td",[t._v("os:windows")]),t._v(" "),s("td",[t._v("Contains key-value pairs present for targets built for Windows Phone. Note: Support for Windows 8.1 and Windows Phone SDKs has been deprecated as of SDK 6.3.0.GA and has be removed in SDK 7.0.0.GA.")])]),t._v(" "),s("tr",[s("td",[t._v("dependencies")]),t._v(" "),s("td",[t._v("Contains key-value pairs for widget dependencies, where the key is the widget name and the value is the version number of the widget.")])]),t._v(" "),s("tr",[s("td",[t._v("autoStyle")]),t._v(" "),s("td",[t._v("Enables the autostyle feature for the entire Alloy project. See "),s("RouterLink",{attrs:{to:"/guide/Alloy_Framework/Alloy_Guide/Alloy_Views/Dynamic_Styles/#autostyle"}},[t._v("Dynamic Styles: Autostyle")]),t._v(" for more information.")],1)]),t._v(" "),s("tr",[s("td",[t._v("backbone")]),t._v(" "),s("td",[t._v("Select the Backbone.js library to use for Alloy Model and Collection objects. Set to either "),s("code",[t._v("0.9.2")]),t._v(" (default for backwards compatibility), "),s("code",[t._v("1.1.2")]),t._v(". or "),s("code",[t._v("1.3.3")]),t._v(".")])])])]),t._v(" "),s("p",[t._v("When mixed together, 'os' values override 'env' values, which override 'global' values. If you want to specify both a platform and environment-specific configuation, combine the 'os' and 'env' values together into one string with the values space separated. These values are accessible during runtime by prefixing the key with "),s("code",[t._v("Alloy.CFG")]),t._v(".")]),t._v(" "),s("p",[t._v("Example of a configuration file:")]),t._v(" "),s("p",[s("strong",[t._v("config.json")])]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"global"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"foo"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"env:development"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"foo"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"env:test"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"foo"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"env:production"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"foo"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"os:ios env:production"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"foo"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"os:ios env:development"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"foo"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"os:ios env:test"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"foo"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"os:android"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"foo"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"dependencies"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"com.foo.widget"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1.0"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("In the above example, if the application is ran on the iPhone simulator and prints out 'foo' using "),s("code",[t._v("Ti.API.info(Alloy.CFG.foo)")]),t._v(", it will return '6.'")])])}),[],!1,null,null,null);e.default=n.exports}}]);