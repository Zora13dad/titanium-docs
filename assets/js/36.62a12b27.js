(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{2050:function(t,e,a){"use strict";a.r(e);var s=a(21),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"ios-ui-components-and-conventions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ios-ui-components-and-conventions"}},[t._v("#")]),t._v(" iOS UI Components and Conventions")]),t._v(" "),s("h2",{attrs:{id:"objective"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#objective"}},[t._v("#")]),t._v(" Objective")]),t._v(" "),s("p",[t._v("In this section, you will learn some of the user interface and user experience components that are specific to iOS.")]),t._v(" "),s("h2",{attrs:{id:"contents"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#contents"}},[t._v("#")]),t._v(" Contents")]),t._v(" "),s("p",[t._v("We've already covered many of the iOS UI conventions in the "),s("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_How-tos/Cross-Platform_Mobile_Development_In_Titanium/iOS_Platform_Overview/"}},[t._v("iOS Platform Overview")]),t._v(" chapter. In this section, we'll dig just a bit deeper into some iOS specifics. These include iPad-only UI controls, app badges, and integration with the platform's Settings app.")],1),t._v(" "),s("h3",{attrs:{id:"ipad-only-ui-apis"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ipad-only-ui-apis"}},[t._v("#")]),t._v(" iPad-only UI APIs")]),t._v(" "),s("p",[t._v("The iPad includes two UI components that are not available with the iPhone. These are the "),s("a",{attrs:{href:"http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.iPad.Popover-object.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Popover"),s("OutboundLink")],1),t._v(" and "),s("a",{attrs:{href:"http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.UI.iPad.SplitWindow-object.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("SplitWindow"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("h4",{attrs:{id:"popovers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#popovers"}},[t._v("#")]),t._v(" Popovers")]),t._v(" "),s("p",[t._v("You use popovers to present information temporarily, but in a way that does not take over the entire screen like a modal view does. The popover content is layered on top of your existing content in a special window. The popover remains visible until the user taps outside of the popover window or explicitly dismisses it. The Popover is created by the method "),s("code",[t._v("Titanium.UI.iPad.createPopover()")]),t._v(".")]),t._v(" "),s("p",[s("img",{attrs:{src:a(887),alt:"ipadpopover"}})]),t._v(" "),s("p",[t._v("Popovers provide a way for you to display additional information associated with a particular UI component. This is shown in the picture above, in which event repetition options are shown as a row in a table. Within the popover, you can display a view or other component.")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" button "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ti"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createButton")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  title"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Show popover'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  width"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("250")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  height"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  top"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  right"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" popover "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ti"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("iPad"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createPopover")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  width"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("300")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  height"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("250")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  title"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'I\\'m a Popover'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    arrowDirection"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Ti"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("iPad"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("POPOVER_ARROW_DIRECTION_RIGHT")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nbutton"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'click'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  popover"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("show")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    view"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" button"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    animated"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nwin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("button"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("In the preceding code, line 16 creates the association between the button and the popover. It's this line that controls the placement of the popover. It will be placed automatically by iOS according to this association and the arrow direction. In this example, the arrow points to the right, which means the popover will be displayed to the left of the button. If you used POPOVER_ARROW_DIRECTION_UP, the popover would be shown below the button.")]),t._v(" "),s("h4",{attrs:{id:"splitwindows"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#splitwindows"}},[t._v("#")]),t._v(" SplitWindows")]),t._v(" "),s("p",[t._v("A SplitWindow is a window that manages the presentation of two side-by-side view controllers. You use this class to implement a master-detail interface, in which the left-side view presents a list of items and the right-side presents details of the selected item. The SplitView is for use exclusively on iPad devices. The SplitWindow is created by the method "),s("code",[t._v("Titanium.UI.iPad.createSplitWindow()")]),t._v(".")]),t._v(" "),s("p",[s("img",{attrs:{src:a(888),alt:"ipad_splitwindow"}})]),t._v(" "),s("p",[t._v('You cannot control the width of either of the view controllers, and the user cannot resize those "panes." A SplitWindow is a top-level container, which means you don\'t add it to a Ti.UI.Window. The SplitWindow inherits from the Window object.')]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// Window shown in narrower, left "pane"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" masterWin "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ti"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createWindow")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  backgroundColor"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#fff'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmasterWin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Ti"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createLabel")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  text"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Master View'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  top"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  height"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Ti.UI.SIZE'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  font"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    textAlign"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'center'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    fontWeight"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bold'")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// Window shown in wider, right "pane"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" detailWin "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ti"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createWindow")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  backgroundColor"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#dfdfdf'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ndetailWin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Ti"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createLabel")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  text"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Detail View'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  top"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  height"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Ti.UI.SIZE'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  font"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    textAlign"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'center'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    fontWeight"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bold'")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// the split window")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" splitwin "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ti"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("iPad"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createSplitWindow")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    detailView"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" detailWin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    masterView"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" masterWin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    orientationModes"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" Titanium"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("LANDSCAPE_LEFT")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("Titanium"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("LANDSCAPE_RIGHT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nsplitwin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"badges"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#badges"}},[t._v("#")]),t._v(" Badges")]),t._v(" "),s("p",[s("img",{attrs:{src:a(889),alt:"app_badge"}})]),t._v(" "),s("p",[s("img",{attrs:{src:a(890),alt:"tab_badge"}})]),t._v(" "),s("p",[t._v("Tab and app badges are indicators of updates, new messages, and so forth. You can apply these badges, with a numeric value, to your app and to tabs within your app. Doing so is quite simple. For tabs, simply set the "),s("code",[t._v("yourTab.badge")]),t._v(" property equal to some number to show the tab badge icon. For your app, set the "),s("code",[t._v("Ti.UI.iOS.appBadge")]),t._v(" property equal to a number to show the app badge icon. You might do so when your app initializes or shuts down. You could also use a "),s("a",{attrs:{href:"http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.App.iOS.BackgroundService-object.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("background service"),s("OutboundLink")],1),t._v(" to set your app's badge as needed.")]),t._v(" "),s("p",[t._v("To remove either a tab or app badge, set the corresponding property to "),s("code",[t._v("null")]),t._v(". Setting it to 0 would still display the badge, but with the number zero displayed.")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Sets the app's icon badge to 23")]),t._v("\nTi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("iOS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("appBadge "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("23")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" tabGroup "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ti"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createTabGroup")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" win1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ti"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createWindow")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    title"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Window 1'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    backgroundColor"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#fff'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Set the badge for this tab to 10")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" tab1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ti"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createTab")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    icon"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'myIcon.png'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    title"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Tab 1'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    window"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" win1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    badge"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"settings-integration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#settings-integration"}},[t._v("#")]),t._v(" Settings integration")]),t._v(" "),s("p",[t._v("Apple's guidelines specify that app settings should be configurable through the native Settings app rather than through in-app controls. Apple's own apps generally follow this recommendation. For example, you configure Safari's options via Settings rather than within the app. Titanium provides a mechanism for configuration options via the Settings app via a native module.")]),t._v(" "),s("p",[s("img",{attrs:{src:a(891),alt:"settings_bundle"}})]),t._v(" "),s("p",[t._v("With 1.8, the location of the Settings.bundle was changed. Platform-specific resources are supposed to be in the platform-specific directories. That was not the case before, but that's fixed now.")]),t._v(" "),s("p",[t._v("If you're running SDK 1.8+")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("Download a recent copy of the "),s("a",{attrs:{href:"https://github.com/appcelerator/KitchenSink",target:"_blank",rel:"noopener noreferrer"}},[t._v("KitchenSink app"),s("OutboundLink")],1)])]),t._v(" "),s("li",[s("p",[t._v("Copy "),s("strong",[t._v("Settings.bundle")]),t._v(" from "),s("strong",[t._v("platform/iphone")]),t._v(" folder to your project's "),s("strong",[t._v("Resources/platform/iphone")]),t._v(" directory (you might need to create those directories).")])]),t._v(" "),s("li",[s("p",[t._v("In Studio, expand platform/iphone/Settings.bundle and double-click Root.plist to open the Xcode Property List editor.")])]),t._v(" "),s("li",[s("p",[t._v("Edit the settings, as described below.")])]),t._v(" "),s("li",[s("p",[t._v("Clean your project, then build for either the Simulator or device.")])])]),t._v(" "),s("p",[t._v("If you're running SDK <1.8")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("Download a copy of the "),s("a",{attrs:{href:"https://github.com/appcelerator/KitchenSink",target:"_blank",rel:"noopener noreferrer"}},[t._v("KitchenSink app"),s("OutboundLink")],1)])]),t._v(" "),s("li",[s("p",[t._v("Copy "),s("strong",[t._v("Settings.bundle")]),t._v(" from "),s("strong",[t._v("modules/iphone")]),t._v(" folder to your project's "),s("strong",[t._v("Resources/modules/iphone")]),t._v(" directory (you might need to create those directories).")])]),t._v(" "),s("li",[s("p",[t._v("In Studio, expand modules/iphone/Settings.bundle and double-click Root.plist to open the Xcode Property List editor.")])]),t._v(" "),s("li",[s("p",[t._v("Edit the settings, as described below.")])]),t._v(" "),s("li",[s("p",[t._v("Clean your project, then build for either the Simulator or device.")])])]),t._v(" "),s("p",[t._v("In the Xcode Property List editor, you'll see the app's name defined in Item 0. The three preferences defined by KitchenSink appear under Items 1, 2, and 3. You can modify these to suit your needs or add new properties items following the pattern set out in these items.")]),t._v(" "),s("p",[t._v("In your app, you can access the values of these app preferences by using Titanium's "),s("code",[t._v("App Properties module")]),t._v(' with one minor tweak. The name of the app property you retrieve must match the value you set in the Identifier field in the Property List editor. You\'ll note that all the KitchenSink examples include the "_preference" suffix, which you should also include with your identifiers.')]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("Ti.API.info(Ti.App.Properties.getString('name_preference')); // logs the name pref value from KitchenSink example\n")])])]),s("h3",{attrs:{id:"hands-on-practice"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hands-on-practice"}},[t._v("#")]),t._v(" Hands-on Practice")]),t._v(" "),s("h4",{attrs:{id:"goal"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#goal"}},[t._v("#")]),t._v(" Goal")]),t._v(" "),s("p",[t._v("In this activity, you will enable Settings-integration for a simple iOS app and use the preferences configured by the user within the app.")]),t._v(" "),s("h4",{attrs:{id:"resources"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#resources"}},[t._v("#")]),t._v(" Resources")]),t._v(" "),s("p",[t._v("To complete this activity, you will need an Intel-based Mac with the iOS development tools (Xcode) installed.")]),t._v(" "),s("h4",{attrs:{id:"steps"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#steps"}},[t._v("#")]),t._v(" Steps")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("Create a new Titanium Mobile project named AppSettings that targets the iPhone and iPad.")])]),t._v(" "),s("li",[s("p",[t._v("If you have not done so already, download a copy of the KitchenSink project from "),s("a",{attrs:{href:"https://github.com/appcelerator/KitchenSink",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/appcelerator/KitchenSink"),s("OutboundLink")],1),t._v(". Copy the modules folder to your project's directory.")])]),t._v(" "),s("li",[s("p",[t._v("In Studio, expand modules/iphone/Settings.bundle and double-click Root.plist")])]),t._v(" "),s("li",[s("p",[t._v("Edit the name of the app in the plist file to match your app's name. You can leave the other settings options as-is. Save your changes and close Xcode.")])]),t._v(" "),s("li",[s("p",[t._v("Change "),s("code",[t._v("label1")]),t._v(' to display the name the user enters in the Settings app for the Name preference. If no value is set, display the text "Set Name in Settings" in the label.')])]),t._v(" "),s("li",[s("p",[t._v("If the \"Enabled\" switch is set to Yes (on) , display an ImageView that contains the KS_nav_ui.png graphic. If it's set to No (off) , don't display the image. You can use the "),s("code",[t._v("Ti.App.Properties.getBool()")]),t._v(" method for this purpose.")])]),t._v(" "),s("li",[s("p",[t._v("Build and test your app. After it's installed and run the first time, open the Settings app and configure your name and Enabled value.")])]),t._v(" "),s("li",[s("p",[t._v("Because the app remains running (iOS doesn't fully close an app when you return to the Springboard), you'll need to close and relaunch the simulator or use the Fast App Switcher to kill the app. If using the simulator launched by Studio, using the Fast App Switcher might crash the simulator.")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("Close the AppSettings app, if necessary")])]),t._v(" "),s("li",[s("p",[t._v("Double-click the Home button to display the Fast App Switcher tray.")])]),t._v(" "),s("li",[s("p",[t._v("Press and hold on the AppSetting icon in the tray until it begins to shake. Tap its red minus-sign button to kill the app.")])]),t._v(" "),s("li",[s("p",[t._v('Press Home to leave "edit mode" then press Home again to return to the Springboard.')])]),t._v(" "),s("li",[s("p",[t._v("You can now re-open the app to see the new settings in place.")])])])])]),t._v(" "),s("h3",{attrs:{id:"references-and-further-reading"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#references-and-further-reading"}},[t._v("#")]),t._v(" References and Further Reading")]),t._v(" "),s("ul",[s("li",[s("p",[s("a",{attrs:{href:"http://assets.appcelerator.com.s3.amazonaws.com/app_u/ebook/AppSettings.zip",target:"_blank",rel:"noopener noreferrer"}},[t._v("Finished code"),s("OutboundLink")],1)])]),t._v(" "),s("li",[s("p",[t._v("Apple's "),s("a",{attrs:{href:"http://developer.apple.com/iphone/library/documentation/General/Conceptual/iPadHIG/Introduction/Introduction.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("iPad Human Interface Guidelines"),s("OutboundLink")],1)])]),t._v(" "),s("li",[s("p",[s("a",{attrs:{href:"http://developer.apple.com/library/ios/#documentation/Cocoa/Conceptual/PropertyLists/Introduction/Introduction.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Apple's Introduction to Property Lists"),s("OutboundLink")],1)])]),t._v(" "),s("li",[s("p",[s("a",{attrs:{href:"http://developer.apple.com/library/ios/#samplecode/AppPrefs/Introduction/Intro.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Sample code for create app preferences"),s("OutboundLink")],1),t._v(" (Settings)")])])]),t._v(" "),s("h2",{attrs:{id:"summary"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#summary"}},[t._v("#")]),t._v(" Summary")]),t._v(" "),s("p",[t._v("In this chapter, you learned that iOS offers a handful of UI components that are not available on other platforms. You learned how to implement iPad-specific controls and how to create and save app preferences in the Settings app.")])])}),[],!1,null,null,null);e.default=n.exports},887:function(t,e,a){t.exports=a.p+"assets/img/ipadpopover.a1bbf78b.png"},888:function(t,e,a){t.exports=a.p+"assets/img/ipad_splitwindow.0b9f6fba.png"},889:function(t,e,a){t.exports=a.p+"assets/img/app_badge.1d7b2651.png"},890:function(t,e,a){t.exports=a.p+"assets/img/tab_badge.c207a72a.png"},891:function(t,e,a){t.exports=a.p+"assets/img/settings_bundle.e1d3a7f4.png"}}]);