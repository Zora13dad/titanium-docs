(window.webpackJsonp=window.webpackJsonp||[]).push([[218],{1060:function(e,a,s){"use strict";s.r(a);var r=s(21),n=Object(r.a)({},(function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"modules-cloud-objects"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#modules-cloud-objects"}},[e._v("#")]),e._v(" Modules.Cloud.Objects")]),e._v(" "),s("TypeHeader"),e._v(" "),s("h2",{attrs:{id:"examples"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[e._v("#")]),e._v(" Examples")]),e._v(" "),s("h3",{attrs:{id:"create-custom-object"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-custom-object"}},[e._v("#")]),e._v(" Create Custom Object")]),e._v(" "),s("p",[e._v("This example creates a new custom object and checks the response.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("Cloud.Objects.create({\n    classname: 'cars',\n    fields: {\n        make: 'nissan',\n        color: 'blue',\n        year: 2005\n    }\n}, function (e) {\n    if (e.success) {\n        var car = e.cars[0];\n        alert('Success:\\n' +\n            'id: ' + car.id + '\\n' +\n            'make: ' + car.make + '\\n' +\n            'color: ' + car.color + '\\n' +\n            'year: ' + car.year + '\\n' +\n            'created_at: ' + car.created_at);\n    } else {\n        alert('Error:\\n' +\n            ((e.error && e.message) || JSON.stringify(e)));\n    }\n});\n")])])]),s("h3",{attrs:{id:"show-custom-objects"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#show-custom-objects"}},[e._v("#")]),e._v(" Show Custom Objects")]),e._v(" "),s("p",[e._v("This example requests information about custom objects and checks the response.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("Cloud.Objects.show({\n    classname: 'cars',\n    ids: [ savedCar1.id, savedCar2.id ]\n}, function (e) {\n    if (e.success) {\n        alert('Success:\\n' +\n            'Count: ' + e.cars.length);\n        for (var i = 0; i < e.cars.length; i++) {\n            var car = e.cars[i];\n            alert('id: ' + cars.id + '\\n' +\n                'make: ' + car.make + '\\n' +\n                'color: ' + car.color + '\\n' +\n                'year: ' + car.year + '\\n' +\n                'created_at: ' + car.created_at);\n        }\n    } else {\n        alert('Error:\\n' +\n            ((e.error && e.message) || JSON.stringify(e)));\n    }\n});\n")])])]),s("h3",{attrs:{id:"update-custom-object"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#update-custom-object"}},[e._v("#")]),e._v(" Update Custom Object")]),e._v(" "),s("p",[e._v("This example updates a custom object and checks the response.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("Cloud.Objects.update({\n    classname: 'cars',\n    id: savedCar1.id,\n    fields: {\n        color: 'purple',\n        mileage: 10000\n    }\n}, function (e) {\n    if (e.success) {\n        var car = e.cars[0];\n        alert('Success:\\n' +\n            'id: ' + car.id + '\\n' +\n            'make: ' + car.make + '\\n' +\n            'color: ' + car.color + '\\n' +\n            'year: ' + car.year + '\\n' +\n            'mileage: ' + car.mileage + '\\n' +\n            'updated_at: ' + car.updated_at);\n    } else {\n        alert('Error:\\n' +\n            ((e.error && e.message) || JSON.stringify(e)));\n    }\n});\n")])])]),s("h3",{attrs:{id:"remove-custom-object"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#remove-custom-object"}},[e._v("#")]),e._v(" Remove Custom Object")]),e._v(" "),s("p",[e._v("This example deletes a custom object and checks the response.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("Cloud.Objects.remove({\n    classname: 'cars',\n    id: savedCar1.id\n}, function (e) {\n    if (e.success) {\n        alert('Success');\n    } else {\n        alert('Error:\\n' +\n            ((e.error && e.message) || JSON.stringify(e)));\n    }\n});\n")])])]),s("h3",{attrs:{id:"query-for-custom-objects"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#query-for-custom-objects"}},[e._v("#")]),e._v(" Query for Custom Objects")]),e._v(" "),s("p",[e._v("This example requests information about custom objects and checks the response.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[e._v("Cloud.Objects.query({\n    classname: 'cars',\n    page: 1,\n    per_page: 10,\n    where: {\n        color: 'blue'\n    }\n}, function (e) {\n    if (e.success) {\n        alert('Success:\\n' +\n            'Count: ' + e.cars.length);\n        for (var i = 0; i < e.cars.length; i++) {\n            var car = e.cars[i];\n            alert('id: ' + cars.id + '\\n' +\n                'make: ' + car.make + '\\n' +\n                'color: ' + car.color + '\\n' +\n                'year: ' + car.year + '\\n' +\n                'created_at: ' + car.created_at);\n        }\n    } else {\n        alert('Error:\\n' +\n            ((e.error && e.message) || JSON.stringify(e)));\n    }\n});\n")])])]),s("ApiDocs")],1)}),[],!1,null,null,null);a.default=n.exports}}]);