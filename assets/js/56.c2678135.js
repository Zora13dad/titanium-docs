(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{1982:function(t,a,s){"use strict";s.r(a);var n=s(21),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"titanium-ui-switch"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#titanium-ui-switch"}},[t._v("#")]),t._v(" Titanium.UI.Switch")]),t._v(" "),n("TypeHeader"),t._v(" "),n("h2",{attrs:{id:"overview"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("Android")]),t._v(" "),n("th",[t._v("iOS")]),t._v(" "),n("th",[t._v("Windows")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[n("img",{attrs:{src:s(475),alt:"Android"}})]),t._v(" "),n("td",[n("img",{attrs:{src:s(476),alt:"iOS"}})]),t._v(" "),n("td",[n("img",{attrs:{src:s(477),alt:"Windows"}})])])])]),t._v(" "),n("p",[t._v("The appearance of a "),n("code",[t._v("Switch")]),t._v(" control varies by platform:")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("On Android, a Switch object can be styled either as a switch, checkbox or\ntoggle button based on the "),n("type-link",{attrs:{type:"Titanium.UI.Switch.style"}},[t._v("Titanium.UI.Switch.style")]),t._v(" property. The checkbox style can\noptionally display a label next to the control.")],1)]),t._v(" "),n("li",[n("p",[t._v("On iOS, a Switch appears as an iOS on/off switch and doesn't have any text associated with it.")])])]),t._v(" "),n("p",[t._v("Use the "),n("type-link",{attrs:{type:"Titanium.UI.createSwitch"}},[t._v("Titanium.UI.createSwitch")]),t._v(" method or "),n("strong",[n("code",[t._v("<Switch>")])]),t._v(" Alloy element to create a switch.")],1),t._v(" "),n("h2",{attrs:{id:"examples"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),n("h3",{attrs:{id:"simple-switch-example"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#simple-switch-example"}},[t._v("#")]),t._v(" Simple Switch Example")]),t._v(" "),n("p",[t._v("Create a standard switch, using default values, and output value property on each "),n("code",[t._v("change")]),t._v("\nevent.")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" win "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ti"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("createWindow")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  backgroundColor"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'white'")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" basicSwitch "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ti"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("createSwitch")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  value"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// mandatory property for iOS")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nwin"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("basicSwitch"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nbasicSwitch"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'change'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  Ti"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("API")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("info")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Switch value: '")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" basicSwitch"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nwin"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// print initial value")]),t._v("\nTi"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("API")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("info")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Switch value: '")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" basicSwitch"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("h3",{attrs:{id:"toggle-button-switch-example-android"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#toggle-button-switch-example-android"}},[t._v("#")]),t._v(" Toggle Button Switch Example (Android)")]),t._v(" "),n("p",[t._v("Create a standard (toggle button) switch with a customized title for each on/off state, and\noutput value property on each "),n("code",[t._v("change")]),t._v(" event.")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" win "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ti"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("createWindow")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  backgroundColor"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'white'")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" basicSwitch "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ti"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("createSwitch")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  style"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Ti"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Android"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("SWITCH_STYLE_TOGGLEBUTTON")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  titleOn"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Notifications Enabled'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  titleOff"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Notifications Disabled'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  value"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  width"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" height"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("120")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nwin"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("basicSwitch"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nbasicSwitch"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'change'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  Ti"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("API")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("info")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Switch value: '")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" basicSwitch"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nwin"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("h3",{attrs:{id:"checkbox-switch-example-android"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#checkbox-switch-example-android"}},[t._v("#")]),t._v(" Checkbox Switch Example (Android)")]),t._v(" "),n("p",[t._v("Create a checkbox switch, and output value property on each "),n("code",[t._v("change")]),t._v(" event.")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" win "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ti"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("createWindow")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  backgroundColor"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'white'")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" basicSwitch "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ti"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("createSwitch")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  style"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Ti"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Android"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("SWITCH_STYLE_CHECKBOX")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  textAlign"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("Ti"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("TEXT_ALIGNMENT_CENTER")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  title"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Notifications'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  value"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  width"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("300")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// necessary for textAlign to be effective")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nwin"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("basicSwitch"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nbasicSwitch"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'change'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  Ti"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("API")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("info")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Switch value: '")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" basicSwitch"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nwin"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("h3",{attrs:{id:"alloy-xml-markup"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#alloy-xml-markup"}},[t._v("#")]),t._v(" Alloy XML Markup")]),t._v(" "),n("p",[t._v("Previous simple switch example as an Alloy view.")]),t._v(" "),n("p",[t._v("switchexample.xml:")]),t._v(" "),n("div",{staticClass:"language-xml extra-class"},[n("pre",{pre:!0,attrs:{class:"language-xml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Alloy")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Window")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("win"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("backgroundColor")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("white"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Switch")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("basicSwitch"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("value")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("true"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("onChange")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("outputState"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("Window")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("Alloy")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),n("p",[t._v("switchexample.js:")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("outputState")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    Ti"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("API")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("info")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Switch value: '")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" $"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("basicSwitch"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("ApiDocs")],1)}),[],!1,null,null,null);a.default=e.exports},475:function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGkAAABLCAMAAABEOFk1AAABiVBMVEX////W19fV1tbY2dnr6+v7+/uxsrI5k4TX2Njd3d2539va29v39/fHx8fN1NNQpZpoaGj9+vpnsqno6emysrL9/v3t7e04koPY7uv8/f3u7u7b3Nw3Nze6urq2tra33trBwsLp6Oi/v7+23dmwsLBHnpNycnJfX1/29/fg4ODT1NTLzMypqqqLi4vw7+/j4+O84Nymp6eQkJA4koViY2M9Pj4yMjL7+vry8/PS09O8vb25ubmtrq4+mIyGh4dOT09ISEg7Ozv09vbt9vXj8O7c8O7Z7uzn5+fm5uXQ0NDNzs7Ly8uMx8Cnw7+cnZ1Dm4+Cg4Ntbm5rbGxSUlJAQED++/z3+vvY6ejF5OHA4d67ysjExcW3uLhytq5XqqCVlZU8l4p3d3dpampYWVlWV1f5+fno8vHM5uOy19Or08+dzceVysS1tbVqta1dr6VsrKShoqKZmppMopdDQ0MtLS3v+PfI29i729jR2NfB1NGawr2ev7uGwLqHtK9ksKdpraWdnp4hIiIVFRVVh0rfAAADb0lEQVRYw+3YZ3PaMBjAcYwMlSOnMyI1NqntssMoYY8Qkma12UnbNLsZ3Xvv+cmr1Ifj9gVCLnTc+c9h3vl3EvDowOXk5NTpovwZ5njRBiTF4m72BMwuicjNsQc8rhbdun399rjUfeni/e3QQmh79la3pfGH/UaPVnFXpbGH/ceM+h+Nd1zCLycmJyfP/mg2a0rZWanDkjS5du680bm7zwjUpE6MtyEhQYYcksk9Zao0caGn2YV7CxZpeI0qQW5gPhgHAa8bbtTiFOna9Z4jaXb4mFn2xh2q5E7mV67scssvMsLQlUHQWrp4wSLd/0l6TZNARdlxzxcSS99GykOjLFLPvZBl90KrNAklFFWYySeX86N1Q6Ltntmdz8eOpK0SVcooqjx4ZXFvf0g5Sdk90oRFOv8udLSkt0WaBPoKwXS1ML93UI58Hb1Mk6Szaz3nmt39uJDtPywbmvNjmgQv5Rr1lZHB3Ii7UnhBkUj44sTZZquv5h6Hhm8MLzxe1zz0GQF7k3uLqvzkqRtmkmXINPdwSl6fez+3DvyediYskMmDQ4jjkMw6y7GY0qY1v4jbnOXQ/vlEMAl37iT8N87cvy9xkD1b0pvjdrIhjW09O8HedpRdin74dJq9rWvsEr569RR7V11OTv9RWPKwZ0viBRvxNiCPEHezB6Rfd+YPnRqSWCqNiVLXJSymfDwpJeLuSjhKHKMo7qokHkI+4yFis85LuHToGPlQoBow0t2lTktFwphrSleD3maqrw0JAIAgROQFAhJsJd00GGNNU6q3r5l3pkiTIPckF9mJ9y5FcpFMmFwGUAtJ5C1r0qxSwEeT0JfC7uLojl4IJ5MJZSlZVwFFMt+ndMAiPZiiSWD/AMpLBxWlJiNVScgQcm2uyQ+CFqnKUyQYfx4GqN7oU0Yiu5vkEh5stSaPxjfzaZVan1lwQ6R+IhrLsrDY2FTCQ/MBcnl6CbaQcCpmUmrGaxasTrtoEgjn9ZmVZV0JxgRdScRQ62+upAlTP5zpjcSDgWabvRqmS+r+88ZKRc/XEFDzCUT9j4WPxdLpdEwQeL9ZqtjOjACXa5kZUNbJrsX1S/RZjqP81LTGizZmOQQIktuRJ7nQJAOTpH/pV40j/YYkABvJdiQ96GVv4Ca7NFbPnWQvHGWXiuVeG12WXE5OTpa+A+gqrij/tBUQAAAAAElFTkSuQmCC"},476:function(t,a){t.exports="data:image/png;base64,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"},477:function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIwAAABLCAMAAACV858AAAABCFBMVEUDAwP///83Yv8PDw8LCwvIyMj4+PgSEhIRG0QZGRk4ZP9ycnKTk5M0NDSQkJDw8PBvb285Zv+SkpIYKm8jIyPl5eUGBgYVFRXOzs64uLihoaHi4uJJSUkuLi4pKSn9/f27u7vX19cJCQmioqKIiIheXl4qKirr6+vS0tIfHx9mZmY3NzcsLCwbGxs5Y/zn5+fAwMCdnZ1PT08yMjJCQkIzWOJ6enoTIFX19fVra2tWVlZMTEzc3Nx9fX3v7++urq7KysqXl5diYmJaWlrU1NTExMSNjY3g4OCzs7OEhISBgYE8PDykpKR3d3fk5OSoqKimpqYTIFgRGz4IDSEHChc0XOM1XN0WJWV3fJDnAAADRklEQVRo3u3YaY+aQBjA8bGAdLra7YEzeGCBRU4pItSC933u9j6+/zep2FK3SZudbhXShP+beWI8fhGiyQOysrL+64zlSorr69zp379zQZrJcVe5Fz8rqSfH9PLESTOukjtWqp8cU8utlo+JerYVzo9ZY5osGZ0fU6Y+Pifq68ckMA9fPn10d0+/vCfDWNMwbOP7Yx4Q9OjVaxKMIL7Rhpqmhzh9zEwaur7qmbw2gGlj7HngYxkgWhC1BpUyxg3C7wRU58ceQByLsOWrchoYo89zP0Y0CnzAlS+mI8dZbWAKGN9xcTxflKaUykvMptgWnTAFTE+7oOK52x9AlXcGLJJnvGukgTHpWxis8q6/H4vrt2rymLa2YeN5uoouk+LtR66ytpLHeKUyjOdJUEM/MIZb/gvMoxNhaGZooR9jSyqCe2GekvSZ4L+pqzH2YaAU7QbfB/Ppw0OSPny6G0NVAnFGA2RdadcqijDFA0bckWB6OZECpHHXtzHqb58yKL8tFAquqHjyXvEujH4EYWepAoKsxbpA1mQj2J2W+LO1AX4XbApe0fMEe28Bch3S0WFwNAmGEvavJUtgZVto/kyVQVZWVlZWVlZyobpwjEMg1fBo0YpbTDBiyaNPjrGd3LGxDc0npIW9k2Ng9RaGgVb/kqjhZZAfnRtjKIVnRBXK+atzYwBpcpcYg1B8nAtDN/6MkSmKouOPZpu1GgcA3PVqdvIY1Gybpjnb4QOHNsXqPARwoEtiN3EMrolvdIZf8R0u0li6Hu44MJUqNctIHNPVnHc+Jzzh81t42BgV8P7YzqOvJWkMrGq+HA2qGEwpAAalJQuArIzbyWPQ1WW8LaqPeY+yl07FglBw5yZnJI0x+rwdz6O832sNXwxLE0Ua5h3JRQljfGdya8HYsDqLgJ80ZkvGGSkmSBjT/mXBuIXgpqpED2zHvQTumTsWjKBTeoyjG5hvp4FR2Hg2qw06VUyzurDjuXLpg1QxqBXs4gXjYl5MFwPajlRHkYqaaCH7Txj7/pjjxRl3MUUVR8PDhn7g/AXGLr04xtiIIgzPgmvw2zqSxDCM3i9EFmCKN+weczPyCTC4PNfjpGuslhnCxvoGZGVlZWWl3Tcfxa0hgU957AAAAABJRU5ErkJggg=="}}]);