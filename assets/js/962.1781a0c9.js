(window.webpackJsonp=window.webpackJsonp||[]).push([[962],{1755:function(t,e,a){"use strict";a.r(e);var i=a(21),o=Object(i.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"installing-titanium-sdk-continuous-builds"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installing-titanium-sdk-continuous-builds"}},[t._v("#")]),t._v(" Installing Titanium SDK Continuous Builds")]),t._v(" "),a("h2",{attrs:{id:"summary"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#summary"}},[t._v("#")]),t._v(" Summary")]),t._v(" "),a("p",[t._v("To take advantage of bleeding edge functionality and the most recent bug fixes to the Titanium SDKs, without waiting for an official release, you can manually download and install a "),a("strong",[t._v("Continuous Integration Build")]),t._v(" (also known as "),a("em",[t._v("CI Build")]),t._v(" or "),a("em",[t._v("Continuous Build")]),t._v("). Continuous Builds are packages compiled and published automatically when "),a("a",{attrs:{href:"https://github.com/appcelerator/titanium_mobile",target:"_blank",rel:"noopener noreferrer"}},[t._v("Titanium's open source repository"),a("OutboundLink")],1),t._v(" has received a new code commit.")]),t._v(" "),a("div",{staticClass:"danger custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("❗️ Warning")]),t._v(" "),a("p",[t._v("Be aware that only "),a("strong",[t._v("major")]),t._v(" releases of any of our software are officially supported and therefore, by the same token, we cannot accept Jira tickets or investigate problems that result from using a Continuous Build. That said, you may find discussions and workarounds for them in our "),a("a",{attrs:{href:"http://jira.appcelerator.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("Jira bug-tracking system"),a("OutboundLink")],1),t._v(".")])]),t._v(" "),a("h2",{attrs:{id:"obtaining-the-build"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#obtaining-the-build"}},[t._v("#")]),t._v(" Obtaining the build")]),t._v(" "),a("p",[t._v("You can download the latest continuous builds from "),a("a",{attrs:{href:"http://builds.appcelerator.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://builds.appcelerator.com"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[t._v("Use the drop-down menu at the top of the page to select between the existing development branches. The "),a("em",[t._v("master")]),t._v(" branch is the branch currently in active development, and will ultimately become a major release. You can determine the version number associated with this branch by hovering over one of the download links and inspecting the name of the file.")]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("💡 Hint")]),t._v(" "),a("p",[t._v("It's important to compare the SHA1 hash of the downloaded SDK archive with the one displayed on the download page, "),a("strong",[t._v("before you attempt to install it")]),t._v(". Do not install the package if the SHA1 hashes don't match – this may indicate a corrupted package.")]),t._v(" "),a("p",[t._v("If you discover a corrupt package, simply download each previous day's release until you find one that is valid. There is no need to report it to us.")])]),t._v(" "),a("h2",{attrs:{id:"installing-the-build"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installing-the-build"}},[t._v("#")]),t._v(" Installing the build")]),t._v(" "),a("h3",{attrs:{id:"appcelerator-cli-install"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#appcelerator-cli-install"}},[t._v("#")]),t._v(" Appcelerator CLI install")]),t._v(" "),a("p",[t._v("To install a Titanium SDK using the "),a("code",[t._v("appc")]),t._v(" cli, follow these steps:")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("Be sure to log in to the CLI if you are not already logged in ("),a("code",[t._v("appc login")]),t._v(")")])]),t._v(" "),a("li",[a("p",[t._v("Run "),a("code",[t._v("appc ti sdk install -b master")])])]),t._v(" "),a("li",[a("p",[t._v("The command above will install the latest CI build from "),a("code",[t._v("master")]),t._v(" branch. You may substitute branch names seen at "),a("a",{attrs:{href:"http://builds.appcelerator.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://builds.appcelerator.com"),a("OutboundLink")],1),t._v(" to grab bugfix/maintenance CI builds. These are typically of the naming scheme "),a("code",[t._v("\\d+_\\d+_X,")]),t._v("i.e."),a("code",[t._v("7_0_X")])])]),t._v(" "),a("li",[a("p",[t._v("You can view additional command line options by executing:"),a("code",[t._v("appc ti sdk install -h")])])])]),t._v(" "),a("h3",{attrs:{id:"studio-install"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#studio-install"}},[t._v("#")]),t._v(" Studio install")]),t._v(" "),a("p",[t._v("To install a Titanium SDK using Studio, follow these steps:")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("Using a browser, navigate the "),a("a",{attrs:{href:"http://builds.appcelerator.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://builds.appcelerator.com"),a("OutboundLink")],1),t._v(" website and choose the desired branch/release. Right click an SDK archive download link and copy its URL. Be sure to choose the correct zip for your host OS.")])]),t._v(" "),a("li",[a("p",[t._v("From Studio, select the menu item, "),a("strong",[t._v("Help")]),t._v(" > "),a("strong",[t._v("Install Appcelerator SDK...")])])]),t._v(" "),a("li",[a("p",[t._v("The "),a("strong",[t._v("Install")]),t._v(" dialog appears. Select "),a("strong",[t._v("Install From URL")])])]),t._v(" "),a("li",[a("p",[t._v("Paste the link into textbox, then click "),a("strong",[t._v("Finish")])])])]),t._v(" "),a("h3",{attrs:{id:"manual-install"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#manual-install"}},[t._v("#")]),t._v(" Manual install")]),t._v(" "),a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("⚠️ Warning")]),t._v(" "),a("p",[t._v("We strongly recommend that you use Studio or the CLI to manage SDKs. Please see the previous section.")])]),t._v(" "),a("p",[t._v("To manually install a Titanium SDK, follow these steps:")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("Extract the SDK archive file")])]),t._v(" "),a("li",[a("p",[t._v("Move the versioned directory, for example named in the format 6.0.0.v20160702162201, into your Titanium installation folder, which is contingent on your platform, as follows:")])])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Operating System")]),t._v(" "),a("th",[t._v("Target Platform Type")]),t._v(" "),a("th",[t._v("Local Path")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("OS X (Pre-Lion)")]),t._v(" "),a("td",[t._v("Mobile")]),t._v(" "),a("td",[a("code",[t._v("/Library/Application Support/Titanium")])])]),t._v(" "),a("tr",[a("td",[t._v("OS X (Lion+)")]),t._v(" "),a("td",[t._v("Mobile")]),t._v(" "),a("td",[a("code",[t._v("~/Library/Application Support/Titanium")])])]),t._v(" "),a("tr",[a("td",[t._v("Windows 7+")]),t._v(" "),a("td",[t._v("Mobile")]),t._v(" "),a("td",[a("code",[t._v("%ProgramData%\\Titanium\\mobilesdk\\win32")])])]),t._v(" "),a("tr",[a("td",[t._v("Windows XP")]),t._v(" "),a("td",[t._v("Mobile")]),t._v(" "),a("td",[a("code",[t._v("C:\\Documents and Settings\\All Users\\Application Data\\Titanium")])])])])]),t._v(" "),a("ul",[a("li",[t._v("Restart Studio, open the project's "),a("code",[t._v("tiapp.xml")]),t._v(" file, and select the new SDK from the SDK Version drop-down menu")])]),t._v(" "),a("h2",{attrs:{id:"sdk-archive-file-structure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sdk-archive-file-structure"}},[t._v("#")]),t._v(" SDK archive file structure")]),t._v(" "),a("p",[t._v("Especially in corporate environments, it may be necessary to compile Titanium SDKs and make them available on a server. Be aware that Studio requires that the SDK file structure follows this convention:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v(".zip root\n|--mobilesdk\n   |-- osx | linux | win32\n      |-- VERSION.NUMBER\n")])])]),a("p",[t._v("This must be archived as "),a("code",[t._v("mobilesdk-VERSION.NUMBER-OS.zip")]),t._v(".")])])}),[],!1,null,null,null);e.default=o.exports}}]);