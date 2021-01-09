(window.webpackJsonp=window.webpackJsonp||[]).push([[831],{1967:function(e,r,t){"use strict";t.r(r);var o=t(21),a=Object(o.a)({},(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"appcelerator-cli-7-1-0-ga-13-august-2019"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#appcelerator-cli-7-1-0-ga-13-august-2019"}},[e._v("#")]),e._v(" Appcelerator CLI 7.1.0.GA - 13 August 2019")]),e._v(" "),t("p",[e._v("Appcelerator CLI 7.1.0.GA is a minor release that includes new features, improvements, and bug fixes. This release also brings "),t("strong",[e._v("full support for Node 10")]),e._v(" to the Appcelerator CLI.")]),e._v(" "),t("p",[e._v("As of this release, CLI 7.0.x will not be supported six months (2020-02-13) from 7.1.0.GA's release date. See "),t("RouterLink",{attrs:{to:"/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Deprecation_Policy/"}},[e._v("Axway Appcelerator Deprecation Policy")]),e._v(" and "),t("RouterLink",{attrs:{to:"/guide/AMPLIFY_Appcelerator_Services_Overview/Axway_Appcelerator_Product_Lifecycle/#nominal-lifetimes"}},[e._v("Nominal Lifetimes")]),e._v(" documents for details.")],1),e._v(" "),t("h2",{attrs:{id:"component-versions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#component-versions"}},[e._v("#")]),e._v(" Component versions")]),e._v(" "),t("p",[e._v("The following components are shipped with CLI 7.1.0:")]),e._v(" "),t("table",{staticClass:"confluenceTable"},[t("thead",{staticClass:" "}),t("tfoot",{staticClass:" "}),t("tbody",{staticClass:" "},[t("tr",[t("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[t("p",[e._v("Alloy")])]),t("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[t("p",[e._v("1.14.0")])])]),t("tr",[t("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[t("p",[e._v("API Builder")])]),t("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[t("p",[e._v("3.2.13")])])]),t("tr",[t("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[t("p",[e._v("Cloud CLI")])]),t("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[t("p",[e._v("2.1.0")])])]),t("tr",[t("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[t("p",[e._v("Titanium CLI")])]),t("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[t("p",[e._v("5.2.1")])])]),t("tr",[t("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[t("p",[e._v("Daemon")])]),t("td",{staticClass:"confluenceTd",attrs:{rowspan:"1",colspan:"1"}},[t("p",[e._v("1.1.3")])])])])]),e._v(" "),t("h2",{attrs:{id:"new-features"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#new-features"}},[e._v("#")]),e._v(" New features")]),e._v(" "),t("ul",[t("li",[t("p",[t("a",{attrs:{href:"https://jira.appcelerator.org/browse/ALOY-1316",target:"_blank",rel:"noopener noreferrer"}},[e._v("ALOY-1316"),t("OutboundLink")],1),e._v(" - Support use of $.args.* in any XML attribute or TSS property")]),e._v(" "),t("ul",[t("li",[e._v("Values passed in at creation of a view can now be used as values in TSS and XML. For example, if the "),t("strong",[e._v("name")]),e._v(" property was passed in at creation it can be used on a label like "),t("code",[e._v('<Label text="$.args.foo" />')])])])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://jira.appcelerator.org/browse/ALOY-1632",target:"_blank",rel:"noopener noreferrer"}},[e._v("ALOY-1632"),t("OutboundLink")],1),e._v(" - Allow importing a custom template during alloy new")]),e._v(" "),t("ul",[t("li",[e._v("A custom template directory can be provided to the alloy new command "),t("code",[e._v("alloy new . /path/to/template")]),e._v(". This can also be done via the appc cli using the "),t("code",[e._v("--template")]),e._v(" option on "),t("code",[e._v("appc new")]),e._v(" command.")])])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://jira.appcelerator.org/browse/ALOY-1646",target:"_blank",rel:"noopener noreferrer"}},[e._v("ALOY-1646"),t("OutboundLink")],1),e._v(" - Allow platform xml namespaces to be used with xml attributes in Alloy")]),e._v(" "),t("ul",[t("li",[e._v("Attributes set in XML can now be assigned per platform by using the platform name as a prefix. For example: "),t("code",[e._v('<Label ios:text="Hello iOS!" android:text="Hello Android!" />')])])])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://jira.appcelerator.org/browse/ALOY-1363",target:"_blank",rel:"noopener noreferrer"}},[e._v("ALOY-1363"),t("OutboundLink")],1),e._v(" - Add support to set object properties in XML")]),e._v(" "),t("ul",[t("li",[e._v("Previously the only way to set object properties (like "),t("code",[e._v("font.fontFamily")]),e._v(" for a Label) was to use TSS. You can now use dot.notation in XML. For example: "),t("code",[e._v('<Label font.fontFamily="Roboto">Hello</Label>')])])])])]),e._v(" "),t("h2",{attrs:{id:"improvements"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#improvements"}},[e._v("#")]),e._v(" Improvements")]),e._v(" "),t("ul",[t("li",[t("p",[t("a",{attrs:{href:"https://jira.appcelerator.org/browse/ALOY-1505",target:"_blank",rel:"noopener noreferrer"}},[e._v("ALOY-1505"),t("OutboundLink")],1),e._v(" - Add ability to pass cancel attribute to Option element for OptionDialog")]),e._v(" "),t("ul",[t("li",[e._v("Added ability to pass cancel attribute to "),t("code",[e._v("<Option>")]),e._v(" element")])])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://jira.appcelerator.org/browse/ALOY-1612",target:"_blank",rel:"noopener noreferrer"}},[e._v("ALOY-1612"),t("OutboundLink")],1),e._v(" - CLI: Be able to use Alloy source-maps in Safari Debugger / Chrome Dev-Tools")]),e._v(" "),t("ul",[t("li",[e._v("Debugging Alloy applications in Chrome (for Android) or Safari (for iOS) can now be performed on iOS")])])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://jira.appcelerator.org/browse/ALOY-1648",target:"_blank",rel:"noopener noreferrer"}},[e._v("ALOY-1648"),t("OutboundLink")],1),e._v(" - Include BackboneJS v1.4.0")]),e._v(" "),t("ul",[t("li",[e._v("Updated BackboneJS to version 1.4.0")])])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://jira.appcelerator.org/browse/ALOY-1652",target:"_blank",rel:"noopener noreferrer"}},[e._v("ALOY-1652"),t("OutboundLink")],1),e._v(" - CLI: Improve handling of missing directories and files in alloy new")]),e._v(" "),t("ul",[t("li",[e._v("When providing an invalid template directory via the "),t("code",[e._v("alloy new")]),e._v(" command, it now provides better clarification as to what is missing")])])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://jira.appcelerator.org/browse/ALOY-1682",target:"_blank",rel:"noopener noreferrer"}},[e._v("ALOY-1682"),t("OutboundLink")],1),e._v(" - Alloy: MomentJS upgrading to v2.24.0")]),e._v(" "),t("ul",[t("li",[e._v("Updated MomentJS to version 2.24.0")])])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://jira.appcelerator.org/browse/ALOY-1683",target:"_blank",rel:"noopener noreferrer"}},[e._v("ALOY-1683"),t("OutboundLink")],1),e._v(" - Alloy: UnderscoreJS upgrading to v1.9.1")]),e._v(" "),t("ul",[t("li",[e._v("Updated UnderscoreJS to version 1.9.1")])])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://jira.appcelerator.org/browse/CLI-1346",target:"_blank",rel:"noopener noreferrer"}},[e._v("CLI-1346"),t("OutboundLink")],1),e._v(" - Improve the CLI install flow")]),e._v(" "),t("ul",[t("li",[e._v("Improved install process to reduce CLI install time")])])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://jira.appcelerator.org/browse/CLI-1349",target:"_blank",rel:"noopener noreferrer"}},[e._v("CLI-1349"),t("OutboundLink")],1),e._v(" - Support passing a custom template directory to alloy new command")]),e._v(" "),t("ul",[t("li",[e._v("Added support for passing a custom template directory to "),t("code",[e._v("alloy new")]),e._v(" command")])])])]),e._v(" "),t("h2",{attrs:{id:"fixed-issues"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fixed-issues"}},[e._v("#")]),e._v(" Fixed issues")]),e._v(" "),t("ul",[t("li",[t("p",[t("a",{attrs:{href:"https://jira.appcelerator.org/browse/ALOY-1535",target:"_blank",rel:"noopener noreferrer"}},[e._v("ALOY-1535"),t("OutboundLink")],1),e._v(" - iOS: Warning message thrown when using "),t("code",[e._v("<View>")]),e._v(" in "),t("code",[e._v("<AlertDialog>")]),e._v(" (Android-only)")])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://jira.appcelerator.org/browse/ALOY-1653",target:"_blank",rel:"noopener noreferrer"}},[e._v("ALOY-1653"),t("OutboundLink")],1),e._v(" - Runtime error on Android when using optiondialog and not declaring destructive or cancel properties")])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://jira.appcelerator.org/browse/ALOY-1684",target:"_blank",rel:"noopener noreferrer"}},[e._v("ALOY-1684"),t("OutboundLink")],1),e._v(" - Calling sort for a collection does not call the dataFunction as of backbone 1.1.2 and above")])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://jira.appcelerator.org/browse/ALOY-1690",target:"_blank",rel:"noopener noreferrer"}},[e._v("ALOY-1690"),t("OutboundLink")],1),e._v(" - Sourcemaps not being generated for files under lib")])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://jira.appcelerator.org/browse/ALOY-1691",target:"_blank",rel:"noopener noreferrer"}},[e._v("ALOY-1691"),t("OutboundLink")],1),e._v(' - Source maps reports incorrect "file" value"')])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://jira.appcelerator.org/browse/CLI-1233",target:"_blank",rel:"noopener noreferrer"}},[e._v("CLI-1233"),t("OutboundLink")],1),e._v(' - If you build appc-cli with NPM 3.X and Node 6.10.3, then you will get ""listener" argument must be a function"" when creating a mobile project')])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://jira.appcelerator.org/browse/CLI-1330",target:"_blank",rel:"noopener noreferrer"}},[e._v("CLI-1330"),t("OutboundLink")],1),e._v(" - appc use --prerelease -o json will try to download version json")])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://jira.appcelerator.org/browse/CLI-1331",target:"_blank",rel:"noopener noreferrer"}},[e._v("CLI-1331"),t("OutboundLink")],1),e._v(" - Prompting for project details during arrow app creation broken on Node 10 on Windows")])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://jira.appcelerator.org/browse/CLI-1340",target:"_blank",rel:"noopener noreferrer"}},[e._v("CLI-1340"),t("OutboundLink")],1),e._v(" - Login error when using Node 10 in Windows")])])]),e._v(" "),t("h2",{attrs:{id:"known-issues"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#known-issues"}},[e._v("#")]),e._v(" Known issues")]),e._v(" "),t("ul",[t("li",[t("p",[t("a",{attrs:{href:"https://jira.appcelerator.org/browse/ALOY-1696",target:"_blank",rel:"noopener noreferrer"}},[e._v("ALOY-1696"),t("OutboundLink")],1),e._v(" - CLI: Unable to see project files in Chrome debugger on Windows")]),e._v(" "),t("ul",[t("li",[e._v("Debugging in Chrome on Windows does not resolve the project correctly. Workaround: use Studio to debug.")])])])])])}),[],!1,null,null,null);r.default=a.exports}}]);