(window.webpackJsonp=window.webpackJsonp||[]).push([[220],{1039:function(e,n,s){"use strict";s.r(n);var a=s(21),r=Object(a.a)({},(function(){var e=this,n=e.$createElement,s=e._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"modules-cloud-socialintegrations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#modules-cloud-socialintegrations"}},[e._v("#")]),e._v(" Modules.Cloud.SocialIntegrations")]),e._v(" "),s("TypeHeader"),e._v(" "),s("h2",{attrs:{id:"examples"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),s("h3",{attrs:{id:"log-in-external-account"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#log-in-external-account"}},[e._v("#")]),e._v(" Log in External Account")]),e._v(" "),s("p",[e._v("This example logs a user in using an external account and checks the response")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("Cloud.SocialIntegrations.externalAccountLogin({\n    type: 'facebook',\n    token: Ti.Facebook.accessToken\n}, function (e) {\n    if (e.success) {\n        var user = e.users[0];\n        alert('Success:\\n' +\n            'id: ' + user.id + '\\n' +\n            'first name: ' + user.first_name + '\\n' +\n            'last name: ' + user.last_name);\n    } else {\n        alert('Error:\\n' +\n            ((e.error && e.message) || JSON.stringify(e)));\n    }\n});\n")])])]),s("h3",{attrs:{id:"link-in-external-account"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#link-in-external-account"}},[e._v("#")]),e._v(" Link in External Account")]),e._v(" "),s("p",[e._v("This example links an external account and checks the response")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("Cloud.SocialIntegrations.externalAccountLink({\n    type: 'facebook',\n    token: Ti.Facebook.accessToken\n}, function (e) {\n    if (e.success) {\n        var user = e.users[0];\n        alert('Success:\\n' +\n            'id: ' + user.id + '\\n' +\n            'first name: ' + user.first_name + '\\n' +\n            'last name: ' + user.last_name);\n    } else {\n        alert('Error:\\n' +\n            ((e.error && e.message) || JSON.stringify(e)));\n    }\n});\n")])])]),s("h3",{attrs:{id:"search-for-facebook-friends"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#search-for-facebook-friends"}},[e._v("#")]),e._v(" Search for Facebook Friends")]),e._v(" "),s("p",[e._v("This example retrieves a list of Facebook Friends and checks the response")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("Cloud.SocialIntegrations.searchFacebookFriends(function (e){\n    if (e.success) {\n        alert('Success:\\n' +\n            'Count: ' + e.users.length);\n        for (var i = 0; i < e.users.length; i++) {\n            var user = e.users[i];\n            alert('id: ' + user.id + '\\n' +\n                'first name: ' + user.first_name + '\\n' +\n                'last name: ' + user.last_name);\n         }\n    } else {\n        alert('Error:\\n' +\n            ((e.error && e.message) || JSON.stringify(e)));\n    }\n});\n")])])]),s("ApiDocs")],1)}),[],!1,null,null,null);n.default=r.exports}}]);