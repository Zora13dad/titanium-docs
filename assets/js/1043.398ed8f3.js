(window.webpackJsonp=window.webpackJsonp||[]).push([[1043],{1622:function(t,e,a){"use strict";a.r(e);var s=a(21),o=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"titanium-angular-faq"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#titanium-angular-faq"}},[t._v("#")]),t._v(" Titanium Angular - FAQ")]),t._v(" "),a("h2",{attrs:{id:"how-do-i-use-modules-with-titanium-angular"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-do-i-use-modules-with-titanium-angular"}},[t._v("#")]),t._v(" How do I use modules with Titanium Angular?")]),t._v(" "),a("p",[t._v("Configure your modules as described in "),a("RouterLink",{attrs:{to:"/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Titanium_Development/Titanium_Modules/Using_Titanium_Modules/"}},[t._v("Using Titanium Modules")]),t._v(" or, if it has any, follow the specific install instructions of the module itself. After that, you need to do some additional configuration in your Titanium Angular project.")],1),t._v(" "),a("p",[t._v("First, add an entry in Webpack's "),a("a",{attrs:{href:"https://webpack.js.org/configuration/externals/",target:"_blank",rel:"noopener noreferrer"}},[t._v("externals"),a("OutboundLink")],1),t._v(" configuration option to prevent it from trying to bundle any require statements of that native module. For example, if you want to use the "),a("a",{attrs:{href:"#!/api/Modules.Map"}},[t._v("ti.map")]),t._v(" module, add the following to your project's "),a("code",[t._v("webpack.config.js")]),t._v(":")]),t._v(" "),a("p",[a("strong",[t._v("webpack.config.js")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("externals"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ti.map'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'commonjs ti.map'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("Next you need to tell TypeScript about the types of this module. Since Titanium Angular is in a very early stage, it is highly unlikely that a module has TypeScript definitions available now. But you can easily create definitions yourself in two simple steps. Create "),a("code",[t._v("app/src/titanium-modules.d.ts")]),t._v(", and for each module you want to use add a "),a("code",[t._v("declare module")]),t._v(" statement. For example, to declare the ti.map module:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("declare module 'ti.map';\n")])])]),a("p",[t._v("The above will create an empty module definition with the "),a("code",[t._v("any")]),t._v(" type. This is sufficient to get you started working with the module but note that the TypeScript compiler can't assist you with type checks and you won't have code completion for the module.")]),t._v(" "),a("p",[t._v("Finally, reference your module definitions at the top of your "),a("code",[t._v("AppModule.ts")]),t._v(" to let TypeScript know about them.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('/// <reference path="./titanium-modules.d.ts" />\n')])])]),a("p",[t._v("You can now use the module in your code by importing it as usual.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("import * as Map from 'ti.map';\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("💡 Register third-party views as custom template elements")]),t._v(" "),a("p",[t._v("In future versions of Titanium Angular it will be possible to register views from modules as custom elements so you can use them inside a template. For now, you have to configure and add third-party views programmatically in your component class.")])]),t._v(" "),a("h2",{attrs:{id:"can-i-use-hyperloop-together-with-titanium-angular"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#can-i-use-hyperloop-together-with-titanium-angular"}},[t._v("#")]),t._v(" Can I use Hyperloop together with Titanium Angular?")]),t._v(" "),a("p",[t._v("Hyperloop is not supported in this technical preview so far. We are working on this and plan to add Hyperloop support in a later preview release.")]),t._v(" "),a("h2",{attrs:{id:"i-don-t-like-working-with-the-cli-how-can-i-avoid-that"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#i-don-t-like-working-with-the-cli-how-can-i-avoid-that"}},[t._v("#")]),t._v(" I don't like working with the CLI. How can I avoid that?")]),t._v(" "),a("p",[t._v("You can setup a custom task in VS Code that uses the Appc CLI for a more comfortable development flow.")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Select "),a("strong",[t._v("Configure Tasks")]),t._v(" from the global "),a("strong",[t._v("Tasks")]),t._v(" menu or open the "),a("strong",[t._v("Command Pallete")]),t._v(" (⇧⌘P).")])]),t._v(" "),a("li",[a("p",[t._v("Choose "),a("strong",[t._v("Task: Configure Task")]),t._v(".")])]),t._v(" "),a("li",[a("p",[t._v("Select "),a("strong",[t._v("Create tasks.json file from template")]),t._v(" entry.")])])]),t._v(" "),a("p",[t._v("VS Code will then create and open the "),a("code",[t._v("task.json")]),t._v(" file which you can modify to define your own task. For example, to create a task that will use the Appc CLI to build and run your app in the iOS simulator modify it to look like this.")]),t._v(" "),a("p",[a("strong",[t._v("task.json")])]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// See https://go.microsoft.com/fwlink/?LinkId=733558")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// for the documentation about the tasks.json format")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"version"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2.0.0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tasks"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"label"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Appc run - iOS"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"shell"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"command"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"appc run -p ios"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"group"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"kind"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"build"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"isDefault"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("This will also define the task as the the default build task so t hat it is executed directly when triggering Run Build Task ( ⇧⌘B ). You can also define tasks for other build commands you frequently need. Please refer to the VS Code "),a("a",{attrs:{href:"https://code.visualstudio.com/docs/editor/tasks#_custom-tasks",target:"_blank",rel:"noopener noreferrer"}},[t._v("custom task"),a("OutboundLink")],1),t._v(" documentation for detailed instructions what else you can do with tasks.")]),t._v(" "),a("p",[t._v("Additional Angular and TypeScript plugins are also available for both VS Code and other editors like "),a("a",{attrs:{href:"https://atom.io/packages/atom-typescript",target:"_blank",rel:"noopener noreferrer"}},[t._v("Atom"),a("OutboundLink")],1),t._v(" or "),a("a",{attrs:{href:"https://github.com/Microsoft/TypeScript-Sublime-Plugin",target:"_blank",rel:"noopener noreferrer"}},[t._v("Sublime"),a("OutboundLink")],1),t._v(".")])])}),[],!1,null,null,null);e.default=o.exports}}]);