(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{172:function(n,t,e){"use strict";e(86);var r={},l=e(19),component=Object(l.a)(r,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"flex flex-col min-h-screen justify-between bg-black"},[e("div",{staticClass:"lg:pl-10 lg:pr-10 md:pl-10 container"},[e("Navbar"),n._v(" "),e("Nuxt")],1),n._v(" "),e("Footer",{staticClass:"pl-10 pr-40"})],1)}),[],!1,null,null,null);t.a=component.exports;installComponents(component,{Navbar:e(229).default,Footer:e(230).default})},175:function(n,t,e){e(176),n.exports=e(177)},218:function(n,t,e){var r=e(61)((function(i){return i[1]}));r.push([n.i,'@font-face{\n  font-family:"Inconsolata",monospace;\n\n  src:url(https://fonts.googleapis.com/css2?display=swap&family=Inconsolata%3Awght%40200%3B300%3B400%3B500%3B600%3B700%3B800%3B900)\n}\n\n*{\n  margin:0;\n  padding:0;\n  box-sizing:border-box;\n  font-size:16px;\n  font-family:"Inconsolata",monospace;\n  image-rendering:crisp-edges\n}\n\n.colorful-border{\n  border:1px solid #e69c7e\n}\n\n.font-colorful{\n  color:#e69c7e\n}\n\n.social-link:hover{\n  text-decoration:underline\n}\n\nbackground{\n  background:#202020\n}\n\n.about{\n  display:flex;\n  flex-direction:row;\n  justify-content:space-between\n}\n\n.about-description{\n  position:absolute;\n  width:100%\n}\n\n.image{\n  width:400px;\n  opacity:.7;\n  border-radius:5px\n}\n\n.description{\n  display:flex;\n  flex-direction:column\n}\n\n.cat-image{\n  width:350px;\n  border-radius:5px\n}\n\n@media(max-width:1020px){\n  .about{\n    flex-direction:column\n  }\n\n  .image{\n    width:300px\n  }\n\n  .description{\n    margin-top:50px\n  }\n}\n\n.description-about span{\n  background:#000;\n  background:rgba(0,0,0,.7);\n  padding:10px\n}\n\n.description-about span.spacer{\n  padding:0 5px\n}\n\narticle{\n  color:#fff\n}\n\n.nuxt-content h2{\n  font-weight:700;\n  font-size:28px\n}\n\n.nuxt-content h3{\n  font-weight:700;\n  font-size:22px\n}\n\n.nuxt-content p{\n  margin-bottom:20px\n}\n\n.illustrations{\n  grid-column:2/4;\n  grid-gap:2em;\n  grid-template-columns:470px 470px\n}\n\n.illustrations,.illustrations-pixel{\n  width:100%;\n  box-sizing:border-box;\n  display:grid\n}\n\n.illustrations-pixel{\n  grid-column:2/4;\n  grid-gap:2em;\n  grid-template-columns:300px 300px 300px\n}\n\n.illustrations-pixel img,.illustrations img{\n  border-radius:5px\n}\n\n@media(max-width:1020px){\n  .illustrations{\n    grid-column:1/4;\n    width:100%;\n    box-sizing:border-box;\n    display:grid;\n    grid-gap:2em;\n    grid-template-columns:400px\n  }\n}\n\n.container{\n  display:flex\n}\n\n@media(max-width:1024px){\n  .container{\n    display:flex;\n    flex-direction:column;\n    padding:0 50px 50px\n  }\n}',""]),n.exports=r},219:function(n,t,e){n.exports=e.p+"img/distromari-2.3638ad1.png"},229:function(n,t,e){"use strict";e.r(t);e(86);var r={data:function(){return{open:!1}},methods:{toggle:function(){this.open=!this.open}}},l=e(19),component=Object(l.a)(r,(function(){var n=this,t=n.$createElement,r=n._self._c||t;return r("nav",{staticClass:"mt-11 font-sans antialiased"},[r("div",{staticClass:"flex flex-row justify-between"},[r("div",[r("nuxt-link",{attrs:{to:"/"}},[r("img",{staticClass:"h-7",attrs:{src:e(219),alt:"Distromari"}})])],1),n._v(" "),r("div",{staticClass:"lg:hidden"},[r("button",{staticClass:"flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light text-white border-white",on:{click:n.toggle}},[r("svg",{staticClass:"fill-current h-3 w-3",attrs:{viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[r("title",[n._v("Menu")]),r("path",{attrs:{d:"M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"}})])])])]),n._v(" "),r("div",{staticClass:"w-full flex-grow lg:flex lg:items-center lg:w-auto",class:n.open?"block":"hidden"},[r("div",{staticClass:"mt-6"},[r("ul",{staticClass:"list-none flex flex-col font-regular"},[r("li",{staticClass:"text-white cursor-pointer hover:underline"},[r("nuxt-link",{attrs:{to:"/"}},[n._v("\n            Home\n          ")])],1),n._v(" "),r("li",{staticClass:"text-white cursor-pointer mt-2 hover:underline"},[r("nuxt-link",{attrs:{to:"/notes"}},[n._v("\n            Notes\n          ")])],1),n._v(" "),r("li",{staticClass:"text-white cursor-pointer mt-2 hover:underline"},[r("nuxt-link",{attrs:{to:"/readme"}},[n._v("\n            Readme\n          ")])],1),n._v(" "),r("li",{staticClass:"text-white cursor-pointer mt-2 hover:underline"},[r("nuxt-link",{attrs:{to:"/projects"}},[n._v("\n            Projects\n          ")])],1),n._v(" "),n._m(0),n._v(" "),r("hr",{staticClass:"mt-2"}),n._v(" "),r("li",{staticClass:"text-white cursor-pointer mt-2 hover:underline"},[r("nuxt-link",{attrs:{to:"/illustrations"}},[n._v("\n            Illustrations\n          ")])],1)])])])])}),[function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("li",{staticClass:"text-white cursor-pointer mt-2 hover:underline"},[e("a",{attrs:{href:"https://distromari.dev/blog/",target:"_blank"}},[n._v("\n            📕 My mdzk >\n          ")])])}],!1,null,null,null);t.default=component.exports},230:function(n,t,e){"use strict";e.r(t);e(86);var r={},l=e(19),component=Object(l.a)(r,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"text-white bg-black font-regular pt-3 pb-3 align-left border-t"},[e("div",{staticClass:"flex flex-row"},[e("nuxt-link",{attrs:{to:"/"}},[e("p",[n._v("distromari"),e("span",[n._v(" © 2021|")])])]),n._v(" "),e("a",{staticClass:"social-link",attrs:{href:"https://github.com/distromari",target:"_blank"}},[n._v("github")]),n._v("-\n    "),e("a",{staticClass:"social-link",attrs:{href:"https://www.linkedin.com/in/marianamorais000/",target:"_blank"}},[n._v("linkedin")]),n._v("-\n    "),e("a",{staticClass:"social-link",attrs:{href:"https://vsco.co/distromari/gallery",target:"_blank"}},[n._v("gallery")]),n._v("-\n    "),e("a",{staticClass:"social-link",attrs:{href:"https://open.spotify.com/user/71bpuje82mdyi3ppj6zxevw8c",target:"_blank"}},[n._v("spotify")])],1)])}),[],!1,null,null,null);t.default=component.exports},86:function(n,t,e){var content=e(218);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,e(62).default)("fcbcc66c",content,!0,{sourceMap:!1})}},[[175,10,1,11]]]);