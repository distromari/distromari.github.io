(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{155:function(t,n,e){var content=e(228);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(39).default)("1239d49d",content,!0,{sourceMap:!1})},173:function(t,n,e){"use strict";e(227);var o=e(19),component=Object(o.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"flex flex-col min-h-screen justify-between bg-black"},[e("div",{staticClass:"lg:pl-10 lg:pr-10 md:pl-10 container"},[e("Navbar"),t._v(" "),e("Nuxt")],1),t._v(" "),e("Footer",{staticClass:"pl-10 pr-40"})],1)}),[],!1,null,null,null);n.a=component.exports;installComponents(component,{Navbar:e(240).default,Footer:e(241).default})},176:function(t,n,e){e(177),t.exports=e(178)},217:function(t,n,e){var content=e(218);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(39).default)("ff830ea8",content,!0,{sourceMap:!1})},218:function(t,n,e){var o=e(38),l=e(219),r=e(220),c=e(221),f=e(222),d=e(223),x=e(224),m=o((function(i){return i[1]})),v=l(r),h=l(c),C=l(f),w=l(d),_=l(x);m.push([t.i,'@font-face{\n  font-family:"FiraCode Light";\n\n  src:local("FiraCode Light"),local("FiraCode-Light"),url('+v+') format("truetype");\n\n  font-weight:300;\n\n  font-style:normal\n}\n\n@font-face{\n  font-family:"FiraCode Regular";\n\n  src:local("FiraCode Regular"),local("FiraCode-Regular"),url('+h+') format("truetype");\n\n  font-weight:400;\n\n  font-style:normal\n}\n\n@font-face{\n  font-family:"FiraCode Medium";\n\n  src:local("FiraCode Medium"),local("FiraCode-Medium"),url('+C+') format("truetype");\n\n  font-weight:500;\n\n  font-style:normal\n}\n\n@font-face{\n  font-family:"FiraCode SemiBold";\n\n  src:local("FiraCode SemiBold"),local("FiraCode-SemiBold"),url('+w+') format("truetype");\n\n  font-weight:600;\n\n  font-style:normal\n}\n\n@font-face{\n  font-family:"FiraCode Bold";\n\n  src:local("FiraCode Bold"),local("FiraCode-Bold"),url('+_+') format("truetype");\n\n  font-weight:700;\n\n  font-style:normal\n}',""]),t.exports=m},220:function(t,n,e){t.exports=e.p+"fonts/FiraCode-Light.8463b65.ttf"},221:function(t,n,e){t.exports=e.p+"fonts/FiraCode-Regular.1addc84.ttf"},222:function(t,n,e){t.exports=e.p+"fonts/FiraCode-Medium.a8d0415.ttf"},223:function(t,n,e){t.exports=e.p+"fonts/FiraCode-SemiBold.301c34e.ttf"},224:function(t,n,e){t.exports=e.p+"fonts/FiraCode-Bold.e0cfc6e.ttf"},227:function(t,n,e){"use strict";e(155)},228:function(t,n,e){var o=e(38)((function(i){return i[1]}));o.push([t.i,".container{\n  display:flex\n}\n@media (max-width:1024px){\n.container{\n    display:flex;\n    flex-direction:column;\n    padding:0 50px 50px\n}\n}",""]),t.exports=o},229:function(t,n,e){t.exports=e.p+"img/distromari-2.3638ad1.png"},230:function(t,n,e){"use strict";e.r(n),e.d(n,"actions",(function(){return o}));var o={nuxtServerInit:function(t){var n=t.commit;console.log("Running",n)}}},240:function(t,n,e){"use strict";e.r(n);var o={data:function(){return{open:!1}},methods:{toggle:function(){this.open=!this.open}}},l=e(19),component=Object(l.a)(o,(function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("nav",{staticClass:"mt-11 font-sans antialiased"},[o("div",{staticClass:"flex flex-row justify-between"},[o("div",[o("nuxt-link",{attrs:{to:"/"}},[o("img",{staticClass:"h-8",attrs:{src:e(229),alt:"Distromari"}})])],1),t._v(" "),o("div",{staticClass:"lg:hidden"},[o("button",{staticClass:"flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light text-white border-white",on:{click:t.toggle}},[o("svg",{staticClass:"fill-current h-3 w-3",attrs:{viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[o("title",[t._v("Menu")]),o("path",{attrs:{d:"M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"}})])])])]),t._v(" "),o("div",{staticClass:"w-full flex-grow lg:flex lg:items-center lg:w-auto",class:t.open?"block":"hidden"},[o("div",{staticClass:"mt-6"},[o("ul",{staticClass:"list-none flex flex-col font-regular"},[o("li",{staticClass:"text-white cursor-pointer"},[o("nuxt-link",{attrs:{to:"/"}},[t._v("\n            Begin\n          ")])],1),t._v(" "),o("li",{staticClass:"text-white cursor-pointer mt-2"},[o("nuxt-link",{attrs:{to:"/blog"}},[t._v("\n            Blog\n          ")])],1),t._v(" "),o("li",{staticClass:"text-white cursor-pointer mt-2"},[o("nuxt-link",{attrs:{to:"/readme"}},[t._v("\n            Readme\n          ")])],1),t._v(" "),o("li",{staticClass:"text-white cursor-pointer mt-2"},[o("nuxt-link",{attrs:{to:"/projects"}},[t._v("\n            Projects\n          ")])],1),t._v(" "),o("li",{staticClass:"text-white cursor-pointer mt-2"},[o("nuxt-link",{attrs:{to:"/illustration"}},[t._v("\n            Illustrations\n          ")])],1)])])])])}),[],!1,null,null,null);n.default=component.exports},241:function(t,n,e){"use strict";e.r(n);var o=e(19),component=Object(o.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"text-white bg-black font-regular pt-3 pb-3 align-left flex flex-row border-t"},[e("nuxt-link",{attrs:{to:"/"}},[e("p",[t._v("distromari"),e("span",[t._v(" © 2021|")])])]),t._v(" "),e("nuxt-link",{attrs:{to:"/"}},[e("p",[t._v("github-")])]),t._v(" "),e("nuxt-link",{attrs:{to:"/"}},[e("p",[t._v("linkedin")])])],1)}),[],!1,null,null,null);n.default=component.exports}},[[176,12,1,13]]]);