(window.webpackJsonp=window.webpackJsonp||[]).push([[262],{1052:function(t,e,a){"use strict";a.r(e);var s=a(21),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"modules-https"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#modules-https"}},[t._v("#")]),t._v(" Modules.Https")]),t._v(" "),a("TypeHeader"),t._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),a("p",{staticClass:"note"},[t._v("Note: This feature requires a Pro or Enterprise subscription. More infos "),a("a",{attrs:{href:"https://www.appcelerator.com/pricing/",target:"_blank"}},[t._v("here")]),t._v("!")]),t._v(" "),a("p",[t._v("Use the HTTPS module to create a Security Manager for "),a("code",[t._v("Titanium.Network.HTTPClient")]),t._v("\nthat authenticates a set of HTTPS servers by pinning an HTTPS server's URL to its\npublic key contained in the certificate.")]),t._v(" "),a("p",[t._v("The X.509 certificate files can have any name and extension you\nwish, but they must be in DER binary format.")]),t._v(" "),a("p",[t._v("The security manager will guarantee that all "),a("code",[t._v("HTTPClient")]),t._v(" connections to this URL\nare to a server that holds the private key corresponding to the public key embedded in the\ncertificate, therefore authenticating the server and preventing man-in-the-middle attacks.")]),t._v(" "),a("h3",{attrs:{id:"concepts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#concepts"}},[t._v("#")]),t._v(" Concepts")]),t._v(" "),a("p",[t._v("Typically, HTTPS connections are authenticated using a chain of trust, where the identities of various\nintermediate certificate authorities (CA) are checked until a trusted root CA can be authenticated.")]),t._v(" "),a("p",[t._v("For example, an intermediate CA signs the HTTPS server's certificate used to check the identity\nof the HTTPS server you want to connect to.  However, the intermediate CA cannot be trusted\nuntil its identity is verified. The certificate of the intermediate CA must be checked to see if the\nCA is trusted. This process repeats until a root CA can be checked.\nOnce all identities have been validated, the application can establish\na secure connection to the HTTPS server.  This mechanism is known as a certificate chain.")]),t._v(" "),a("p",[t._v("This mechanism relies on trusting third parties to carefully check and validate other companies\nthat sign certificates.  If an untrustworthy CA issues a valid certificate to\nan attacker or an attacker gets a hold of a CA's private key, the attacker can insert\nthemselves into the certificate chain, then intercept and send data to the client.\nThis is known as a man-in-the-middle attack.")]),t._v(" "),a("p",[t._v("To prevent man-in-the-middle-attacks, the security manager,\ncreated by this module, ensures that the public key in the leaf certificate (or other certificate identified\nby the "),a("code",[t._v("trustChainIndex")]),t._v(" property) of the chain is the same as the public key in the certificate configured\nwith this URL. If the public keys match, the chain is passed onto the underlying OS to authenticate.\nIf they do not match, the connection is terminated.")]),t._v(" "),a("p",[t._v("Since we pass the chain to the underlying OS to validate, self-signed certificates will be rejected.\nNote that the "),a("code",[t._v("validatesSecureCertificate")]),t._v(" property of the "),a("code",[t._v("HTTPClient")]),t._v(" is not honored for pinned URL's.")]),t._v(" "),a("p",[t._v("For the Security Manager to participate in the connection, the initial URL must be configured.")]),t._v(" "),a("p",[t._v("If a connection redirects to a different host, then public key validation on the redirected URL will\nonly be performed if that URL is also configured in the Security Manager. If the redirected URL is\nnot configured, then the default OS authentication is triggered.")]),t._v(" "),a("h3",{attrs:{id:"getting-started"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[t._v("#")]),t._v(" Getting Started")]),t._v(" "),a("p",[t._v("Once you have "),a("a",{attrs:{href:"#!/guide/Using_a_Module"}},[t._v("installed")]),t._v(" the module and added it as a depedency and\nuse "),a("code",[t._v("require()")]),t._v(" (ES5) or "),a("code",[t._v("import")]),t._v(" (ES6+) to access it from JavaScript:")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ES5")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" https "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'appcelerator.https'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ES6+")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'appcelerator.https'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("The "),a("code",[t._v("https")]),t._v(" variable is a reference to the module object.  Use this reference to call the\n"),a("code",[t._v("createX509CertificatePinningSecurityManager()")]),t._v(" method to authenticate the specified HTTPS URLs.\nPass in an array of dictionaries as the only required parameter to the method. Each\ndictionary in the array contains three keys (two of them required):")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("url")]),t._v(": URL of the server to contact. Can be a fixed URL or wildcard URL (if supported by the certificate)")]),t._v(" "),a("li",[a("code",[t._v("serverCertificate")]),t._v(": X.509 certificate in DER format to verify the server's identity")]),t._v(" "),a("li",[a("code",[t._v("trustChainIndex")]),t._v(": (Optional) index of the trust-chain certificate to validate against (default: 0 - leaf certificate).")])]),t._v(" "),a("p",[t._v("For example:")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" securityManager "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" https"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createX509CertificatePinningSecurityManager")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        url"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://www.example.com'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        serverCertificate"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'exampleServerCertificate.der'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        trustChainIndex"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("After the security manager is created, create an "),a("code",[t._v("HTTPClient")]),t._v(" object and set the\n"),a("type-link",{attrs:{type:"Titanium.Network.HTTPClient.securityManager"}},[t._v("securityManager")]),t._v(" property to the security manager\nobject you just created.  You must set this property when creating the "),a("code",[t._v("HTTPClient")]),t._v(" instance.")],1),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" httpClient "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Network"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createHTTPClient")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onload")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        Ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("API")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("info")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Received text: '")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" httpClient"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("responseText"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onerror")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        Ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("API")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("error")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("error"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    timeout"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// You can only set this property when creating the HTTPClient")]),t._v("\n    securityManager"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" securityManager\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("After the "),a("code",[t._v("securityManager")]),t._v(" property is set, call the "),a("code",[t._v("HTTPClient")]),t._v("'s "),a("code",[t._v("open()")]),t._v(" and "),a("code",[t._v("send()")]),t._v("\nmethods to initiate the HTTPS request.")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("httpClient"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'GET'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://example.com'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nhttpClient"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("send")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("If the authentication fails, a security exception is thrown. The HTTP client's "),a("code",[t._v("onerror")]),t._v("\ncallback will be passed an error object with the "),a("code",[t._v("code")]),t._v(" key set to "),a("code",[t._v("-1")]),t._v(" and the "),a("code",[t._v("message")]),t._v(" key\nset to the following message:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("`Certificate could not be verified with provided public key`\n")])])]),a("p",[t._v("To perform another HTTPS request, you need to create another "),a("code",[t._v("HTTPClient")]),t._v(" object and follow the\nsame procedure to initiate an HTTPS request.  You can reuse the same security manager object.")]),t._v(" "),a("h2",{attrs:{id:"examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),a("h3",{attrs:{id:"simple-example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#simple-example"}},[t._v("#")]),t._v(" Simple Example")]),t._v(" "),a("p",[t._v("This example pins two URLs.")]),t._v(" "),a("p",[t._v("The first URL, https://dashboard.appcelerator.com, is pinned to the\npublic key in the X.509 certificate, named "),a("code",[t._v("appcelerator.com.pem")]),t._v(", located in the\napplication's "),a("code",[t._v("Resources")]),t._v(" directory (Classic) or "),a("code",[t._v("app/assets/")]),t._v(" directory (Alloy).")]),t._v(" "),a("p",[t._v("The second URL, https://www.wellsfargo.com, is pinned to the public\nkey in the X.509 certificate, named "),a("code",[t._v("wellsfargo.der")]),t._v(", located the application's\n"),a("code",[t._v("Resources")]),t._v(" directory (Classic) or "),a("code",[t._v("app/assets/")]),t._v(" directory (Alloy).")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Require in the module")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" https "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'appcelerator.https'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    securityManager"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    httpClient"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Use the module to create a Security Manager that authenticates the specified URLs")]),t._v("\nsecurityManager "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" https"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createX509CertificatePinningSecurityManager")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        url"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://dashboard.appcelerator.com'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        serverCertificate"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'dashboard.appcelerator.com.der'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        url"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://www.wellsfargo.com'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        serverCertificate"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'wellsfargo.der'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Create an HTTP client the same way you always have")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// but pass in the optional Security Manager that was created previously.")]),t._v("\nhttpClient "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Network"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createHTTPClient")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onload")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        Ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("API")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("info")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Received text: '")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" httpClient"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("responseText"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onerror")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        Ti"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("API")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("error")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("error"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    timeout"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Set this property before calling the `open` method. ")]),t._v("\n    securityManager"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" securityManager\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Prepare the HTTPS connection in the same way you always have")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// and the Security Manager will authenticate all servers for")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// which it was configured before any communication happens.")]),t._v("\nhttpClient"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'GET'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://dashboard.appcelerator.com'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Send the request in the same way you always have.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Throws a Security Exception if authentication fails.")]),t._v("\nhttpClient"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("send")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("ApiDocs")],1)}),[],!1,null,null,null);e.default=n.exports}}]);