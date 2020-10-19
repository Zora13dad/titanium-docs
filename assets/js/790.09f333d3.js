(window.webpackJsonp=window.webpackJsonp||[]).push([[790],{1842:function(e,r,t){"use strict";t.r(r);var a=t(21),o=Object(a.a)({},(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"appcelerator-cli-7-1-2-rc-18-november-2019"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#appcelerator-cli-7-1-2-rc-18-november-2019"}},[e._v("#")]),e._v(" Appcelerator CLI 7.1.2.RC - 18 November 2019")]),e._v(" "),t("p",[e._v("Appcelerator CLI 7.1.2.RC is a patch release that includes new features, improvements, and bug fixes.")]),e._v(" "),t("p",[e._v("As of this GA release, the previous CLI patch release is no longer supported. End of support for this version will be up to 2020-05-18 or until the next patch release . Note: major and minor releases continue to be supported according to their nominal lifetime. See "),t("RouterLink",{attrs:{to:"/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Deprecation_Policy/"}},[e._v("Axway Appcelerator Deprecation Policy")]),e._v(" and "),t("RouterLink",{attrs:{to:"/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Product_Lifecycle/#nominal-lifetimes"}},[e._v("Nominal Lifetimes")]),e._v(" documents for details.")],1),e._v(" "),t("p",[e._v("Additionally, with this release the formal deprecation of API Builder 3.x begins. Support for API Builder 3.x will cease on 30th April 2020. Use the "),t("a",{attrs:{href:"https://docs.axway.com/bundle/API_Builder_4x_allOS_en/page/api_builder_v3_to_v4_upgrade_guide.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("v3 to v4 upgrade guide to help migrate"),t("OutboundLink")],1),e._v(" your applications to API Builder 4.x.")]),e._v(" "),t("p",[e._v("Component versions")]),e._v(" "),t("p",[e._v("The following components are shipped with CLI 7.1.2:")]),e._v(" "),t("table",{staticClass:"confluenceTable"},[t("thead",{staticClass:" "}),t("tfoot",{staticClass:" "}),t("tbody",{staticClass:" "},[t("tr",[t("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[t("p",[e._v("Alloy")])]),t("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[t("p",[e._v("1.14.3")])])]),t("tr",[t("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[t("p",[e._v("API Builder")])]),t("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[t("p",[e._v("3.2.15")])])]),t("tr",[t("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[t("p",[e._v("Cloud CLI")])]),t("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[t("p",[e._v("2.1.2")])])]),t("tr",[t("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[t("p",[e._v("Titanium CLI")])]),t("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[t("p",[e._v("5.2.2")])])]),t("tr",[t("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[t("p",[e._v("Daemon")])]),t("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[t("p",[e._v("1.1.3")])])])])]),e._v(" "),t("h2",{attrs:{id:"improvements"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#improvements"}},[e._v("#")]),e._v(" Improvements")]),e._v(" "),t("ul",[t("li",[t("p",[t("a",{attrs:{href:"https://jira.appcelerator.org/browse/ALOY-1693",target:"_blank",rel:"noopener noreferrer"}},[e._v("ALOY-1693"),t("OutboundLink")],1),e._v(" - Alloy: Prevent re-opening DB on queries")]),e._v(" "),t("ul",[t("li",[e._v("Added a feature that will cache and maintain database connection to prevent unnecessary "),t("code",[e._v("open()")]),e._v(" and "),t("code",[e._v("close()")]),e._v(" operations")])])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://jira.appcelerator.org/browse/CLI-1369",target:"_blank",rel:"noopener noreferrer"}},[e._v("CLI-1369"),t("OutboundLink")],1),e._v(" - Remove longjohn dependency")])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://jira.appcelerator.org/browse/CLI-1370",target:"_blank",rel:"noopener noreferrer"}},[e._v("CLI-1370"),t("OutboundLink")],1),e._v(" - appc-verify: Amend asset loading for compatibility with asset refactor")]),e._v(" "),t("ul",[t("li",[e._v("Sanitize asset path for compatibility with new asset changes in "),t("a",{attrs:{href:"https://jira.appcelerator.org/browse/TIMOB-26043",target:"_blank",rel:"noopener noreferrer"}},[e._v("TIMOB-26043"),t("OutboundLink")],1)])])])]),e._v(" "),t("h2",{attrs:{id:"fixed-issues"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fixed-issues"}},[e._v("#")]),e._v(" Fixed issues")]),e._v(" "),t("ul",[t("li",[t("p",[t("a",{attrs:{href:"https://jira.appcelerator.org/browse/ALOY-1598",target:"_blank",rel:"noopener noreferrer"}},[e._v("ALOY-1598"),t("OutboundLink")],1),e._v(" - samples/apps/models/binding_no_persistence produces runtime error")])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://jira.appcelerator.org/browse/ALOY-1633",target:"_blank",rel:"noopener noreferrer"}},[e._v("ALOY-1633"),t("OutboundLink")],1),e._v(" - Alloy should assign globals directly rather than using the implicit global scope of app.js")])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://jira.appcelerator.org/browse/ALOY-1701",target:"_blank",rel:"noopener noreferrer"}},[e._v("ALOY-1701"),t("OutboundLink")],1),e._v(" - XML: Unable to use platform namespace restriction on event handlers")])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://jira.appcelerator.org/browse/ALOY-1705",target:"_blank",rel:"noopener noreferrer"}},[e._v("ALOY-1705"),t("OutboundLink")],1),e._v(" - Fix compile issue when using return keyword outside of a function")])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://jira.appcelerator.org/browse/ALOY-1706",target:"_blank",rel:"noopener noreferrer"}},[e._v("ALOY-1706"),t("OutboundLink")],1),e._v(" - Compile error if Alloy view filename contains hyphen")])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://jira.appcelerator.org/browse/ALOY-1710",target:"_blank",rel:"noopener noreferrer"}},[e._v("ALOY-1710"),t("OutboundLink")],1),e._v(" - Fix unreferenced variable when compiling code using import syntax")])])]),e._v(" "),t("h2",{attrs:{id:"known-issues"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#known-issues"}},[e._v("#")]),e._v(" Known issues")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://jira.appcelerator.org/browse/DAEMON-306",target:"_blank",rel:"noopener noreferrer"}},[e._v("DAEMON-306"),t("OutboundLink")],1),e._v(" - WatchOS simulators are not shown in Studio")])])])}),[],!1,null,null,null);r.default=o.exports}}]);