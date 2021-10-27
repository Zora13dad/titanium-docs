(window.webpackJsonp=window.webpackJsonp||[]).push([[1097],{2038:function(t,a,n){"use strict";n.r(a);var s=n(21),e=Object(s.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"animation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#animation"}},[t._v("#")]),t._v(" Animation")]),t._v(" "),n("h2",{attrs:{id:"objective"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#objective"}},[t._v("#")]),t._v(" Objective")]),t._v(" "),n("p",[t._v('Animation can be "eye-candy" or can direct users to pay attention to some portion of your app. Either way, animations add visual interest and (when used appropriately) add professionalism to your app. In this section, you will learn how to animate the properties of UI components, use 2D and 3D matrices, and implement transitions on iOS.')]),t._v(" "),n("h2",{attrs:{id:"contents"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#contents"}},[t._v("#")]),t._v(" Contents")]),t._v(" "),n("h3",{attrs:{id:"basic-animations"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#basic-animations"}},[t._v("#")]),t._v(" Basic animations")]),t._v(" "),n("p",[t._v("Basic animations involve altering the properties of UI elements, such as their top/left coordinates, background colors, opacity, and so forth. You animate these property changes using the "),n("code",[t._v("animate()")]),t._v(" method available to any component that inherits from "),n("code",[t._v("Ti.UI.View")]),t._v(". This method accepts two parameters: a "),n("a",{attrs:{href:"#!/api/Titanium.UI.Animation"}},[t._v("Ti.UI.Animation")]),t._v(" object (or Dictionary) and an optional callback function. The animation object describes the properties the component will have when the animation finishes. The callback function is invoked when the animation finishes.")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("// box is a Ti.UI.View, when clicked, it fades out of view in 2 seconds, then fades back into view\nbox.addEventListener('click', function(){\n  box.animate({\n    opacity: 0,\n    duration: 2000\n  }, function(){\n    box.animate({\n      opacity: 1,\n      duration: 2000\n    });\n  });\n});\n")])])]),n("p",[t._v("Alternatively, you could use Animation objects to do the same thing:")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ti"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("createAnimation")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  opacity"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  duration"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2000")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" b "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ti"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("createAnimation")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  opacity"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  duration"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2000")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nbox"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'click'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  box"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("animate")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    box"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("animate")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("b"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("p",[t._v("We explicitly coded a function to reverse the animation effect to demonstrate how to use the callback parameter. In practice, if all you're doing is reversing an animation, simply set "),n("code",[t._v("autoreverse=true")]),t._v(" on the initial animation operation and don't pass the callback function. We use this technique in the matrix transformations below.")]),t._v(" "),n("p",[t._v("Animation objects are most useful when you want to reuse a particular animation effect with multiple objects. You define the animation effect once and simply apply it to each component.")]),t._v(" "),n("h3",{attrs:{id:"matrix-animations"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#matrix-animations"}},[t._v("#")]),t._v(" Matrix animations")]),t._v(" "),n("p",[t._v("Matrix animations are also called "),n("a",{attrs:{href:"http://www.willamette.edu/~gorr/classes/GeneralGraphics/Transforms/transforms2d.htm",target:"_blank",rel:"noopener noreferrer"}},[t._v("transformations"),n("OutboundLink")],1),t._v('. Consider the set of x/y coordinates that represent the "edges" of an element. A matrix transformation mathematically alters those coordinates to alter the element. You can perform 2-dimensional transformations (in the x/y plane) and 3-dimensional transformations (in the x/y/z space). With either, you can scale, rotate, move (translate), and skew (shear) a component. (See the API docs for further transformation possibilities.)')]),t._v(" "),n("h3",{attrs:{id:"_2d-matrix-animations"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2d-matrix-animations"}},[t._v("#")]),t._v(" 2D matrix animations")]),t._v(" "),n("p",[t._v("2D matrix animations are supported in Titanium on both iOS and Android. Such transformations operate in two dimensional space (in the plane represented by the surface of the device).")]),t._v(" "),n("p",[t._v("To implement a transformation, you'll need to create an instance of the "),n("a",{attrs:{href:"#!/api/Titanium.UI.2DMatrix"}},[t._v("Ti.UI.2DMatrix")]),t._v(" object and set the target properties for your component. Then, you create an Animation object and set its "),n("code",[t._v("transform")]),t._v(" property to equal your matrix object.")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" matrix2d "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ti"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("create2DMatrix")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmatrix2d "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" matrix2d"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("rotate")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// in degrees")]),t._v("\nmatrix2d "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" matrix2d"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("scale")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.5")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// scale to 1.5 times original size")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ti"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("createAnimation")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  transform"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" matrix2d"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  duration"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2000")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  autoreverse"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  repeat"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nbox"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("animate")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// set the animation in motion")]),t._v("\n")])])]),n("p",[t._v("As shown, you can perform multiple transformations in a single operation. Sometimes, the order in which you do so will control the visual effect created.")]),t._v(" "),n("h3",{attrs:{id:"_3d-matrix-animations"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3d-matrix-animations"}},[t._v("#")]),t._v(" 3D matrix animations")]),t._v(" "),n("p",[t._v('3D matrix animations are translations in three dimensions. Again, you can rotate, scale, translate and so forth. Keep in mind that you won\'t be working with 3D virtual objects. So, they will have no "back" sides to show. 3D transformations are supported on iOS only. See the '),n("a",{attrs:{href:"#!/api/Titanium.UI.3DMatrix"}},[t._v("Titanium.UI.3DMatrix")]),t._v(" API reference guide for more information.")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" matrix3d "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ti"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("create3DMatrix")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// In next statement, the first arg is in degrees and the next three define an xyz vector describing the transformation")]),t._v("\nmatrix3d "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" matrix3d"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("rotate")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("180")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmatrix3d "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" matrix3d"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("scale")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// scale factor in the xyz axes")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ti"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("createAnimation")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  transform"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" matrix3d"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  duration"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2000")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  autoreverse"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  repeat"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nbox"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("animate")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// set the animation in motion")]),t._v("\n")])])]),n("h3",{attrs:{id:"transitions"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#transitions"}},[t._v("#")]),t._v(" Transitions")]),t._v(" "),n("p",[t._v("Transitions are another iOS-only feature. Transitions are built-in animations that you use when switching between Windows or Views. "),n("code",[t._v("transition")]),t._v(" is a property of the Animation object. With transitions, you would define a starting and ending View/Window to show, and set a constant from the Ti.UI.iOS namespace to specify which type of transition to use.")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// container is a View to which box1 and box2 are added")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" selectedIndex "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ncontainer"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'click'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("selectedIndex"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    container"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("animate")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      view"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" box2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      transition"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("Ti"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("iPhone"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("AnimationStyle"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("FLIP_FROM_LEFT")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    container"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("animate")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      view"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" box1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      transition"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("Ti"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("iPhone"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("AnimationStyle"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("FLIP_FROM_RIGHT")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  selectedIndex"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("p",[t._v("To create transition animations for Windows in a NavigationWindow or Tab, use the Window's "),n("code",[t._v("transitionAnimation")]),t._v(" property. Create a transition animation object with the "),n("code",[t._v("Titanium.UI.iOS.createTransitionAnimation")]),t._v(" method to specify animation objects to hide the current window and show the new window.")]),t._v(" "),n("h3",{attrs:{id:"dynamic-animations"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#dynamic-animations"}},[t._v("#")]),t._v(" Dynamic animations")]),t._v(" "),n("p",[t._v("Dynamic animations are physics-related animations and with them, you set up an Animator object and add behaviors (animation rules), such as gravitational or push forces, and items (view objects) to be animated. See the "),n("a",{attrs:{href:"#!/api/Titanium.UI.iOS.Animator"}},[t._v("Titanium.UI.iOS.Animator API reference guide")]),t._v(" as starting point.")]),t._v(" "),n("h3",{attrs:{id:"references"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[t._v("#")]),t._v(" References")]),t._v(" "),n("ul",[n("li",[n("p",[n("a",{attrs:{href:"http://www.willamette.edu/~gorr/classes/GeneralGraphics/Transforms/transforms2d.htm",target:"_blank",rel:"noopener noreferrer"}},[t._v("2D Transformations"),n("OutboundLink")],1),t._v(" from Willamette college course")])]),t._v(" "),n("li",[n("p",[n("a",{attrs:{href:"http://developer.apple.com/library/ios/#DOCUMENTATION/Cocoa/Conceptual/CoreAnimation_guide/Articles/Layers.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Layer Geometry and Transforms"),n("OutboundLink")],1),t._v(" from developer.apple.com")])]),t._v(" "),n("li",[n("p",[n("a",{attrs:{href:"http://works.bepress.com/cgi/viewcontent.cgi?article=1008&context=bruce_kessler",target:"_blank",rel:"noopener noreferrer"}},[t._v("Using Works of Visual Art to Teach MatrixTransformations"),n("OutboundLink")],1),t._v(" from Western Kentucky University (lots of math!)")])]),t._v(" "),n("li",[n("p",[n("a",{attrs:{href:"http://www.euclideanspace.com/maths/algebra/matrix/orthogonal/rotation/index.htm",target:"_blank",rel:"noopener noreferrer"}},[t._v("Rotation Matrices"),n("OutboundLink")],1)])])]),t._v(" "),n("h2",{attrs:{id:"summary"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#summary"}},[t._v("#")]),t._v(" Summary")]),t._v(" "),n("p",[t._v("In this section, you learned that you can add visual interest and (when used appropriately) professionalism to your app by using animations. You learned how to animate the basic properties of UI components, how to use 2D and 3D matrix transformations, and how to implement transitions on iOS.")])])}),[],!1,null,null,null);a.default=e.exports}}]);