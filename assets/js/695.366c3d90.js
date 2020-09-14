(window.webpackJsonp=window.webpackJsonp||[]).push([[695],{1750:function(t,a,e){"use strict";e.r(a);var s=e(21),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"titanium-ui-maskedimage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#titanium-ui-maskedimage"}},[t._v("#")]),t._v(" Titanium.UI.MaskedImage")]),t._v(" "),e("TypeHeader"),t._v(" "),e("h2",{attrs:{id:"overview"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),e("p",[t._v("This is a control that can be used to display an image combined with\nanother image and/or color. The layers are drawn in the following order:")]),t._v(" "),e("ul",[e("li",[t._v("The "),e("code",[t._v("mask")]),t._v(", or background image.")]),t._v(" "),e("li",[t._v("The "),e("code",[t._v("image")]),t._v(", or foreground image.")]),t._v(" "),e("li",[t._v("The "),e("code",[t._v("tint")]),t._v(", or constant tint color.")])]),t._v(" "),e("p",[t._v("The way the layers are combined depends on the value of the "),e("code",[t._v("mode")]),t._v(" property.\nThe "),e("code",[t._v("mode")]),t._v(" value can be set to one of the "),e("type-link",{attrs:{type:"Titanium.UI"}},[t._v("Titanium.UI")]),t._v(" "),e("code",[t._v("BLEND_MODE")]),t._v(" constants.\nThese constants correspond directly to the blend modes described by Apple and Google here:")],1),t._v(" "),e("p",[e("a",{attrs:{href:"https://developer.apple.com/library/content/documentation/GraphicsImaging/Conceptual/drawingwithquartz2d/dq_images/dq_images.html#//apple_ref/doc/uid/TP30001066-CH212-TPXREF101",target:"_blank",rel:"noopener noreferrer"}},[t._v('"Bitmap Images and Image Masks" in Quartz2D Reference'),e("OutboundLink")],1)]),t._v(" "),e("p",[e("a",{attrs:{href:"https://developer.android.com/reference/android/graphics/PorterDuff.Mode.html",target:"_blank",rel:"noopener noreferrer"}},[t._v('"PorterDuff.Mode" Android Reference'),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("When compositing two images, the "),e("code",[t._v("mask")]),t._v(" property specifies the background, or\ndestination (D) image, and the "),e("code",[t._v("image")]),t._v(" property specifies the foreground, or\nsource (S) layer. For example, to use an image as an alpha mask for another image,\nyou could use the following code:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" imageMask "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Titanium"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("createMaskedImage")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    mask "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mask.png'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// alpha mask")]),t._v("\n    image "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'demo_image.png'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// image to mask")]),t._v("\n    mode "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Titanium"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("BLEND_MODE_SOURCE_OUT")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("Note that this control lacks many of the features associated with a standard\n"),e("type-link",{attrs:{type:"Titanium.UI.ImageView"}},[t._v("ImageView")]),t._v(" control.")],1),t._v(" "),e("p",[t._v("Use the "),e("type-link",{attrs:{type:"Titanium.UI.createMaskedImage"}},[t._v("Titanium.UI.createMaskedImage")]),t._v(" method to create a masked image view.")],1),t._v(" "),e("h2",{attrs:{id:"examples"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),e("h3",{attrs:{id:"lighten-blend-mode"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#lighten-blend-mode"}},[t._v("#")]),t._v(" Lighten Blend Mode")]),t._v(" "),e("p",[t._v("The following code excerpt blends the background image with the given "),e("code",[t._v("tint")]),t._v(" color:")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" imageMask "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Titanium"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("createMaskedImage")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    mask "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'demo_image.png'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// background image")]),t._v("\n    tint"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'red'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    mode "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Titanium"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("BLEND_MODE_LIGHTEN")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("ApiDocs")],1)}),[],!1,null,null,null);a.default=n.exports}}]);