(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{1418:function(t,e,a){"use strict";a.r(e);var n=a(21),s=Object(n.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"hello-world-tutorial-for-vs-code-extension-for-titanium"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#hello-world-tutorial-for-vs-code-extension-for-titanium"}},[t._v("#")]),t._v(" Hello World Tutorial for VS Code Extension For Titanium")]),t._v(" "),n("p",[t._v('This document provides the necessary information to build the "Hello World" app using the VS Code extension for Titanium.')]),t._v(" "),n("h2",{attrs:{id:"requirements"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[t._v("#")]),t._v(" Requirements")]),t._v(" "),n("p",[t._v("This tutorial assumes that the user has some basic familiarity with VS Code, has an Appcelerator "),n("a",{attrs:{href:"https://www.appcelerator.com/pricing/",target:"_blank",rel:"noopener noreferrer"}},[t._v("account"),n("OutboundLink")],1),t._v(", and has the necessary "),n("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_How-tos/Visual_Studio_Code_Extension_for_Titanium/Setting_Up_Emulators_and_Simulators_For_Titanium/#installing-android-studio,-android-sdk,-and-android-virtual-device"}},[t._v("emulators")]),t._v(" and/or "),n("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_How-tos/Visual_Studio_Code_Extension_for_Titanium/Setting_Up_Emulators_and_Simulators_For_Titanium/#install-ios-simulator"}},[t._v("simulators")]),t._v(" set up on your machine.")],1),t._v(" "),n("h3",{attrs:{id:"android-emulators"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#android-emulators"}},[t._v("#")]),t._v(" Android emulators")]),t._v(" "),n("p",[t._v("After completing "),n("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_How-tos/Visual_Studio_Code_Extension_for_Titanium/Setting_Up_Emulators_and_Simulators_For_Titanium/#installing-android-studio,-android-sdk,-and-android-virtual-device"}},[t._v("emulators")]),t._v(" guide, you'll need to go back into "),n("strong",[t._v("VC Code")]),t._v(", click on the "),n("strong",[t._v("Titanium Explorer")]),t._v(" icon "),n("img",{attrs:{src:a(375),alt:"Titanium_icon"}}),t._v(" and click the "),n("strong",[t._v("Refresh Devices")]),t._v(" icon "),n("img",{attrs:{src:a(401),alt:"Refresh"}}),t._v(" . You should now see the installed emulators for Android.")],1),t._v(" "),n("h3",{attrs:{id:"ios-simulators"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ios-simulators"}},[t._v("#")]),t._v(" iOS simulators")]),t._v(" "),n("p",[t._v("After completing "),n("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_How-tos/Visual_Studio_Code_Extension_for_Titanium/Setting_Up_Emulators_and_Simulators_For_Titanium/#install-ios-simulator"}},[t._v("simulators")]),t._v(" guide, go back to "),n("strong",[t._v("VS Code")]),t._v(" and click on the "),n("strong",[t._v("Titanium Explorer")]),t._v(" icon "),n("img",{attrs:{src:a(375),alt:"Titanium_icon"}}),t._v(" and click the "),n("strong",[t._v("Refresh Devices")]),t._v(" icon "),n("img",{attrs:{src:a(401),alt:"Refresh"}}),t._v(" . You should now see the installed iOS simulators.")],1),t._v(" "),n("h2",{attrs:{id:"set-up-the-project"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#set-up-the-project"}},[t._v("#")]),t._v(" Set up the project")]),t._v(" "),n("ol",[n("li",[n("p",[t._v("Create a "),n("strong",[t._v("new workspace")]),t._v(".")])]),t._v(" "),n("li",[n("p",[t._v("Add a "),n("strong",[t._v("folder")]),t._v(" (create a new one just for this project).")])]),t._v(" "),n("li",[n("p",[t._v("Create a "),n("strong",[t._v("new project")]),t._v(" ("),n("strong",[t._v("cmd/ctrl + shift + p")]),t._v(' and type in "'),n("strong",[t._v("Titanium: Create Titanium Application")]),t._v('" (or just "Titanium") in the command palette). Note: If you\'re not logged into Appcelerator, the wizard will ask you to log in. A terminal will be opened and you can provide your Appcelerator credentials to log in.')]),t._v(" "),n("p",[n("img",{attrs:{src:a(686),alt:"Create_app"}})])]),t._v(" "),n("li",[n("p",[t._v("Enter the "),n("strong",[t._v("name of the app")]),t._v(" of "),n("strong",[n("code",[t._v("Hello World")])]),t._v(".")])]),t._v(" "),n("li",[n("p",[t._v("Enter the name of the "),n("strong",[t._v("application ID")]),t._v(": "),n("strong",[n("code",[t._v("com.appcelerator.helloworld")])])])]),t._v(" "),n("li",[n("p",[n("strong",[t._v("Choose which platform(s)")]),t._v(" you wish to build for and click "),n("strong",[t._v("Ok")]),t._v(". Note: if you pick one or more platforms (Android and iOS), you'll need to ensure that you have all the necessary components installed on your machine to continue with developing and test on those platforms.")]),t._v(" "),n("p",[n("img",{attrs:{src:a(687),alt:"platforms"}})])]),t._v(" "),n("li",[n("p",[n("strong",[t._v("Skip enable services")]),t._v(" for this tutorial as we won't be using it.")])]),t._v(" "),n("li",[n("p",[n("strong",[t._v("Set the directory")]),t._v(" for the project.")])]),t._v(" "),n("li",[n("p",[t._v("Wait a moment while VS Code extension creates the project. You can see the extension working in the bottom right corner.")]),t._v(" "),n("p",[n("img",{attrs:{src:a(688),alt:"working"}})])]),t._v(" "),n("li",[n("p",[t._v("Once the project has been created, VS Code will ask you if you want to open the project. Click "),n("strong",[t._v("Open Project")]),t._v(" and it will open in another window.")])])]),t._v(" "),n("h2",{attrs:{id:"modify-the-app"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#modify-the-app"}},[t._v("#")]),t._v(" Modify the app")]),t._v(" "),n("ol",[n("li",[n("p",[t._v("Open the "),n("strong",[n("code",[t._v("../Hello World/app/")]),t._v("****"),n("code",[t._v("views/index.xml")])]),t._v(" file by clicking on it in the "),n("strong",[t._v("Explorer")]),t._v(" panel.")])]),t._v(" "),n("li",[n("p",[t._v('Let\'s modify this file to say something custom like "Greetings and salutations". In line 3, you should see something like this:')]),t._v(" "),n("div",{staticClass:"language-xml extra-class"},[n("pre",{pre:!0,attrs:{class:"language-xml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Label")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("label"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("onClick")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("doClick"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Hello, World"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("Label")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),n("p",[t._v("Replace it with this:")]),t._v(" "),n("div",{staticClass:"language-xml extra-class"},[n("pre",{pre:!0,attrs:{class:"language-xml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Label")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("label"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("onClick")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("doClick"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Greetings and salutations"),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("Label")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])]),t._v(" "),n("li",[n("p",[n("strong",[t._v("Save")]),t._v(" your changes.")])])]),t._v(" "),n("h2",{attrs:{id:"build-and-test-the-app"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#build-and-test-the-app"}},[t._v("#")]),t._v(" Build and test the app")]),t._v(" "),n("p",[t._v("The last steps involve building and testing the app.")]),t._v(" "),n("ol",[n("li",[n("p",[t._v("Click the "),n("strong",[t._v("Titanium Explorer")]),t._v(" icon "),n("img",{attrs:{src:a(375),alt:"Titanium_icon"}}),t._v(" in the "),n("strong",[t._v("Activity Bar")]),t._v(".")])]),t._v(" "),n("li",[n("p",[t._v("For this tutorial, we'll focus on using an Android emulator (the process for using an iOS simulator is the same). Select Android and pick an emulator. If you don't see any Android emulators, you'll need to ensure that you have Android Studio installed, a recent Android SDK, and Android Virtual Device.")])]),t._v(" "),n("li",[n("p",[t._v("Click the "),n("strong",[t._v("Run")]),t._v(" icon next to the virtual device and wait for a moment while the app builds and installs on the virtual device.")])]),t._v(" "),n("li",[n("p",[t._v("Once the app has launched in the virtual device, tap on the text to see your customized app in action.")])])]),t._v(" "),n("p",[t._v("You may notice that LiveView is enabled by default (eye icon in the toolbar: "),n("img",{attrs:{src:a(689),alt:"LiveView"}}),t._v(" ). LiveView displays updates of your application as you actively add, modify or replace the files in the project. To read more about LiveView, visit the "),n("RouterLink",{attrs:{to:"/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Titanium_Development/LiveView/"}},[t._v("LiveView")]),t._v(" document (this document specifically focuses on Studio but the general concept applies here as well).")],1),t._v(" "),n("p",[n("img",{attrs:{src:a(690),alt:"BuildExplorerAndEmulator"}})])])}),[],!1,null,null,null);e.default=s.exports},375:function(t,e){t.exports="data:image/png;base64,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"},401:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAgCAYAAAB+ZAqzAAADxklEQVR42s1Ya08TQRTdP0N3S7ct76clhECaSCIBCRQwgBJDMMQgRCKgARoBExATKH5CsEiR0A8IpdLwCO/fNfbsdqY7pbvLwlb9cNN02rlz9j7OPbNCXp6D2GGy7CVudwGpr/crnzBJyr+3P8FuYLu7v0hf30sGzumU/x0wh0NkwA4ODsjNzQ2ZmpomHk+hsuZyuf8eMFF0KgdSQNQoMNjq6jdSWlqhrMuyR3mAnAETRUk5RAumpKRMqa2WllaSSCQYMBhSW1fXkALnVfbbDiw/383AVFX5yMjIW7K9vc0ByWanp6ekrS2gaQqnPcDUGlKjhNRMTk6Rs7MzU0BaQ1rTNeexA1i6sBsbn5D9/X1LgNRGCDJQiLrT6Xo4MBQ4HPr9j8nFxcWtQ4+Ojsjc3CcyMPCKtLa2czV2fn5Ourt7NdThYv7MwAlmnQcnFRXVXLfBotEo6ex8RrzeoqxdeXx8TJqamtm62sV80xh1qWAcLdVRMPiRAxUObyQ7sZwdoP4vzWNId0ODn3WiwyEpUwDfy8srSUdHVyqtsnVgNFo+Xy25vLxkoA4PE0oE09wkccw/MzNLKisfaYpc5H6fnZ1Lgo+zSOtFTdCnBlnZODQ0zEVrcPB11s7KJFot24O7sAbA9CEDgS7DeSqYzb61tXWumAsLS1I1I+kCyyxsfFcf8g3zhcgapVMXGD0E5EidhUIh3dlHgaEE9Dp7aWmZ+YpEIoacJuhxFzYVF5dxaRwbG9dVDDic1pteE4XDYeYLDUKb487AUJDYVF3t44AND4+kgFnTWXSUaSMWj8etA6OpBFtfX18zZxhFZm1uFLGNjR/M19bWz/ukMl0ze3t73Lwzekqj6BcVlXKTY3k5ZKjVBLNRhHFDnV1dXSXTW2MpnTSN/f0DXFlghBmNJl1glKkDgU7O4eLiF82YMdZWAI//FRQUk1gsxnygPEDcKsFK1oDRFMB2dqIcuJ6e55ymz2RvHKbVbmB77f6Fhc9sctxrVlJibG/v4ByjVnp7X2QwvYcZXUPzTE8Hub0g6ZqaWl3Ou6PsSWsxXC4yJc/KyldFQUBaa0FCIo2Pv09yVezWHnqDMhOLwl00Pn16ANETgxjMm5sRcnJykvV31NXo6DuN4hAfLq1pIwDc/PyCZQUbj/9Oisg2jQ6T7LuMUBkEw8UCBGkGCJ0IdUIHP9Vmtt+SMq9uuANAz6+vf1cMBAw6mZj4QJqbnzKdT2sqp/dKmtrMu6WeAZBR9+XkFQEiAJCYneAtTAv1FiQr61YilLOXKnbbfwvsD/RAh9Y2EdzLAAAAAElFTkSuQmCC"},686:function(t,e,a){t.exports=a.p+"assets/img/Create_app.8c6e6d8e.png"},687:function(t,e){t.exports="data:image/png;base64,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"},688:function(t,e,a){t.exports=a.p+"assets/img/working.c05ac4a4.png"},689:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAAA2CAYAAACfkiopAAACrElEQVR42u2ZvW/aUBDA88+EMgVwA01TpUOAKkCgbKGkC0OABaVQiXSApiNOOrC4SAyAqMQAC+JDAolPAX/XlbPqysF+xLSpsMMNJyH7fO/97Hv3xd7+vgl2UfYInMAJnMAJnMAJnMAJnMAJnMB3FtzpdEEq9Rnu779DtfoTer0eDIcjqNVqkM/nIZ1Og8/nA5PpxfMAPz5+swStwmKx0CT1eh1OT53GBbdabXB7+w2m06lmaElmsxnkcjk4PLQbC9zlckOr1doYeFXwOKD7GwIcofHsqoG02x3IZr/C+bkfOI4Di8UKfn8AMpnM8l5b9ZnJZCLq6xrc4/EuoYeKzeOLuLz8uDZw4b1Q6IPqSxuNRhAIvNcnOG5M7TzjNbf7nWY7GNhYdoLBoL7A7XYHDAYDVVeNxWIb27u6iqrawi9/dPRaH+DoouVyWXWjGODMZrPiJRUKBej3+6IIgiBeW7XJCo6VSuWfc/2TgCcSCWZUTqVSihTX7XYVengN78l1k8kk0+719aftgjscr5gRHAUjvFyf53mmLs/fKSo9lu54PBbX3hp4sVhcm4cPDiwP9FkpS/rqcl18dp1tXNsw4GpuLkmn0zEO+MnJW5jP5xu4+t0aV+c1uzquiWtvNbhhV8XaIAYouS7HvXyS4HZz80Uf6axUKmlOZ9h4CMIPsQ7v9fri79VmBJ9hpTNMnbpIZ1JuxuJCbaPxeHxje9GoAQoYSbCRwIZCrdRcPeuPNTmGKVkl8Xp9zCYlHA4/2qRcXISM16RIgg3J+rY0+6cttdm4321plnmm0YvOzjzGGEQgPOblnRpEyOtybED+FhozheFGT3LB4UKj0dAM3Gw2IRKJ/Ndp6xbHy1XRjTFoPdvxMv2TQuAETuAETuAETuAETuAETuAETuAE/kB+AQvtgh4j08ADAAAAAElFTkSuQmCC"},690:function(t,e,a){t.exports=a.p+"assets/img/BuildExplorerAndEmulator.b3e9cdb0.png"}}]);