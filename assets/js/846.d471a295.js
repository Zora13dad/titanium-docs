(window.webpackJsonp=window.webpackJsonp||[]).push([[846],{1294:function(t,e,a){"use strict";a.r(e);var o=a(21),s=Object(o.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"appcelerator-cli-tasks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#appcelerator-cli-tasks"}},[t._v("#")]),t._v(" Appcelerator CLI Tasks")]),t._v(" "),a("p",[t._v("This document provides information on how to build cloud and mobile applications with Appcelerator CLI.")]),t._v(" "),a("h2",{attrs:{id:"build-cloud-applications"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#build-cloud-applications"}},[t._v("#")]),t._v(" Build cloud applications")]),t._v(" "),a("p",[t._v("For more tasks, see "),a("a",{attrs:{href:"#undefined"}},[t._v("API Builder Tools Project")]),t._v(".")]),t._v(" "),a("h3",{attrs:{id:"create-an-arrow-project"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-an-arrow-project"}},[t._v("#")]),t._v(" Create an Arrow project")]),t._v(" "),a("p",[t._v("To create a new Arrow project, run the "),a("code",[t._v("appc new")]),t._v(" command. The CLI will prompt you to fill in the necessary information to create a project, such as the name of the project. To create a new project with all the information specified in the command, run:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("appc new -t arrow -n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("PROJECT_NAME"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("h3",{attrs:{id:"run-an-arrow-project"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#run-an-arrow-project"}},[t._v("#")]),t._v(" Run an Arrow project")]),t._v(" "),a("p",[t._v("To run an Arrow project locally, run the "),a("code",[t._v("appc run")]),t._v(" command from the project directory.")]),t._v(" "),a("h3",{attrs:{id:"publish-an-arrow-project-to-arrow-cloud"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#publish-an-arrow-project-to-arrow-cloud"}},[t._v("#")]),t._v(" Publish an Arrow project to Arrow Cloud")]),t._v(" "),a("p",[t._v("To deploy your Arrow application to the Arrow Cloud, run the "),a("code",[t._v("appc publish")]),t._v(" command from the project directory.")]),t._v(" "),a("h3",{attrs:{id:"generate-cloud-components"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#generate-cloud-components"}},[t._v("#")]),t._v(" Generate Cloud components")]),t._v(" "),a("p",[t._v("To generate components, such as Models, Connectors, or Block, for your Arrow projects, run the "),a("code",[t._v("appc generate")]),t._v(" command. When prompted for the type of component, select "),a("strong",[t._v("Arrow Component")]),t._v(", then follow the subsequent directions.")]),t._v(" "),a("p",[t._v("The components generated by the command are modular components that need to be published using the "),a("code",[t._v("appc publish")]),t._v(" command, then installed to your Arrow projects using the "),a("code",[t._v("appc install")]),t._v(" command.")]),t._v(" "),a("h2",{attrs:{id:"build-mobile-applications"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#build-mobile-applications"}},[t._v("#")]),t._v(" Build mobile applications")]),t._v(" "),a("p",[t._v("Once you have your development environment correctly configured, you can create and build mobile applications.")]),t._v(" "),a("h3",{attrs:{id:"create-a-alloy-project"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-a-alloy-project"}},[t._v("#")]),t._v(" Create a Alloy project")]),t._v(" "),a("p",[t._v("An alloy project will be created by default when the "),a("code",[t._v("appc new")]),t._v(" command is run. The CLI will prompt you to fill in the necessary information to create a project, such as which platforms the application runs on and the name of the project. To create a new project with all the information specified in the command, run:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("appc new -t app --id "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("APP_ID"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" -n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("APP_NAME"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## Example")]),t._v("\nappc new -t app --id com.appcelerator.sample -n SampleProject\n")])])]),a("p",[t._v("A new app will be created for all supported platforms by default, depending on the operating system.")]),t._v(" "),a("h3",{attrs:{id:"create-a-titanium-classic-project"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-a-titanium-classic-project"}},[t._v("#")]),t._v(" Create a Titanium Classic project")]),t._v(" "),a("p",[t._v("To create a classic Titanium project, follow the same directions when creating an Alloy project, except add the "),a("code",[t._v("--classic")]),t._v(" flag to generate a Titanium classic project.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("appc new -t app --id "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("APP_ID"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" -n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("APP_NAME"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" --classic\n")])])]),a("h3",{attrs:{id:"build-an-alloy-or-titanium-classic-project"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#build-an-alloy-or-titanium-classic-project"}},[t._v("#")]),t._v(" Build an Alloy or Titanium Classic project")]),t._v(" "),a("p",[t._v("To build an Alloy or Titanium project to test on a device, simulator or emulator, run the "),a("code",[t._v("appc run")]),t._v(" command from the project directory. The CLI will prompt you to fill in the necessary information to build the project, such as which platform you want build the project for. More detailed examples are listed below.")]),t._v(" "),a("p",[t._v("Once the application is installed and launched, use native tools to test, debug and profile your application. See "),a("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_How-tos/Debugging_and_Profiling/"}},[t._v("Debugging and Profiling")]),t._v(".")],1),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("⚠️ Warning")]),t._v(" "),a("p",[a("strong",[t._v("SDK version setting precedence")])]),t._v(" "),a("p",[t._v("The CLI checks several settings to see which SDK version to use to build your application. The following is a list of locations in the order of precedence. If an SDK version is not defined in that location, the next location is checked.")]),t._v(" "),a("ol",[a("li",[a("p",[a("code",[t._v("tiapp.xml")]),t._v(" file version specified with the "),a("code",[t._v("sdk-version")]),t._v(" tag.\nTo change this version, manually edit the "),a("code",[t._v("tiapp.xml")]),t._v(" file with a text editor or use Studio.")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("--sdk")]),t._v(" command-line option with the "),a("code",[t._v("appc run")]),t._v(" command.")])]),t._v(" "),a("li",[a("p",[a("code",[t._v("app.sdk")]),t._v(" setting specified with the "),a("code",[t._v("appc ti config")]),t._v(" command.\nTo check the version, run "),a("code",[t._v("appc ti config")]),t._v(" and to change the version, run "),a("code",[t._v("appc ti config app.sdk <sdk_version>")]),t._v(".")])]),t._v(" "),a("li",[a("p",[t._v("SDK select version.\nTo check or change this version, run "),a("code",[t._v("appc ti sdk select")]),t._v(".")])])])]),t._v(" "),a("h4",{attrs:{id:"android-emulator"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#android-emulator"}},[t._v("#")]),t._v(" Android emulator")]),t._v(" "),a("p",[t._v("You need to create an Android emulator or setup Genymotion before running these commands.")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("To create an Android emulator, see "),a("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_How-tos/Debugging_and_Profiling/Native_Android_Debugging_and_Testing_Tools/#creating-an-emulator"}},[t._v("Native Android Debugging and Testing Tools: Creating an emulator")]),t._v(".")],1)]),t._v(" "),a("li",[a("p",[t._v("To setup Genymotion, see "),a("a",{attrs:{href:"#undefined"}},[t._v("Installing Genymotion")]),t._v(".")])])]),t._v(" "),a("p",[t._v("To build for an emulator, run "),a("code",[t._v("appc run -p android")]),t._v(". Because no other options were specified, the CLI launches your default Android emulator and installs the application on it.")]),t._v(" "),a("p",[t._v("To launch a specific Android or Genymotion emulator, add the "),a("code",[t._v("-C <EMULATOR_NAME>")]),t._v(" option.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("appc run -p android -C "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Google Nexus 7 - 4.4.2 - API 19 - 800x1280"')]),t._v("\n")])])]),a("p",[t._v("To retrieve a list of Android or Genymotion emulators, run the "),a("code",[t._v("ti info -p android")]),t._v(" command.")]),t._v(" "),a("h4",{attrs:{id:"android-device"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#android-device"}},[t._v("#")]),t._v(" Android device")]),t._v(" "),a("p",[t._v("To build for an Android device, connect your device to the computer with a USB cable, then run:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("appc run -p android -T device -C "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("DEVICE_ID"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## Example")]),t._v("\nappc run -p android -T device -C deadbeef\n")])])]),a("h4",{attrs:{id:"ios-simulator"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ios-simulator"}},[t._v("#")]),t._v(" iOS simulator")]),t._v(" "),a("p",[t._v("To build for an iOS simulator, run "),a("code",[t._v("appc run -p ios")]),t._v(". Because no other options were specified, the CLI launches the application on the default iOS simulator.")]),t._v(" "),a("p",[t._v("To use a specific simulator, add the "),a("code",[t._v("-C <DEVICE_UDID>")]),t._v(" option.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("appc run -p ios -C "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"D27F9E87-7E09-48D8-9DD1-10277A0B51A"')]),t._v("\n")])])]),a("p",[t._v("To retrieve the simulator's UDID, run the "),a("code",[t._v("appc ti info -p ios")]),t._v(" command.")]),t._v(" "),a("h4",{attrs:{id:"ios-device"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ios-device"}},[t._v("#")]),t._v(" iOS device")]),t._v(" "),a("p",[t._v("Before deploying to an iOS device for testing, you need to generate a development certificate and development provisioning profile. See "),a("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_Guide/Preparing_for_Distribution/Deploying_to_iOS_devices/"}},[t._v("Deploying to iOS devices")]),t._v(".")],1),t._v(" "),a("p",[t._v("The CLI allows you to install your application either to iTunes or directly to the device connected to your computer with a USB cable. If you select to install to iTunes, you need to sync your device to iTunes in order to install the application.")]),t._v(" "),a("p",[t._v("To build for an iOS device, run:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("appc run -p ios -T device  -C "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("DEVICE_UDID"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-V "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<DEVELOPER_CERTIFICATE_NAME>"')]),t._v("  -P "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("PROVISIONING_PROFILE_UUID"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## Example")]),t._v("\nappc run -p ios -T device -C itunes -V "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Loretta Martin (GE7BAC5)"')]),t._v(" -P "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"11111111-2222-3333-4444-555555555555"')]),t._v("\nappc run -p ios -T device -C "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"iOS Device"')]),t._v(" -V "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Loretta Martin (GE7BAC5)"')]),t._v(" -P "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"11111111-2222-3333-4444-555555555555"')]),t._v("\n")])])]),a("p",[t._v("If you omit the "),a("code",[t._v("-V")]),t._v(" and "),a("code",[t._v("-P")]),t._v(" options, the CLI will prompt you with options. You can also retrieve the information from Xcode's Devices window or with the "),a("code",[t._v("appc ti info -p ios")]),t._v(" command.")]),t._v(" "),a("h4",{attrs:{id:"windows-phone-emulator"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#windows-phone-emulator"}},[t._v("#")]),t._v(" Windows Phone emulator")]),t._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[t._v("❗️ Warning")]),t._v(" "),a("p",[t._v("Support for Windows 8.1 and Windows Phone SDKs has been deprecated as of SDK 6.3.0.GA and has be removed in SDK 7.0.0.GA.")])]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("⚠️ Warning")]),t._v(" "),a("p",[t._v("Windows Phone emulator requires CLI and SDK 4.1.0 or later.")])]),t._v(" "),a("p",[t._v("To build for a Windows Phone emulator, you need to obtain your Windows publisher ID. After you have created your Windows Dev Center account, log in to "),a("a",{attrs:{href:"https://dev.windowsphone.com/en-us/Account/Summary",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://dev.windowsphone.com/en-us/Account/Summary"),a("OutboundLink")],1),t._v(" to get your publish GUID.")]),t._v(" "),a("p",[t._v("To build for a Windows Phone emulator, run:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("appc run -p windows "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-C "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("DEVICE_UDID"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" -I "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("WINDOWS_PUBLISHER_ID"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## Example")]),t._v("\nappc run -p windows -C "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),t._v("-1-1 -I "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"CN=00000000-0000-1000-8000-000000000000"')]),t._v("\n")])])]),a("p",[t._v("If you omit any of the optional parameters, the CLI will prompt you with options.")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("⚠️ Windows Phone Publisher GUID")]),t._v(" "),a("p",[t._v("Prior to Release 5.0.0, you need to pass the "),a("code",[t._v("-G")]),t._v(" option with your Windows Phone Publisher GUID rather than using the "),a("code",[t._v("-I")]),t._v(" option with your Windows Publisher ID.")])]),t._v(" "),a("h4",{attrs:{id:"windows-phone-device"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#windows-phone-device"}},[t._v("#")]),t._v(" Windows Phone device")]),t._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[t._v("❗️ Warning")]),t._v(" "),a("p",[t._v("Support for Windows 8.1 and Windows Phone SDKs has been deprecated as of SDK 6.3.0.GA and has be removed in SDK 7.0.0.GA.")])]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("⚠️ Warning")]),t._v(" "),a("p",[t._v("Windows Phone emulator requires CLI and SDK 4.1.0 or later.")])]),t._v(" "),a("p",[t._v("To build for a Windows Phone emulator, you need to obtain your Windows publisher ID. After you have created your Windows Dev Center account, log in to "),a("a",{attrs:{href:"https://dev.windowsphone.com/en-us/Account/Summary",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://dev.windowsphone.com/en-us/Account/Summary"),a("OutboundLink")],1),t._v(" to get your publish GUID.")]),t._v(" "),a("p",[t._v("To deploy to a Windows Phone device, connect the device to your computer with a USB cable, then run:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("appc run -p windows -T wp-device "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-C "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("DEVICE_UDID"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" -I "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("WINDOWS_PUBLISHER_ID"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## Example")]),t._v("\nappc run -p windows -T wp-device -C "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" -I "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"CN=00000000-0000-1000-8000-000000000000"')]),t._v("\n")])])]),a("p",[t._v("If you omit any of the optional parameters, the CLI will prompt you with options.")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("⚠️ Windows Phone Publisher GUID")]),t._v(" "),a("p",[t._v("Prior to Release 5.0.0, you need to pass the "),a("code",[t._v("-G")]),t._v(" option with your Windows Phone Publisher GUID rather than using the "),a("code",[t._v("-I")]),t._v(" option with your Windows Publisher ID.")])]),t._v(" "),a("h4",{attrs:{id:"windows-computer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#windows-computer"}},[t._v("#")]),t._v(" Windows computer")]),t._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[t._v("❗️ Warning")]),t._v(" "),a("p",[t._v("Support for Windows 8.1 and Windows Phone SDKs has been deprecated as of SDK 6.3.0.GA and has be removed in SDK 7.0.0.GA.")])]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("⚠️ Warning")]),t._v(" "),a("p",[t._v("Windows Phone emulator requires CLI and SDK 4.1.0 or later.")])]),t._v(" "),a("p",[t._v("To deploy the application to your local Windows machine, you will need a certificate. If you do not have a certificate, the CLI will launch the certificate maker for your to create one.")]),t._v(" "),a("p",[t._v("To deploy to your local machine, run:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("appc run -p windows -T ws-local "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-R "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("PFX_CERTIFICATE_FILE"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" -P "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("PFX_PASSWORD"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" -I "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("WINDOWS_PUBLISHER_ID"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("p",[t._v("If you omit any of the optional parameters, the CLI will prompt you with options. Prior to Release 5.0.0, the "),a("code",[t._v("-I")]),t._v(" option was not required.")]),t._v(" "),a("h3",{attrs:{id:"package-an-application"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#package-an-application"}},[t._v("#")]),t._v(" Package an application")]),t._v(" "),a("p",[t._v("To package a mobile application, run the "),a("code",[t._v("appc run")]),t._v(" command from the project directory.")]),t._v(" "),a("h4",{attrs:{id:"google-play-apk"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#google-play-apk"}},[t._v("#")]),t._v(" Google Play APK")]),t._v(" "),a("p",[t._v("Before packaging an APK file for distribution, you need to generate a keypair and certificate for your application. See "),a("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_Guide/Preparing_for_Distribution/Distributing_Android_apps/"}},[t._v("Distributing Android apps")]),t._v(".")],1),t._v(" "),a("p",[t._v("To package an APK for Google Play, run:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("appc run -p android -T dist-playstore "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-K "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("KEYSTORE_FILE"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" -P "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("KEYSTORE_PASSWORD"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" -L "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("KEYSTORE_ALIAS"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" -O "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("OUTPUT_DIRECTORY"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## Example")]),t._v("\nappc run -p android -T dist-playstore -K ~/android.keystore -P secret -L foo -O ./dist/\n")])])]),a("p",[t._v("If you omit any of the optional parameters, you will be prompted by the CLI to enter these values. If the password for the private key of the keystore is different from the password for the keystore, add the "),a("code",[t._v("--key-password <KEYPASS>")]),t._v(" option with the password of your private key.")]),t._v(" "),a("h4",{attrs:{id:"ios-ad-hoc-distribution"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ios-ad-hoc-distribution"}},[t._v("#")]),t._v(" iOS ad hoc distribution")]),t._v(" "),a("p",[t._v("Before packaging for the iOS ad hoc distribution, you need to generate a distribution certificate and distribution provisioning profile. See "),a("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_Guide/Preparing_for_Distribution/Distributing_iOS_apps/"}},[t._v("Distributing iOS apps")]),t._v(".")],1),t._v(" "),a("p",[t._v("To package an IPA file for Ad Hoc distribution, run:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("appc run -p ios -T dist-adhoc "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-R "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("DISTRIBUTION_CERTIFICATE_NAME"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" -P "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("PROVISIONING_PROFILE_UUID"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" -O "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("OUTPUT_DIRECTORY"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## Example")]),t._v("\nappc run -p ios -T dist-adhoc -R "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Pseudo, Inc."')]),t._v(" -P "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"FFFFFFFF-EEEE-DDDD-CCCC-BBBBBBBBBBBB"')]),t._v(" -O ./dist/\n")])])]),a("p",[t._v("If you omit any of the optional parameters, the CLI will prompt you with options.")]),t._v(" "),a("h4",{attrs:{id:"itunes-store"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#itunes-store"}},[t._v("#")]),t._v(" iTunes store")]),t._v(" "),a("p",[t._v("Before packaging for the iTunes Store, you need to generate a distribution certificate and distribution provisioning profile, and have an iTunes Connect account. See "),a("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_Guide/Preparing_for_Distribution/Distributing_iOS_apps/"}},[t._v("Distributing iOS apps")]),t._v(".")],1),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("⚠️ Warning")]),t._v(" "),a("p",[t._v("If you are using Mac OS X 10.9 (Mavericks), make sure you grant CLI access to the computer as described in "),a("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_Getting_Started/Installation_and_Configuration/Installing_Platform_SDKs/Installing_the_iOS_SDK/#NoteforMavericks"}},[t._v("Installing the iOS SDK: Note for Mavericks")]),t._v(".")],1)]),t._v(" "),a("p",[t._v("To package an APP bundle for the iTunes store, run:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("appc run -p ios -T dist-appstore "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-R "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("DISTRIBUTION_CERTIFICATE_NAME"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" -P "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("PROVISIONING_PROFILE_UUID"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## Example")]),t._v("\nappc run -p ios -T dist-appstore -R "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Pseudo, Inc."')]),t._v(" -P "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"AAAAAAAA-0000-9999-8888-777777777777"')]),t._v("\n")])])]),a("p",[t._v("The CLI installs the package to Xcode's Organizer and launches Organizer for you to start the submission process.")]),t._v(" "),a("p",[t._v("If you omit any of the optional parameters, the CLI will prompt you with options.")]),t._v(" "),a("h4",{attrs:{id:"windows-phone-store"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#windows-phone-store"}},[t._v("#")]),t._v(" Windows Phone Store")]),t._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[t._v("❗️ Warning")]),t._v(" "),a("p",[t._v("Support for Windows 8.1 and Windows Phone SDKs has been deprecated as of SDK 6.3.0.GA and has be removed in SDK 7.0.0.GA.")])]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("⚠️ Warning")]),t._v(" "),a("p",[t._v("Windows Phone emulator requires CLI and SDK 4.1.0 or later.")])]),t._v(" "),a("p",[t._v("To package for the Windows Phone Store (ARM architecture), you need to obtain your Windows publisher ID. After you have created your Windows Dev Center account, log in to "),a("a",{attrs:{href:"https://dev.windowsphone.com/en-us/Account/Summary",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://dev.windowsphone.com/en-us/Account/Summary"),a("OutboundLink")],1),t._v(" to get your publish GUID.")]),t._v(" "),a("p",[t._v("To package an APPX file for the Windows Phone Store, run:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("appc run -p windows -T dist-phonestore "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-I "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("WINDOWS_PUBLISHER_ID"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" -O "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("OUTPUT_DIRECTORY"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("p",[t._v("If you omit any of the optionals parameters, the CLI will prompt you with options.")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("⚠️ Windows Phone Publisher GUID")]),t._v(" "),a("p",[t._v("Prior to Release 5.0.0, you need to pass the "),a("code",[t._v("-G")]),t._v(" option with your Windows Phone Publisher GUID rather than using the "),a("code",[t._v("-I")]),t._v(" option with your Windows Publisher ID.")])]),t._v(" "),a("h4",{attrs:{id:"windows-store"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#windows-store"}},[t._v("#")]),t._v(" Windows Store")]),t._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[t._v("❗️ Warning")]),t._v(" "),a("p",[t._v("Support for Windows 8.1 and Windows Phone SDKs has been deprecated as of SDK 6.3.0.GA and has be removed in SDK 7.0.0.GA.")])]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("⚠️ Warning")]),t._v(" "),a("p",[t._v("Windows Phone emulator requires CLI and SDK 4.1.0 or later.")])]),t._v(" "),a("p",[t._v("To package for the Windows Store (x86 architecture), you will need a certificate. If you do not have a certificate, the CLI will launch the certificate maker for your to create one.")]),t._v(" "),a("p",[t._v("To package an APPX file for the Windows Store, run:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("appc run -p windows -T dist-winstore "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-I "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("WINDOWS_PUBLISHER_ID"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" -R "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("PFX_CERTIFICATE_FILE"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" -P "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("PFX_PASSWORD"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" -O "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("OUTPUT_DIRECTORY"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("p",[t._v("If you omit any of the optional parameters, the CLI will prompt you with options. Prior to Release 5.0.0, the "),a("code",[t._v("-I")]),t._v(" was not required.")]),t._v(" "),a("h3",{attrs:{id:"clean-your-build-folder"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#clean-your-build-folder"}},[t._v("#")]),t._v(" Clean your build folder")]),t._v(" "),a("p",[t._v("If you run into issues building your application, you may need to clean your build folder. Run the "),a("code",[t._v("appc ti clean")]),t._v(" command or to clean for a specific platform, add the "),a("code",[t._v("-p <PLATFORM>")]),t._v(" option.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("appc ti clean "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-p "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("PLATFORM"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## Examples")]),t._v("\nappc ti clean\nappc ti clean -p ios\n")])])])])}),[],!1,null,null,null);e.default=s.exports}}]);