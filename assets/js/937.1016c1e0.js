(window.webpackJsonp=window.webpackJsonp||[]).push([[937],{1634:function(t,e,i){"use strict";i.r(e);var a=i(21),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h1",{attrs:{id:"contributing-api-documentation"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#contributing-api-documentation"}},[t._v("#")]),t._v(" Contributing API Documentation")]),t._v(" "),i("p",[i("strong",[t._v("Contents")])]),t._v(" "),i("h2",{attrs:{id:"overview"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),i("p",[t._v("This guide describes how to submit changes to the Titanium SDK API documentation.")]),t._v(" "),i("p",[t._v("The process for getting the SDK source and submitting a pull request is identical to the process for code contributions, described in the "),i("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_Guide/Contributing_to_Titanium/Platform_Development/Pull_Request_Guide/"}},[t._v("Pull Request Guide")]),t._v(".")],1),t._v(" "),i("p",[t._v("As with code contributions, you must electronically sign the "),i("a",{attrs:{href:"http://developer.appcelerator.com/cla",target:"_blank",rel:"noopener noreferrer"}},[t._v("Contributors License Agreement (CLA)"),i("OutboundLink")],1),t._v(" before you can contribute documentation or any other materials to the project.")]),t._v(" "),i("h2",{attrs:{id:"editing-api-documentation"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#editing-api-documentation"}},[t._v("#")]),t._v(" Editing API Documentation")]),t._v(" "),i("p",[t._v("The API documentation is stored in the "),i("code",[t._v("apidoc")]),t._v(" folder inside the "),i("a",{attrs:{href:"https://github.com/appcelerator/titanium_mobile",target:"_blank",rel:"noopener noreferrer"}},[t._v("titanium_mobile"),i("OutboundLink")],1),t._v(" repository.")]),t._v(" "),i("p",[t._v("The documentation is written in the Titanium Doc format, TDoc, which is documented in the "),i("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_Guide/Contributing_to_Titanium/Platform_Development/Specs/TDoc_Specification/"}},[t._v("TDoc Specification")]),t._v(".")],1),t._v(" "),i("p",[t._v("API doc contributions should comply with the "),i("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_Guide/Contributing_to_Titanium/Documentation/Titanium_API_Doc_Style_Guide/"}},[t._v("Titanium API Doc Style Guide")]),t._v(".")],1),t._v(" "),i("h2",{attrs:{id:"generating-the-html-api-docs"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#generating-the-html-api-docs"}},[t._v("#")]),t._v(" Generating the HTML API Docs")]),t._v(" "),i("p",[t._v("You can build the basic HTML version of the Titanium docs using the "),i("a",{attrs:{href:"https://www.npmjs.com/package/titanium-docgen",target:"_blank",rel:"noopener noreferrer"}},[t._v("titanium-docgen"),i("OutboundLink")],1),t._v(" tooling, as follows:")]),t._v(" "),i("div",{staticClass:"language-bash extra-class"},[i("pre",{pre:!0,attrs:{class:"language-bash"}},[i("code",[i("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run build:docs\n")])])]),i("p",[t._v("The HTML files are then output to the "),i("code",[t._v("/path/to/titanium_mobile/dist/apidoc")]),t._v(" directory, with the index page at "),i("code",[t._v("dist/apidoc/index.html")]),t._v(".")]),t._v(" "),i("p",[t._v("You might find that some projects such as Titanium native modules don't have this npm script available. In that instance, you can use the following:")]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("npx docgen apidoc -o ./dist\n")])])]),i("h2",{attrs:{id:"validating-api-doc-modifications"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#validating-api-doc-modifications"}},[t._v("#")]),t._v(" Validating API Doc Modifications")]),t._v(" "),i("p",[t._v("After changes have been made to the API Doc source, it's important to verify that the code is free from errors using:")]),t._v(" "),i("div",{staticClass:"language-bash extra-class"},[i("pre",{pre:!0,attrs:{class:"language-bash"}},[i("code",[i("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run lint:docs\n")])])]),i("p",[t._v("You might find that some projects such as Titanium native modules don't have this npm script available. In that instance, you can use the following:")]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("npx tdoc-validate apidoc/\n")])])]),i("h3",{attrs:{id:"validating-on-windows"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#validating-on-windows"}},[t._v("#")]),t._v(" Validating on Windows")]),t._v(" "),i("p",[t._v("On Windows, as Command Line program cannot handle the UTF-8 characters of the validation report, the following error may be displayed:")]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("UnicodeEncodeError: 'charmap' codec can't encode character u'\\u2713' in position 1: character maps to <undefined>\n")])])]),i("p",[t._v("A workaround for this is to only display a simple report, using the following command:")]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("cd /path/to/titanium_mobile/apidoc\npython validate.py --errors-only --style=simple\n")])])]),i("h2",{attrs:{id:"submitting-contributions"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#submitting-contributions"}},[t._v("#")]),t._v(" Submitting Contributions")]),t._v(" "),i("p",[t._v("The process for contributing API Docs is the same as contributing code. Please refer to "),i("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_Guide/Contributing_to_Titanium/Platform_Development/Pull_Request_Guide/"}},[t._v("Pull Request Guide")]),t._v(" for guidance.")],1)])}),[],!1,null,null,null);e.default=n.exports}}]);