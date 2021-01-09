(window.webpackJsonp=window.webpackJsonp||[]).push([[1127],{1094:function(e,r,t){"use strict";t.r(r);var a=t(21),o=Object(a.a)({},(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"titanium-sdk-9-2-0-ga-23-september-2020"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#titanium-sdk-9-2-0-ga-23-september-2020"}},[e._v("#")]),e._v(" Titanium SDK 9.2.0.GA - 23 September 2020")]),e._v(" "),t("h2",{attrs:{id:"about-this-release"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#about-this-release"}},[e._v("#")]),e._v(" About this release")]),e._v(" "),t("p",[e._v("Titanium SDK 9.2.0 is a minor release of the SDK, addressing high-priority issues from previous releases.")]),e._v(" "),t("p",[e._v("As of this release, Titanium SDK 9.1.x will not receive updates more than six months after the release of 9.2.0 (2021-03-15). Any needed fixes will be in 9.2.x or later supported releases within the 9.x branch. See "),t("a",{attrs:{href:"https://docs.axway.com/bundle/AMPLIFY_Appcelerator_Services_Overview_allOS_en/page/axway_appcelerator_deprecation_policy.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Axway Appcelerator Deprecation Policy"),t("OutboundLink")],1),e._v(" and "),t("a",{attrs:{href:"https://docs.axway.com/bundle/AMPLIFY_Appcelerator_Services_Overview_allOS_en/page/axway_appcelerator_product_lifecycle.html#AxwayAppceleratorProductLifecycle-NominalLifetimes",target:"_blank",rel:"noopener noreferrer"}},[e._v("Nominal Lifetimes"),t("OutboundLink")],1),e._v(" documents for details.")]),e._v(" "),t("div",{staticClass:"danger custom-block"},[t("p",{staticClass:"custom-block-title"},[e._v("❗️ Warning")]),e._v(" "),t("p",[e._v("With the release of Titanium SDK 9.0.0, we no longer support Node.js 8.X. Node 10.13.0 is the new minimum supported version.")])]),e._v(" "),t("h2",{attrs:{id:"overview"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),t("p",[e._v("Titanium SDK 9.2.0 is primarily focused on providing support for iOS 14 and Xcode 12. Fixing high priority issues, adding support for new APIs, support for using xcframeworks in native modules, as well as a beta for macOS support via Mac Catalyst.")]),e._v(" "),t("h3",{attrs:{id:"macos-support"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#macos-support"}},[e._v("#")]),e._v(" macOS support")]),e._v(" "),t("p",[e._v("This release includes an initial beta for supporting macOS applications via "),t("a",{attrs:{href:"https://developer.apple.com/mac-catalyst/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Mac Catalyst"),t("OutboundLink")],1),e._v(", which allows you to run your iOS application on Mac as if they were apps built for the Mac.")]),e._v(" "),t("p",[e._v("This initial beta mostly focuses on enabling the target and necessary build changes, but most of the core SDK APIs work out of the box however there are a some items worth mentioning:")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("As the application is run in a sandbox, we inject entitlements for certain sandboxed APIs by default. In a future release we will look to detect API usage and inject these automatically")])]),e._v(" "),t("li",[t("p",[e._v("Most core modules have been rebuilt for macOS support, with the notable exception of ti.facebook")])]),e._v(" "),t("li",[t("p",[e._v("Certain APIs that require custom entitlements, such as the KeyChain access in ti.identity or ti.applesignin, currently will not work with the macOS target")])]),e._v(" "),t("li",[t("p",[e._v("Currently there are no new APIs exposed for macOS development such as Menu APIs. As a result apps will feel more like an iPad app currently.")])]),e._v(" "),t("li",[t("p",[e._v("Appcelerator Studio and our editor plugins currently do not expose macOS as a build target, currently the only way to build is to using the CLI via "),t("code",[e._v("[appc run|ti build] -p ios -T macos")])])])]),e._v(" "),t("p",[e._v("We will iterate on the macOS support in the coming releases and when we feel that it's stable enough we will remove it from beta. But we encourage you to give it a spin, and report any issues you might find to us on our "),t("a",{attrs:{href:"http://jira.appcelerator.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("JIRA"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("h3",{attrs:{id:"rebuilding-ios-modules"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rebuilding-ios-modules"}},[e._v("#")]),e._v(" Rebuilding iOS modules")]),e._v(" "),t("p",[e._v('It is not required, but it is heavily recommended to rebuild your native modules with SDK 9.2.0. Not doing so will produce a warning during application build and will lead to build failures when Apple ships the upcoming "Silicon Macs". To build your application to macOS it\'s also required to rebuild the module.')]),e._v(" "),t("p",[e._v("To update your module:")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("Update the "),t("strong",[e._v("titanium.xcconfig")]),e._v(" file with the following")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("Ensure the "),t("strong",[e._v("TITANIUM_SDK_VERSION")]),e._v(" is pointed to a 9.2.0 SDK")])]),e._v(" "),t("li",[t("p",[e._v("Edit the "),t("strong",[e._v("FRAMEWORK_SEARCH_PATHS")]),e._v(" value to be "),t("strong",[e._v('$(inherited) "$(TITANIUM_SDK)/iphone/Frameworks/**"')])])])])]),e._v(" "),t("li",[t("p",[e._v("Update the "),t("strong",[e._v("manifest")]),e._v(" file")]),e._v(" "),t("ol",[t("li",[t("p",[t("strong",[e._v("minsdk")]),e._v(" should be 9.2.0")])]),e._v(" "),t("li",[t("p",[e._v("We recommend bumping the "),t("strong",[e._v("version")]),e._v(" to the next semver major")])])])])]),e._v(" "),t("p",[e._v("For an example of the changes required, see the "),t("a",{attrs:{href:"https://github.com/appcelerator-modules/ti.coremotion/pull/27",target:"_blank",rel:"noopener noreferrer"}},[e._v("PR to update ti.coremotion"),t("OutboundLink")],1)]),e._v(" "),t("h2",{attrs:{id:"community-credits"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#community-credits"}},[e._v("#")]),e._v(" Community Credits")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("Hans Knöchel")]),e._v(" "),t("ul",[t("li",[t("p",[t("a",{attrs:{href:"https://jira.appcelerator.org/browse/TIMOB-28147",target:"_blank",rel:"noopener noreferrer"}},[e._v("TIMOB-28147"),t("OutboundLink")],1),e._v(" - support app clips ("),t("a",{attrs:{href:"https://github.com/appcelerator/titanium_mobile/commit/56b8da4407e44a64da69d6e32e6eb4a1b696772f",target:"_blank",rel:"noopener noreferrer"}},[e._v("56b8da4"),t("OutboundLink")],1),e._v(")")])]),e._v(" "),t("li",[t("p",[e._v("add since version for Ti.UI.Picker.datePickerStyle ("),t("a",{attrs:{href:"https://github.com/appcelerator/titanium_mobile/commit/ab250c32cb52d8a6a0c2aa301a1fcd719ca84868",target:"_blank",rel:"noopener noreferrer"}},[e._v("ab250c3"),t("OutboundLink")],1),e._v(")")])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://jira.appcelerator.org/browse/TIMOB-28104",target:"_blank",rel:"noopener noreferrer"}},[e._v("TIMOB-28104"),t("OutboundLink")],1),e._v(" - support new date picker styles ("),t("a",{attrs:{href:"https://github.com/appcelerator/titanium_mobile/commit/d3cdfc59bd7707ca2d5a1c27420e91f85019cf3f",target:"_blank",rel:"noopener noreferrer"}},[e._v("d3cdfc5"),t("OutboundLink")],1),e._v(")")])])])]),e._v(" "),t("li",[t("p",[e._v("Michael Gangolf")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("add missing line in scrollableview example ("),t("a",{attrs:{href:"https://github.com/appcelerator/titanium_mobile/commit/dbdb869e6fd9003d6801fc2516239f2547b8af90",target:"_blank",rel:"noopener noreferrer"}},[e._v("dbdb869"),t("OutboundLink")],1),e._v(")")])]),e._v(" "),t("li",[t("p",[e._v("fix Ti.UI.Window.extendSafeArea default value text ("),t("a",{attrs:{href:"https://github.com/appcelerator/titanium_mobile/commit/136620c668e4a2eb4501331d97cd228c5bca4aed",target:"_blank",rel:"noopener noreferrer"}},[e._v("136620c"),t("OutboundLink")],1),e._v(")")])])])])]),e._v(" "),t("h2",{attrs:{id:"bug-fixes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bug-fixes"}},[e._v("#")]),e._v(" Bug Fixes")]),e._v(" "),t("h3",{attrs:{id:"android-platform"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#android-platform"}},[e._v("#")]),e._v(" Android platform")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://jira.appcelerator.org/browse/TIMOB-28090",target:"_blank",rel:"noopener noreferrer"}},[e._v("TIMOB-28090"),t("OutboundLink")],1),e._v(" - allow node to clear event loop ("),t("a",{attrs:{href:"https://github.com/appcelerator/titanium_mobile/commit/d6d9a5b8333425366fef96333c51942b0f28d799",target:"_blank",rel:"noopener noreferrer"}},[e._v("d6d9a5b"),t("OutboundLink")],1),e._v(")")])]),e._v(" "),t("h3",{attrs:{id:"ios-platform"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ios-platform"}},[e._v("#")]),e._v(" iOS platform")]),e._v(" "),t("ul",[t("li",[t("p",[t("a",{attrs:{href:"https://jira.appcelerator.org/browse/TIMOB-27132",target:"_blank",rel:"noopener noreferrer"}},[e._v("TIMOB-27132"),t("OutboundLink")],1),e._v(" - fix location of Ti.Filesystem.applicationDataDirectory on macos ("),t("a",{attrs:{href:"https://github.com/appcelerator/titanium_mobile/commit/9caf8475b5c55ffac256c181896809d01a5b62e3",target:"_blank",rel:"noopener noreferrer"}},[e._v("9caf847"),t("OutboundLink")],1),e._v(")")])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://jira.appcelerator.org/browse/TIMOB-28138",target:"_blank",rel:"noopener noreferrer"}},[e._v("TIMOB-28138"),t("OutboundLink")],1),e._v(" - optionally build macos and/or ios arm64 sim ("),t("a",{attrs:{href:"https://github.com/appcelerator/titanium_mobile/commit/ed7d149314e7c0efaa5a3150f87d81c104f6c591",target:"_blank",rel:"noopener noreferrer"}},[e._v("ed7d149"),t("OutboundLink")],1),e._v(")")])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://jira.appcelerator.org/browse/TIMOB-28130",target:"_blank",rel:"noopener noreferrer"}},[e._v("TIMOB-28130"),t("OutboundLink")],1),e._v(" - remove Frameworks directory prior to copying ("),t("a",{attrs:{href:"https://github.com/appcelerator/titanium_mobile/commit/405e1799ac15b2a3983d5af55df11543b241a447",target:"_blank",rel:"noopener noreferrer"}},[e._v("405e179"),t("OutboundLink")],1),e._v(")")])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://jira.appcelerator.org/browse/TIMOB-28099",target:"_blank",rel:"noopener noreferrer"}},[e._v("TIMOB-28099"),t("OutboundLink")],1),e._v(" - remove old tiverify.xcframework references from project ("),t("a",{attrs:{href:"https://github.com/appcelerator/titanium_mobile/commit/cd7c270d538c71deb02c1df8c0be42391b806033",target:"_blank",rel:"noopener noreferrer"}},[e._v("cd7c270"),t("OutboundLink")],1),e._v(")")])]),e._v(" "),t("li",[t("p",[e._v("tweak titanium.xcconfig template to use variables in sdk path ("),t("a",{attrs:{href:"https://github.com/appcelerator/titanium_mobile/commit/7da6dbd54696a004940a0ce4146f7598624eaade",target:"_blank",rel:"noopener noreferrer"}},[e._v("7da6dbd"),t("OutboundLink")],1),e._v(")")])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://jira.appcelerator.org/browse/TIMOB-28130",target:"_blank",rel:"noopener noreferrer"}},[e._v("TIMOB-28130"),t("OutboundLink")],1),e._v(" - unmark product directory to prevent removing required files ("),t("a",{attrs:{href:"https://github.com/appcelerator/titanium_mobile/commit/635d08cc843e098b95e181f792af3ec6993a5df5",target:"_blank",rel:"noopener noreferrer"}},[e._v("635d08c"),t("OutboundLink")],1),e._v(")")])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://jira.appcelerator.org/browse/TIMOB-28143",target:"_blank",rel:"noopener noreferrer"}},[e._v("TIMOB-28143"),t("OutboundLink")],1),e._v(" - use TITANIUM_SDK variable to point at xcframework path in xcode project ("),t("a",{attrs:{href:"https://github.com/appcelerator/titanium_mobile/commit/559b5bca4a2d2f3d58a41018fb61074d157e08dd",target:"_blank",rel:"noopener noreferrer"}},[e._v("559b5bc"),t("OutboundLink")],1),e._v(")")])]),e._v(" "),t("li",[t("p",[e._v("use xcodeTargetOS of 'iphoneos' for mac catalyst ("),t("a",{attrs:{href:"https://github.com/appcelerator/titanium_mobile/commit/60220c72a5d35f6ef231d833d911cc2b7408062e",target:"_blank",rel:"noopener noreferrer"}},[e._v("60220c7"),t("OutboundLink")],1),e._v(")")])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://jira.appcelerator.org/browse/TIMOB-28142",target:"_blank",rel:"noopener noreferrer"}},[e._v("TIMOB-28142"),t("OutboundLink")],1),e._v(" - when building module test project, unzip via spawn to avoid max buffer error ("),t("a",{attrs:{href:"https://github.com/appcelerator/titanium_mobile/commit/345eee1a3a902f812e461ca9aa9906cd84409993",target:"_blank",rel:"noopener noreferrer"}},[e._v("345eee1"),t("OutboundLink")],1),e._v(")")])]),e._v(" "),t("li",[t("p",[e._v("added missing left (“) ("),t("a",{attrs:{href:"https://github.com/appcelerator/titanium_mobile/commit/ff27c9b01f44fee1517ef566af2166f450f07bcd",target:"_blank",rel:"noopener noreferrer"}},[e._v("ff27c9b"),t("OutboundLink")],1),e._v(")")])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://jira.appcelerator.org/browse/TIMOB-28108",target:"_blank",rel:"noopener noreferrer"}},[e._v("TIMOB-28108"),t("OutboundLink")],1),e._v(" - allow Ti.UI.RefreshControl.tintColor to accept a semantic color ("),t("a",{attrs:{href:"https://github.com/appcelerator/titanium_mobile/commit/815a0fcceeda984578b3451e5688e7dcac429376",target:"_blank",rel:"noopener noreferrer"}},[e._v("815a0fc"),t("OutboundLink")],1),e._v(")")])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://jira.appcelerator.org/browse/TIMOB-28113",target:"_blank",rel:"noopener noreferrer"}},[e._v("TIMOB-28113"),t("OutboundLink")],1),e._v(" - do not update properties if transition animation ("),t("a",{attrs:{href:"https://github.com/appcelerator/titanium_mobile/commit/4a835fd1581c7f949a0e05a2ff23b22112b6b7e3",target:"_blank",rel:"noopener noreferrer"}},[e._v("4a835fd"),t("OutboundLink")],1),e._v(")")])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://jira.appcelerator.org/browse/TIMOB-28062",target:"_blank",rel:"noopener noreferrer"}},[e._v("TIMOB-28062"),t("OutboundLink")],1),e._v(" - enable swift development in Titanium ("),t("a",{attrs:{href:"https://github.com/appcelerator/titanium_mobile/commit/2b4aa7b3a0b7a7ef18c0824a2900db5945206871",target:"_blank",rel:"noopener noreferrer"}},[e._v("2b4aa7b"),t("OutboundLink")],1),e._v(")")])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://jira.appcelerator.org/browse/TIMOB-28116",target:"_blank",rel:"noopener noreferrer"}},[e._v("TIMOB-28116"),t("OutboundLink")],1),e._v(" - exclude arm64 arch for sim target if native modules aren't xcframeworks ("),t("a",{attrs:{href:"https://github.com/appcelerator/titanium_mobile/commit/faba6e1c06c8d468b43189c7422ef326617d0585",target:"_blank",rel:"noopener noreferrer"}},[e._v("faba6e1"),t("OutboundLink")],1),e._v(")")])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://jira.appcelerator.org/browse/TIMOB-28042",target:"_blank",rel:"noopener noreferrer"}},[e._v("TIMOB-28042"),t("OutboundLink")],1),e._v(" - exclude arm64 architecture from simulator build ("),t("a",{attrs:{href:"https://github.com/appcelerator/titanium_mobile/commit/178bf926f2ba4955a4e4b0939e47e48d7a64e238",target:"_blank",rel:"noopener noreferrer"}},[e._v("178bf92"),t("OutboundLink")],1),e._v(")")])]),e._v(" "),t("li",[t("p",[e._v("fix Ti.Filesystem.getAsset and getFile on devices ("),t("a",{attrs:{href:"https://github.com/appcelerator/titanium_mobile/commit/f57e9381402f87347447231fd140cf7277fedaf3",target:"_blank",rel:"noopener noreferrer"}},[e._v("f57e938"),t("OutboundLink")],1),e._v(")")])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://jira.appcelerator.org/browse/TIMOB-27985",target:"_blank",rel:"noopener noreferrer"}},[e._v("TIMOB-27985"),t("OutboundLink")],1),e._v(" - fix to add resources and sources file in widget extension ("),t("a",{attrs:{href:"https://github.com/appcelerator/titanium_mobile/commit/4b97cec8ec74d7760c3eff0031ef9b75c2fcaa95",target:"_blank",rel:"noopener noreferrer"}},[e._v("4b97cec"),t("OutboundLink")],1),e._v(")")])]),e._v(" "),t("li",[t("p",[e._v("gaurd code for MediaModule on xcode 11 to avoid compile issues ("),t("a",{attrs:{href:"https://github.com/appcelerator/titanium_mobile/commit/a9dae74ca9a993803bdfef52e261fcae2f0c967d",target:"_blank",rel:"noopener noreferrer"}},[e._v("a9dae74"),t("OutboundLink")],1),e._v(")")])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://jira.appcelerator.org/browse/TIMOB-28112",target:"_blank",rel:"noopener noreferrer"}},[e._v("TIMOB-28112"),t("OutboundLink")],1),e._v(" - guard new picker types ("),t("a",{attrs:{href:"https://github.com/appcelerator/titanium_mobile/commit/fa8f5475e9588e91eebfd3c0a10c0f663c74e8d2",target:"_blank",rel:"noopener noreferrer"}},[e._v("fa8f547"),t("OutboundLink")],1),e._v(")")])]),e._v(" "),t("li",[t("p",[e._v("handle adding Ti.UI.Shortcut when existing array is nil ("),t("a",{attrs:{href:"https://github.com/appcelerator/titanium_mobile/commit/82e011aa1bfff059415ff181e5e4f607ca9fa9b5",target:"_blank",rel:"noopener noreferrer"}},[e._v("82e011a"),t("OutboundLink")],1),e._v(")")])]),e._v(" "),t("li",[t("p",[e._v("modify BOOL to bool for return types to fix JS representation ("),t("a",{attrs:{href:"https://github.com/appcelerator/titanium_mobile/commit/0b251e28075eba2685efd30a18f8d1df915f5647",target:"_blank",rel:"noopener noreferrer"}},[e._v("0b251e2"),t("OutboundLink")],1),e._v(")")])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://jira.appcelerator.org/browse/TIMOB-28100",target:"_blank",rel:"noopener noreferrer"}},[e._v("TIMOB-28100"),t("OutboundLink")],1),e._v(" - only include presentationControllerDidDismiss when photogallery is used ("),t("a",{attrs:{href:"https://github.com/appcelerator/titanium_mobile/commit/14a5e5ba65de2c5b2d656d0aae4b30c4b6b57ef9",target:"_blank",rel:"noopener noreferrer"}},[e._v("14a5e5b"),t("OutboundLink")],1),e._v(")")])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://jira.appcelerator.org/browse/TIMOB-28126",target:"_blank",rel:"noopener noreferrer"}},[e._v("TIMOB-28126"),t("OutboundLink")],1),e._v(" - rely on flush interval ("),t("a",{attrs:{href:"https://github.com/appcelerator/titanium_mobile/commit/0c83fabf6bd8abff5370dfb5208ec35b32cc890b",target:"_blank",rel:"noopener noreferrer"}},[e._v("0c83fab"),t("OutboundLink")],1),e._v(")")])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://jira.appcelerator.org/browse/TIMOB-28091",target:"_blank",rel:"noopener noreferrer"}},[e._v("TIMOB-28091"),t("OutboundLink")],1),e._v(" - update liveview for ios 14 compatibility ("),t("a",{attrs:{href:"https://github.com/appcelerator/titanium_mobile/commit/e89065bad920d25df94f144390912a3bc65190d8",target:"_blank",rel:"noopener noreferrer"}},[e._v("e89065b"),t("OutboundLink")],1),e._v(")")])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://jira.appcelerator.org/browse/TIMOB-28101",target:"_blank",rel:"noopener noreferrer"}},[e._v("TIMOB-28101"),t("OutboundLink")],1),e._v(" - use arc to create corner radius instead of qudratic curve ("),t("a",{attrs:{href:"https://github.com/appcelerator/titanium_mobile/commit/b5ed72357f697293a3d2e2a3ff957ff47bb13fa1",target:"_blank",rel:"noopener noreferrer"}},[e._v("b5ed723"),t("OutboundLink")],1),e._v(")")])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://jira.appcelerator.org/browse/TIMOB-28103",target:"_blank",rel:"noopener noreferrer"}},[e._v("TIMOB-28103"),t("OutboundLink")],1),e._v(" "),t("a",{attrs:{href:"https://jira.appcelerator.org/browse/TIMOB-28110",target:"_blank",rel:"noopener noreferrer"}},[e._v("TIMOB-28110"),t("OutboundLink")],1),e._v(" - view shadow missing with multiple borderRadius values ("),t("a",{attrs:{href:"https://github.com/appcelerator/titanium_mobile/commit/2a38bf33e06831c0c58d489686153acdbf057225",target:"_blank",rel:"noopener noreferrer"}},[e._v("2a38bf3"),t("OutboundLink")],1),e._v(")")])]),e._v(" "),t("li",[t("p",[e._v("fix location of Ti.Filesystem.applicationDataDirectory on macos ("),t("a",{attrs:{href:"https://github.com/appcelerator/titanium_mobile/commit/9caf8475b5c55ffac256c181896809d01a5b62e3",target:"_blank",rel:"noopener noreferrer"}},[e._v("9caf847"),t("OutboundLink")],1),e._v(")")])])]),e._v(" "),t("h3",{attrs:{id:"multiple-platforms"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#multiple-platforms"}},[e._v("#")]),e._v(" Multiple platforms")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://jira.appcelerator.org/browse/TIMOB-28094",target:"_blank",rel:"noopener noreferrer"}},[e._v("TIMOB-28094"),t("OutboundLink")],1),e._v(" - process.toString() ("),t("a",{attrs:{href:"https://github.com/appcelerator/titanium_mobile/commit/a15f7f65a6c738ab444570c7236435245e72d6b2",target:"_blank",rel:"noopener noreferrer"}},[e._v("a15f7f6"),t("OutboundLink")],1),e._v(")")])]),e._v(" "),t("h2",{attrs:{id:"features"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#features"}},[e._v("#")]),e._v(" Features")]),e._v(" "),t("h3",{attrs:{id:"ios-platform-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ios-platform-2"}},[e._v("#")]),e._v(" iOS platform")]),e._v(" "),t("ul",[t("li",[t("p",[t("a",{attrs:{href:"https://jira.appcelerator.org/browse/TIMOB-27986",target:"_blank",rel:"noopener noreferrer"}},[e._v("TIMOB-27986"),t("OutboundLink")],1),e._v(" - support xcframeworks in modules/platform folders ("),t("a",{attrs:{href:"https://github.com/appcelerator/titanium_mobile/commit/b2ccfbf7fb44d5ffa03dd358ad8d5930258be838",target:"_blank",rel:"noopener noreferrer"}},[e._v("b2ccfbf"),t("OutboundLink")],1),e._v(")")])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://jira.appcelerator.org/browse/TIMOB-28077",target:"_blank",rel:"noopener noreferrer"}},[e._v("TIMOB-28077"),t("OutboundLink")],1),e._v(" - added new error constant and updated doc for local network privacy ("),t("a",{attrs:{href:"https://github.com/appcelerator/titanium_mobile/commit/f8de8c08c68398b5b5b871e655455f6d8c529d6e",target:"_blank",rel:"noopener noreferrer"}},[e._v("f8de8c0"),t("OutboundLink")],1),e._v(")")])]),e._v(" "),t("li",[t("p",[e._v("add Ti.Blob.toArrayBuffer() ("),t("a",{attrs:{href:"https://github.com/appcelerator/titanium_mobile/commit/e42bbcbf1295123c3a0f7d8fb94179df89358a28",target:"_blank",rel:"noopener noreferrer"}},[e._v("e42bbcb"),t("OutboundLink")],1),e._v(")")])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://jira.appcelerator.org/browse/TIMOB-28098",target:"_blank",rel:"noopener noreferrer"}},[e._v("TIMOB-28098"),t("OutboundLink")],1),e._v(" - add Ti.Platform.versionPatch ("),t("a",{attrs:{href:"https://github.com/appcelerator/titanium_mobile/commit/a78e9ccf9b937fd9066ba13bbc855f3a37557482",target:"_blank",rel:"noopener noreferrer"}},[e._v("a78e9cc"),t("OutboundLink")],1),e._v(")")])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://jira.appcelerator.org/browse/TIMOB-27984",target:"_blank",rel:"noopener noreferrer"}},[e._v("TIMOB-27984"),t("OutboundLink")],1),e._v(" - allow multiple photo selection ("),t("a",{attrs:{href:"https://github.com/appcelerator/titanium_mobile/commit/04b42929d71cef4abc9c6f891caf78da2f714b81",target:"_blank",rel:"noopener noreferrer"}},[e._v("04b4292"),t("OutboundLink")],1),e._v(")")])]),e._v(" "),t("li",[t("p",[e._v("build modules as xcframeworks (w/ macos support) ("),t("a",{attrs:{href:"https://github.com/appcelerator/titanium_mobile/commit/5b766ae9207255dcc60ee4c04b154cc4b0de04e9",target:"_blank",rel:"noopener noreferrer"}},[e._v("5b766ae"),t("OutboundLink")],1),e._v(")")])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://jira.appcelerator.org/browse/TIMOB-28012",target:"_blank",rel:"noopener noreferrer"}},[e._v("TIMOB-28012"),t("OutboundLink")],1),e._v(" - expose new APIs to customize paging control ("),t("a",{attrs:{href:"https://github.com/appcelerator/titanium_mobile/commit/6acad54cd44535a5efcb1556a8cce9e73032fb65",target:"_blank",rel:"noopener noreferrer"}},[e._v("6acad54"),t("OutboundLink")],1),e._v(")")])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://jira.appcelerator.org/browse/TIMOB-27976",target:"_blank",rel:"noopener noreferrer"}},[e._v("TIMOB-27976"),t("OutboundLink")],1),e._v(" - expose new APIs to use location AccuracyAuthorization ("),t("a",{attrs:{href:"https://github.com/appcelerator/titanium_mobile/commit/a55f9a3fc21bd21c4e610e909d9039748b8b05e1",target:"_blank",rel:"noopener noreferrer"}},[e._v("a55f9a3"),t("OutboundLink")],1),e._v(")")])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://jira.appcelerator.org/browse/TIMOB-27987",target:"_blank",rel:"noopener noreferrer"}},[e._v("TIMOB-27987"),t("OutboundLink")],1),e._v(" - expose new iOS 14 APIs in Ti.UI.WebView ("),t("a",{attrs:{href:"https://github.com/appcelerator/titanium_mobile/commit/840b0d279f79248d1511fc518fa28fda9573be73",target:"_blank",rel:"noopener noreferrer"}},[e._v("840b0d2"),t("OutboundLink")],1),e._v(")")])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://jira.appcelerator.org/browse/TIMOB-27132",target:"_blank",rel:"noopener noreferrer"}},[e._v("TIMOB-27132"),t("OutboundLink")],1),e._v(" - support macos/dist-macappstore targets ("),t("a",{attrs:{href:"https://github.com/appcelerator/titanium_mobile/commit/cfac6e4bf1c6926c3727dcbff5c79221bfb651a2",target:"_blank",rel:"noopener noreferrer"}},[e._v("cfac6e4"),t("OutboundLink")],1),e._v(")")])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://jira.appcelerator.org/browse/TIMOB-28078",target:"_blank",rel:"noopener noreferrer"}},[e._v("TIMOB-28078"),t("OutboundLink")],1),e._v(" - support new APIs timeoutForResource and waitsForConnectivity ("),t("a",{attrs:{href:"https://github.com/appcelerator/titanium_mobile/commit/09f20d28bcfe8b610291f73dad7bb716cd3ac7d3",target:"_blank",rel:"noopener noreferrer"}},[e._v("09f20d2"),t("OutboundLink")],1),e._v(")")])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://jira.appcelerator.org/browse/TIMOB-28116",target:"_blank",rel:"noopener noreferrer"}},[e._v("TIMOB-28116"),t("OutboundLink")],1),e._v(" - use/support/build xcframeworks ("),t("a",{attrs:{href:"https://github.com/appcelerator/titanium_mobile/commit/133527ed517518b13a64cd50a8dd65d61c8b76b7",target:"_blank",rel:"noopener noreferrer"}},[e._v("133527e"),t("OutboundLink")],1),e._v(")")])])]),e._v(" "),t("h3",{attrs:{id:"multiple-platforms-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#multiple-platforms-2"}},[e._v("#")]),e._v(" Multiple platforms")]),e._v(" "),t("ul",[t("li",[t("p",[t("a",{attrs:{href:"https://jira.appcelerator.org/browse/TIMOB-28061",target:"_blank",rel:"noopener noreferrer"}},[e._v("TIMOB-28061"),t("OutboundLink")],1),e._v(" - add os version major/minor int constants ("),t("a",{attrs:{href:"https://github.com/appcelerator/titanium_mobile/commit/3fd8535013797129fbe6ca381692fce5b7ae55da",target:"_blank",rel:"noopener noreferrer"}},[e._v("3fd8535"),t("OutboundLink")],1),e._v(")")])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://jira.appcelerator.org/browse/TIMOB-28061",target:"_blank",rel:"noopener noreferrer"}},[e._v("TIMOB-28061"),t("OutboundLink")],1),e._v(" - add OS_ANDROID/OS_IOS for non-transpiled builds ("),t("a",{attrs:{href:"https://github.com/appcelerator/titanium_mobile/commit/b21c5d79d00e6efad06fcea441712f57c3bbaa01",target:"_blank",rel:"noopener noreferrer"}},[e._v("b21c5d7"),t("OutboundLink")],1),e._v(")")])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://jira.appcelerator.org/browse/TIMOB-28098",target:"_blank",rel:"noopener noreferrer"}},[e._v("TIMOB-28098"),t("OutboundLink")],1),e._v(" - add OS_VERSION_PATCH global ("),t("a",{attrs:{href:"https://github.com/appcelerator/titanium_mobile/commit/86d33df7d7ce85ff596f392e702095c04b3ca296",target:"_blank",rel:"noopener noreferrer"}},[e._v("86d33df"),t("OutboundLink")],1),e._v(")")])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://jira.appcelerator.org/browse/TIMOB-28093",target:"_blank",rel:"noopener noreferrer"}},[e._v("TIMOB-28093"),t("OutboundLink")],1),e._v(" - add uprightWidth/uprightHeight props to Ti.Blob ("),t("a",{attrs:{href:"https://github.com/appcelerator/titanium_mobile/commit/09b4591804f3c15a1854c2d5a48a6c55645af26d",target:"_blank",rel:"noopener noreferrer"}},[e._v("09b4591"),t("OutboundLink")],1),e._v(")")])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://jira.appcelerator.org/browse/TIMOB-28070",target:"_blank",rel:"noopener noreferrer"}},[e._v("TIMOB-28070"),t("OutboundLink")],1),e._v(" - add vscode config files to app templates ("),t("a",{attrs:{href:"https://github.com/appcelerator/titanium_mobile/commit/f8ef53ac276dace006cd40e65f7ffb798c38eb6e",target:"_blank",rel:"noopener noreferrer"}},[e._v("f8ef53a"),t("OutboundLink")],1),e._v(")")])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://jira.appcelerator.org/browse/TIMOB-28030",target:"_blank",rel:"noopener noreferrer"}},[e._v("TIMOB-28030"),t("OutboundLink")],1),e._v(" - add WebView blockedURLs property ("),t("a",{attrs:{href:"https://github.com/appcelerator/titanium_mobile/commit/9006c0044c6657976951ebb5fb1ede4dde0e2d35",target:"_blank",rel:"noopener noreferrer"}},[e._v("9006c00"),t("OutboundLink")],1),e._v(")")])])]),e._v(" "),t("h3",{attrs:{id:"android-platform-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#android-platform-2"}},[e._v("#")]),e._v(" Android platform")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("add Ti.Blob.toArrayBuffer() ("),t("a",{attrs:{href:"https://github.com/appcelerator/titanium_mobile/commit/36e7244f5333f40b108eb7847403e629f98ff57f",target:"_blank",rel:"noopener noreferrer"}},[e._v("36e7244"),t("OutboundLink")],1),e._v(")")])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://jira.appcelerator.org/browse/TIMOB-28098",target:"_blank",rel:"noopener noreferrer"}},[e._v("TIMOB-28098"),t("OutboundLink")],1),e._v(" - add Ti.Platform.versionPatch ("),t("a",{attrs:{href:"https://github.com/appcelerator/titanium_mobile/commit/587ddea90acf9a5660f6f5499186a09366aaf26c",target:"_blank",rel:"noopener noreferrer"}},[e._v("587ddea"),t("OutboundLink")],1),e._v(")")])]),e._v(" "),t("li",[t("p",[e._v("support converting byte[] to ArrayBuffer ("),t("a",{attrs:{href:"https://github.com/appcelerator/titanium_mobile/commit/9e77600acbaed9dd7d2d301c9fec3687bcf6a77b",target:"_blank",rel:"noopener noreferrer"}},[e._v("9e77600"),t("OutboundLink")],1),e._v(")")])])]),e._v(" "),t("h2",{attrs:{id:"performance-improvements"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#performance-improvements"}},[e._v("#")]),e._v(" Performance Improvements")]),e._v(" "),t("h3",{attrs:{id:"multiple-platforms-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#multiple-platforms-3"}},[e._v("#")]),e._v(" Multiple platforms")]),e._v(" "),t("ul",[t("li",[e._v("make buffer shim more efficient ("),t("a",{attrs:{href:"https://github.com/appcelerator/titanium_mobile/commit/9efe8742508abc1ce40f35d8add9100e675cbab3",target:"_blank",rel:"noopener noreferrer"}},[e._v("9efe874"),t("OutboundLink")],1),e._v(")")])]),e._v(" "),t("h2",{attrs:{id:"sdk-module-versions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sdk-module-versions"}},[e._v("#")]),e._v(" SDK Module Versions")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("Module")]),e._v(" "),t("th",[e._v("Android version")]),e._v(" "),t("th",[e._v("iOS Version")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("facebook")]),e._v(" "),t("td",[e._v("10.0.0")]),e._v(" "),t("td",[e._v("9.0.0")])]),e._v(" "),t("tr",[t("td",[e._v("ti.cloudpush")]),e._v(" "),t("td",[e._v("7.1.0")]),e._v(" "),t("td",[e._v("n/a")])]),e._v(" "),t("tr",[t("td",[e._v("ti.map")]),e._v(" "),t("td",[e._v("5.0.1")]),e._v(" "),t("td",[e._v("4.0.0")])]),e._v(" "),t("tr",[t("td",[e._v("ti.webdialog")]),e._v(" "),t("td",[e._v("2.0.0")]),e._v(" "),t("td",[e._v("2.0.0")])]),e._v(" "),t("tr",[t("td",[e._v("ti.playservices")]),e._v(" "),t("td",[e._v("17.1.1")]),e._v(" "),t("td",[e._v("n/a")])]),e._v(" "),t("tr",[t("td",[e._v("ti.identity")]),e._v(" "),t("td",[e._v("3.0.2")]),e._v(" "),t("td",[e._v("2.0.0")])]),e._v(" "),t("tr",[t("td",[e._v("urlSession")]),e._v(" "),t("td",[e._v("n/a")]),e._v(" "),t("td",[e._v("3.0.0")])]),e._v(" "),t("tr",[t("td",[e._v("ti.coremotion")]),e._v(" "),t("td",[e._v("n/a")]),e._v(" "),t("td",[e._v("3.0.0")])]),e._v(" "),t("tr",[t("td",[e._v("ti.applesignin")]),e._v(" "),t("td",[e._v("n/a")]),e._v(" "),t("td",[e._v("2.0.0")])]),e._v(" "),t("tr",[t("td",[e._v("ti.cloud")]),e._v(" "),t("td",[e._v("3.2.11")]),e._v(" "),t("td",[e._v("3.2.11")])]),e._v(" "),t("tr",[t("td",[e._v("hyperloop")]),e._v(" "),t("td",[e._v("6.0.0")]),e._v(" "),t("td",[e._v("6.0.0")])])])])])}),[],!1,null,null,null);r.default=o.exports}}]);