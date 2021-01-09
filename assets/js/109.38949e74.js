(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{1731:function(t,e,i){"use strict";i.r(e);var a=i(21),o=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"titanium-sdk-getting-started"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#titanium-sdk-getting-started"}},[t._v("#")]),t._v(" Titanium SDK Getting Started")]),t._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),a("p",[t._v("This guide walks through the steps of installing and configuring Studio and third-party SDKs and tools required to develop native mobile applications with Studio. If you prefer to use your own editor or IDE, you can integrate the Titanium command-line tools into your environment (see "),a("a",{attrs:{href:"#undefined"}},[t._v("Setting up the Titanium CLI")]),t._v(" for instructions).")]),t._v(" "),a("h2",{attrs:{id:"prerequisites"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[t._v("#")]),t._v(" Prerequisites")]),t._v(" "),a("p",[t._v("Your system environment must meet the following requirements to run Studio:")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("Operating System:")]),t._v(" A recent version of Windows or Mac OS X")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("Memory:")]),t._v(" 8 GB RAM minimum system memory (2 GB RAM available memory). 16 GB RAM recommended.")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("Java Runtime:")]),t._v(" Oracle JDK (no other brand of Java is suitable)")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("Node.js:")]),t._v(" Required for the Titanium command-line tools like the CLI, Alloy and AMPLIFY Runtime Services")])])]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("💡 Hint")]),t._v(" "),a("p",[t._v("For Windows, you can use either 32-bit or 64-bit versions of Java JDK. Please refer to "),a("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_Getting_Started/Installation_and_Configuration/Titanium_Compatibility_Matrix/Studio_Java_Support/"}},[t._v("Studio Java Support")]),t._v(" for more information.")],1)]),t._v(" "),a("p",[t._v("For more details, please refer to "),a("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_Getting_Started/Prerequisites/"}},[t._v("Prerequisites")]),t._v(" document.")],1),t._v(" "),a("p",[t._v("For a complete list of compatibility of system environments, dependencies, and other requirements, please review "),a("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_Getting_Started/Installation_and_Configuration/Titanium_Compatibility_Matrix/"}},[t._v("Titanium Compatibility Matrix")]),t._v(" document.")],1),t._v(" "),a("h2",{attrs:{id:"download-and-install-studio"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#download-and-install-studio"}},[t._v("#")]),t._v(" Download and install Studio")]),t._v(" "),a("p",[t._v("To download Studio you must have an AMPLIFY Appcelerator Services account. Visit our "),a("a",{attrs:{href:"http://www.appcelerator.com/signup/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Sign Up"),a("OutboundLink")],1),t._v(" page to create an account.")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Log in to "),a("a",{attrs:{href:"https://platform.axway.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://platform.axway.com/"),a("OutboundLink")],1),t._v(".")])]),t._v(" "),a("li",[a("p",[t._v("Expand the Axway menu "),a("img",{attrs:{src:i(609),alt:"Screen_Shot_2017-12-19_at_11.06.56_AM"}}),t._v(" available at top-left of screen and click on "),a("a",{attrs:{href:"https://platform.axway.com/#/product/studio",target:"_blank",rel:"noopener noreferrer"}},[t._v("App Builder Studio"),a("OutboundLink")],1),t._v(".")])]),t._v(" "),a("li",[a("p",[t._v("Download the installer or ZIP file for your operating system.")])]),t._v(" "),a("li",[a("p",[t._v("Launch the downloaded installer.")])])]),t._v(" "),a("p",[t._v("For detailed install instructions, see "),a("RouterLink",{attrs:{to:"/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Getting_Started/"}},[t._v("Axway Appcelerator Studio Getting Started")]),t._v(".")],1),t._v(" "),a("h3",{attrs:{id:"first-launch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#first-launch"}},[t._v("#")]),t._v(" First Launch")]),t._v(" "),a("p",[t._v("The first time you launch Studio you need to select a workspace, or folder where Titanium stores your project files and IDE preferences.")]),t._v(" "),a("p",[a("img",{attrs:{src:i(610),alt:"workspace"}})]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("💡 Hint")]),t._v(" "),a("p",[t._v("By default, upon each launch, Studio asks you to select a workspace. To hide this dialog on subsequent launches, select the "),a("strong",[t._v("Use this as the default and do not ask again")]),t._v(" option.")])]),t._v(" "),a("p",[t._v("On the Studio launch screen, enter your AMPLIFY Appcelerator Services account credentials and click "),a("strong",[t._v("Login")]),t._v(". Studio remembers your login credentials until you sign out of Studio.")]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("💡 Hint")]),t._v(" "),a("p",[t._v("Studio requires an internet connection to authenticate the user to the Appcelerator cloud. If you are behind a proxy, click "),a("strong",[t._v("Proxy Setup...")]),t._v(" to configure your proxy settings.")])]),t._v(" "),a("h3",{attrs:{id:"installing-the-platform-sdks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installing-the-platform-sdks"}},[t._v("#")]),t._v(" Installing the platform SDKs")]),t._v(" "),a("p",[t._v("To develop native applications with Titanium you need the SDKs and tools for those native platforms installed on your system. For example, to develop Android applications you need the Android SDK and toolchain installed.")]),t._v(" "),a("p",[t._v("The first time you launch Studio the "),a("strong",[t._v("Platform Configuration")]),t._v(" dialog opens. This dialog indicates which platform SDKs are installed and which are not, and lets you easily install individual SDKs. In the following screenshot, the system has none of the native SDKs installed.")]),t._v(" "),a("p",[a("strong",[t._v("To install the platform SDKs")]),t._v(":")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Select the platforms you want to install.")])]),t._v(" "),a("li",[a("p",[t._v("Optionally click "),a("strong",[t._v("Settings")]),t._v(" next to each platform to customize the installation configuration. For more details, see "),a("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_Getting_Started/Installation_and_Configuration/Installing_Platform_SDKs/"}},[t._v("Installing Platform SDKs")]),t._v(".")],1)]),t._v(" "),a("li",[a("p",[t._v("Click "),a("strong",[t._v("Configure")]),t._v(" to start the installation process.")])])]),t._v(" "),a("p",[t._v("Studio begins downloading and installing each SDK you selected, according to the settings you specified. In the case of iOS, Studio launches the App Store application installed on your Mac to the XCode download page.")]),t._v(" "),a("p",[a("img",{attrs:{src:"/images/guide/download/attachments/37540095/PlatformConfigDialog.png",alt:"PlatformConfigDialog"}})]),t._v(" "),a("h3",{attrs:{id:"checking-for-studio-and-sdk-updates"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#checking-for-studio-and-sdk-updates"}},[t._v("#")]),t._v(" Checking for Studio and SDK updates")]),t._v(" "),a("p",[t._v("When Studio launches for the first time, it automatically downloads and installs the latest Titanium SDKs and additional command-line tools. Once complete, confirm that no further updates are pending and that Studio is at the latest version.")]),t._v(" "),a("p",[t._v("From the menu bar, select "),a("strong",[t._v("Help")]),t._v(" > "),a("strong",[t._v("Check for Axway Appcelerator Updates")]),t._v(" to verify that all the official Titanium components are installed and repeat this step until there are no more updates available.")]),t._v(" "),a("h2",{attrs:{id:"first-titanium-app"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#first-titanium-app"}},[t._v("#")]),t._v(" First Titanium app")]),t._v(" "),a("p",[t._v("To create your first Titanium app, please review "),a("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_Getting_Started/Hello_Titanium_App_Tutorial/"}},[t._v("Hello Titanium App Tutorial")]),t._v(".")],1),t._v(" "),a("h2",{attrs:{id:"troubleshooting"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[t._v("#")]),t._v(" Troubleshooting")]),t._v(" "),a("p",[t._v("If you are experiencing problems after following these setup instructions, please follow the more detailed "),a("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_Getting_Started/Installation_and_Configuration/Setting_up_Studio/"}},[t._v("Setting up Studio")]),t._v(" guide.")],1),t._v(" "),a("h2",{attrs:{id:"next-steps"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#next-steps"}},[t._v("#")]),t._v(" Next steps")]),t._v(" "),a("p",[t._v("You can learn more about Titanium by opening the Studio Dashboard, then")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("Watching the Appcelerator University videos")])]),t._v(" "),a("li",[a("p",[t._v("Follow "),a("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_Getting_Started/Creating_Your_First_Titanium_App/"}},[t._v("Creating Your First Titanium App")]),t._v(" to build your first Alloy application")],1)])])])}),[],!1,null,null,null);e.default=o.exports},609:function(t,e){t.exports="data:image/png;base64,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"},610:function(t,e,i){t.exports=i.p+"assets/img/workspace.5c94f1a2.png"}}]);